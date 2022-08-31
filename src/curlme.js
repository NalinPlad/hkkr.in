// Colors

const RESET = "\x1b[0m"
const BOLD = "\x1b[1m"
const L5 = "\x1b[38;5;112m"
const MAGENTA = "\x1b[38;5;50m"
const URL_C = "\x1b[38;5;103m"
const HIGHLIGHT = "\x1b[48;5;220m\x1b[38;5;232m"
const BLACK_HIGHLIGHT = "\x1b[48;5;232m"
const HKKR_URL = "\x1b[38;5;139m"

module.exports = {
   response: 
`
${HIGHLIGHT+BOLD}ABOUT${RESET}

${BOLD}HKKR.IN, the best way to get your daily Hacker News dosage
${RESET}-
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
  a         => hkkr.in/a    => display all top stories(100)
  m(number) => hkkr.in/m75  => max length of the title before cropping

${HIGHLIGHT+BOLD}OPEN SOURCE${RESET}

This project is open source on github @ https://github.com/NalinPlad/hkkr.in
Bugs? Suggestions? Open an issue on my terrible code, I'll try and make it happen.

If you want to contribute to the project, clone the code and run ${HIGHLIGHT}npm start${RESET} in the root directory.
Then you can run ${HIGHLIGHT}curl localhost:3050${RESET} to test out any changes.

`
}
