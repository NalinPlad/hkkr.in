const fetch = require('node-fetch-commonjs');

const MAXSTORIES = 100;

const RESET = "\x1b[0m"
const BOLD = "\x1b[1m"

const MAGENTA = "\x1b[38;5;50m"
const URL_C = "\x1b[38;5;103m"
const HKKR_URL = "\x1b[38;5;139m"
const TITLE = "\x1b[38;5;253m"
const TIME = "\x1b[38;5;240m"
const COMMENT = "\x1b[38;5;245m"
const HIGHLIGHT = "\x1b[48;5;220m\x1b[38;5;232m"

// Vote colors
const L1 = "\x1b[38;5;214m"
const L2 = "\x1b[38;5;215m"
const L3 = "\x1b[38;5;108m"
const L4 = "\x1b[38;5;150m"
const L5 = "\x1b[38;5;112m"
const L6 = "\x1b[38;5;40m"

const URL_top = "https://hacker-news.firebaseio.com/v0/topstories.json"
const URL_story = "https://hacker-news.firebaseio.com/v0/item/"
const URL_comments = "https://news.ycombinator.com/item?id="
const settings = { method: "Get" };

module.exports = {
  GeneratePage : function(numStories, all, maxLength, sort){
  return new Promise(resolve => {

    fetch(URL_top, settings)
      .then(res => res.json())
      .then((json) => {
        let responses = []

        const ns = all ? json.length : Math.min(numStories,MAXSTORIES)
        for(let i = 0; i < ns; i++){
          responses.push(
            fetch(URL_story + json[i] + ".json").then(res => res.json())
          )
        }

        Promise.all(responses).then((content) => {
          // Sort (fix later)
          if(sort){
            content.sort((a,b) => {
              console.log(a.score > b.score)
              a.score > b.score ? 1 : -1
            })
          }

          // Header
          const now = new Date();
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

            if(story.title.length > maxLength){
              t = story.title.substring(0, maxLength - 3) + "..."
            }
            // Title                          Ternary ♡
            out.push(`${(ind+1)}. ${(ind+1 > 9 ? "" : " ") +BOLD+TITLE+t+RESET}\n`)
            
            // Score & urls
            let domain = ""
            if (story.url != undefined) domain = " (" + new URL(story.url).hostname.replace("www.","") + ")"
            
            out.push(`${BOLD}➥${RESET}    ▴${sc+s+RESET+" ".repeat(4 - s.toString().length)}➤ ${HKKR_URL}hkkr.in/${story.id}${RESET+URL_C}${domain+RESET}\n`)

          })
        
          // Footer
          out.push(`${BOLD+COMMENT}// Thanks for using hkkr.in${RESET}\n`)
          
         resolve(out.join(""))
        
        })
      })
  })
}
}
