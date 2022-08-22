const morgan = require('morgan')
const url = require('node:url')
const express = require('express');
const app = express();
const https = require('https');
const fetch = require('node-fetch-commonjs');

const PORT = 3050

// Colors https://gist.github.com/fnky/458719343aabd01cfb17a3a4f7296797#256-colors
const RESET = "\x1b[0m"
const BOLD = "\x1b[1m"
const UNDERLINE = "\x1b[4m"
const DIM = "\x1b[2m"

const MAGENTA = "\x1b[38;5;50m"
const URL_C = "\x1b[38;5;103m"
const TITLE = "\x1b[38;5;253m"
const TIME = "\x1b[38;5;240m"

const HIGHLIGHT = "\x1b[48;5;220m\x1b[38;5;232m"
const BLACK_HIGHLIGHT = "\x1b[48;5;232m"

// Vote colors
const L1 = "\x1b[38;5;214m"
const L2 = "\x1b[38;5;215m"
const L3 = "\x1b[38;5;108m"
const L4 = "\x1b[38;5;150m"
const L5 = "\x1b[38;5;112m"
const L6 = "\x1b[38;5;40m"

// Max character length of title before cropping ...
const MAXLEN = 70 

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

app.use(morgan('dev'))
app.use(setCache)

const URL_top = "https://hacker-news.firebaseio.com/v0/topstories.json"
const URL_story = "https://hacker-news.firebaseio.com/v0/item/"
const URL_comments = "https://news.ycombinator.com/item?id="
let settings = { method: "Get" };

app.get('/:id?', async function(req, res){
  // Comments
  if(req.params.id != undefined){
    
    fetch(URL_story+req.params.id+".json")
      .then(res => res.json())
      .then((json) => {
        if(json){
          res.redirect(URL_comments + req.params.id)
        } else {
          res.status(404).send("Invalid ID. You can -go home- or -continue anyways-")
        }
      })
  
  } else { 

  // Home
  fetch(URL_top, settings)
    .then(res => res.json())
    .then((json) => {
      let responses = []

      for(let i = 0; i < 10; i++){
        responses.push(
          fetch(URL_story + json[i] + ".json").then(res => res.json())
        )
      }

      Promise.all(responses).then((content) => {
        const now = new Date();
        // Header
        const head = `${BOLD+MAGENTA}HKKR.IN/CURLME${RESET} · ${now.toUTCString()+RESET}\n` 
        
        const linebreak = "\n"

        let out = [head,linebreak]
        
        content.forEach((story, ind) => {
          let t = story.title
          const s = story.score

          // Score color
          let sc = L1
          // Color ranges
          const cols = [20,30,50,100,300,500]
           
          if (s > cols[0] && s < cols[1]) {sc = L2} else
          if (s > cols[1] && s < cols[2]) {sc = L3} else
          if (s > cols[2] && s < cols[3]) {sc = L4} else
          if (s > cols[3] && s < cols[4]) {sc = L5} else
          if (s > cols[4]) {sc = L6}

          if(story.title.length > MAXLEN){
            t = story.title.substring(0, MAXLEN - 3) + "..."
          }
          // Title                          Ternary ♡
          out.push(`${BOLD+(ind+1)}. ${(ind+1 > 9 ? "" : " ") + TITLE+t+RESET}\n`)
          
          // Score & urls
          let domain = ""
          if (story.url != undefined) domain = " (" + new URL(story.url).hostname.replace("www.","") + ")"
          
          out.push(`${BOLD}➥${RESET}    ▴${sc+s+RESET+" ".repeat(4 - s.toString().length)}➤ hkkr.in/${story.id}${RESET+URL_C}${domain+RESET}\n`)

        })
        // Footer
        out.push(`${HIGHLIGHT}`)
        res.send(out.join(""))
      })

    });
  }
});

app.get('/c/:id', async function(req, res){
res.send(req.params.id)

});

app.get('/CURLME', async function(req, res){
  res.send(`
${BOLD}HKKR.IN, the best way to get your daily Hacker News dosage
${RESET}-
hkkr.in can be used in the terminal, using 'curl', which when run with no parameters
  
  ${HIGHLIGHT}curl hkkr.in${RESET}
  
will display the top 10 HN posts

A single entry will look like this:
  
  ${BOLD}4.  PayPal phishing scam uses invoices sent via PayPal
  ${BOLD}➥${RESET}    ▴${L5}144${RESET} ➤ hkkr.in/32511086

You can use the link above, ${BOLD}hkkr.in/32511086${RESET} to view to discussion in the terminal

  ${HIGHLIGHT}curl hkkr.in/32511086${RESET}

You can also view the discussion on Hacker News by opening the same link in a browser



  `)
});

app.listen(process.env.PORT || PORT);
console.log(`${TITLE+BOLD}Listening on ${PORT+RESET}\n---\n`)
