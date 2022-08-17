const express = require('express');
const app = express();
const https = require('https');
const fetch = require('node-fetch-commonjs');

const PORT = 3050

const RESET = "\x1b[0m"
const BOLD = "\x1b[1m"
const UNDERLINE = "\x1b[4m"
const DIM = "\x1b[2m"

const MAGENTA = "\x1b[35m"
const BGTITLE = ""

// Max character length of title before cropping ...
const MAXLEN = 80 

app.get('/', async function(req, res){
  const URL_top = "https://hacker-news.firebaseio.com/v0/topstories.json"
  const URL_story = "https://hacker-news.firebaseio.com/v0/item/"
  let settings = { method: "Get" };
  
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
        const head = `${UNDERLINE+MAGENTA}HKKR.IN/CURLME${RESET} · ${now.toUTCString()+RESET}\n` 
        
        const linebreak = "~~~~~~~~~~~~~~\n"

        let out = [head,linebreak]
        
        content.forEach((story, ind) => {
          let t = story.title
          const s = story.score

          if(story.title.length > MAXLEN){
            t = story.title.substring(0, MAXLEN - 3) + "..."
          }

          out.push(`[${BOLD+ind+RESET}▴${s}]${" ".repeat(4 - s.toString().length)+BOLD+t+RESET}\n         hkkr.in/${story.id}${RESET}\n`)
        })
        // Footer
        out.push()
        res.send(out.join(""))
      })

    });
});

app.listen(PORT);
console.log(`${MAGENTA+BOLD}Listening on ${PORT+RESET}`)

