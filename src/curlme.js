// Colors

const RESET = "\x1b[0m"
const BOLD = "\x1b[1m"
const L5 = "\x1b[38;5;112m"
const MAGENTA = "\x1b[38;5;50m"
const URL_C = "\x1b[38;5;103m"
const HIGHLIGHT = "\x1b[48;5;220m\x1b[38;5;232m"
const HIGHLIGHT_P = "\x1b[48;5;200m\x1b[38;5;232m"
const BLACK_HIGHLIGHT = "\x1b[48;5;232m"
const HKKR_URL = "\x1b[38;5;139m"
const HYPER = (url, text) => `\x1b]8;;${url}\x1b\\${text}\x1b[0m\x1b]8;;\x1b\\`;

module.exports = {
   response: 
`
${HIGHLIGHT+BOLD}ABOUT${RESET}

${BOLD}HKKR.IN, the best way to get your daily Hacker News dosage
${RESET}read more at https://github.com/NalinPlad/hkkr.in/edit/main/README.md

${HIGHLIGHT_P+BOLD}DONATE${RESET}

If you want to support this project, consider tipping at https://ko-fi.com/nalinplad
1 USD ≈ 62.5 more hours of life for hkkr.in

${HIGHLIGHT+BOLD}USAGE${RESET}

hkkr.in can be used in the terminal, using 'curl', which when run with no parameters
  
  ${HIGHLIGHT}curl hkkr.in${RESET}
  
will display the top 10 HN posts

A single entry will look like this:
  
  ${BLACK_HIGHLIGHT}4.  ${BOLD}PayPal phishing scam uses invoices sent via PayPal${RESET}
  ${BOLD+BLACK_HIGHLIGHT}➥${RESET+BLACK_HIGHLIGHT}    ▴${L5}144${RESET+BLACK_HIGHLIGHT} ➤ ${HKKR_URL}hkkr.in/32511086 ${URL_C}(krebsonsecurity.com)${RESET}

You can open the link above, ${BOLD}hkkr.in/32511086${RESET} to view the page on Hacker News

  ${HIGHLIGHT}tip:${RESET} on some terminal emulators, holding the CMD or CTRL keys will make the link clickable


${HIGHLIGHT+BOLD}OPTIONS${RESET}

You can add parameters to your request to change the behavior or hkkr.in

  n(number) => hkkr.in/n10  => number of stories to display
  m(number) => hkkr.in/m75  => max length of the title before cropping
  f(number) => hkkr.in/f2   => url mode [0: hkkr.in, 1: HN, 2: Article Url]
  a         => hkkr.in/a    => display all top stories(100)
  h         => hkkr.in/h    => show https in story urls
  u         => hkkr.in/u    => ignore user-agent
  l         => hkkr.in/l    => use ${HYPER("https://github.com/NalinPlad/hkkr.in#hyperlinks", "hyperlinks")}(requires modern terminal)
${HIGHLIGHT+BOLD}OPEN SOURCE${RESET}

This project is open source on github @ https://github.com/NalinPlad/hkkr.in
Bugs? Suggestions? Open an issue on the repo, I'll try and make it happen.

If you want to contribute to the project, clone the code and run ${HIGHLIGHT}npm start${RESET} in the root directory.
Make sure to install any dependancies using ${HIGHLIGHT}npm install${RESET}
Then you can run ${HIGHLIGHT}curl localhost:3050${RESET} to test out any changes.

`
}
