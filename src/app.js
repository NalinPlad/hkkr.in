const utils = require('./utils');
const curlme = require('./curlme');
const gp = require('./genpage');
const parser = require('./parsequery')
const morgan = require('morgan');
const url = require('url');
const express = require('express');
const app = express();
const https = require('https');
const fetch = require('node-fetch-commonjs');
const useragent = require('express-useragent');
const PORT = 3050

const URL_comments = "https://news.ycombinator.com/item?id="
const HIGHLIGHT = "\x1b[48;5;220m\x1b[38;5;232m"
const RESET = "\x1b[0m"

// Cache for 30 seconds
let setCache = function (req, res, next) {
  const period = 30 

  // you only want to cache for GET requests
  if (req.method == 'GET') {
    res.set('Cache-control', `public, max-age=${period}`)
  } else {
    // for the other requests set strict no caching parameters
    res.set('Cache-control', `no-store`)
  }
  
  next()
}

// Express settings
app.use(morgan('common'))
app.use(setCache)
app.use(useragent.express())


/*
 *  ROUTES
 */

async function GetUrl(id){
  return new Promise(resolve => {
    fetch(URL_top, settings)
      .then(res => res.json())
      .then((json) => {
        resolve(json.url)
      })
  })
}


// Stories / Curlme
app.get('/:q?', async function(req, res){
  const opts = parser.parse(req.params.q)
  
  if(req.useragent.browser != "curl" && opts.u === false) {
    return res.redirect(302, "https://github.com/NalinPlad/hkkr.in");
  }
  if(opts == "curlme"){
    res.send(curlme.response)
  } else if (opts.id && opts.id != 0){
    if(opts.u){

      res.redirect(GetUrl(opts.id))
    } else {
      res.redirect(URL_comments + opts.id)
    }
  } else {
    const page = await gp.GeneratePage(opts.n,opts.a,opts.m,opts.s,opts.w,opts.h,opts.f)
    res.send(page)
  }

})



app.listen(process.env.PORT || PORT);
console.log(`${HIGHLIGHT}Listening on ${PORT+RESET}\n---\n`)
