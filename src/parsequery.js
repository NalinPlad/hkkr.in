const utils = require("./utils")


// Example query
// GET hkkr.in/a
// GET hkkr.in/n20
// GET hkkr.in/CURLME
// GET hkkr.in/31244425

module.exports = {
  parse: function(query){
    const routes = [
      "curlme"
    ]

    let options = {
      // number of stories
      "n": 10,
      // send all stories
      "a": false,
      // max length
      "m": 80,
      // id(for stories)
      "id": 0,
      // sort
      "s": false,
      // no color
      "w": false
    }
    if(query == undefined){
      return options
    }

    if(routes.includes(query.toLowerCase())){
      return query.toLowerCase()
    } else if (utils.isInt(query) && query != ""){
      options["id"] = Number(query) 
    }
    const params = query.split("-")
    params.forEach((str) => {
      if(str.charAt(0) in options){
        if(typeof options[str.charAt(0)] == "number"){
          // we have to parse params as number
          const num = Number(str.substring(1))
          options[str.charAt(0)] = isNaN(num) ? 10 : num
        } else {
          options[str.charAt(0)] = true
        }
      }
    })
    return options
  }
} 
