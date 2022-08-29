const utils = require('./utils');
const curlme = require('./curlme');
const gp = require('./genpage');
const morgan = require('morgan');
const url = require('node:url');
const express = require('express');
const app = express();
const https = require('https');
const fetch = require('node-fetch-commonjs');

const PORT = 3050

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

app.get('/', async function(req, res){
    const page = await gp.GeneratePage(20)
    res.send(page)
})

// Story
app.get('/+/:id', async function(req, res){
  const ID = req.params.id
  console.log(ID)
  // Story links
  if(utils.isNumber(ID)){

    // fetch story to see if it is valid link
    fetch(URL_story+req.params.id+".json")
      .then(res => res.json())
      .then((json) => {
        if(json){
          res.redirect(URL_comments + req.params.id)
        } else {
          res.status(404).send("404?! the entered story id does not exist")
        }
      })
  

  }
});

app.listen(process.env.PORT || PORT);

console.log(`${HIGHLIGHT}Listening on ${PORT+RESET}\n---\n`)
