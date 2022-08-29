// Colors

const RESET = "\x1b[0m"
const BOLD = "\x1b[1m"
const L5 = "\x1b[38;5;112m"
const MAGENTA = "\x1b[38;5;50m"
const URL_C = "\x1b[38;5;103m"
const HIGHLIGHT = "\x1b[48;5;220m\x1b[38;5;232m"
const BLACK_HIGHLIGHT = "\x1b[48;5;232m"

module.exports = {
   response: 
`
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
`
}
