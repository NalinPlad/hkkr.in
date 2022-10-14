<h2 align=center>⚙️ Hkkr.in 🗞</h2>
<h6 align=center><i>The easiest way to get your <s>daily</s> hourly Hacker News dosage!</i></h6>
<p align=center>
<img alt="Uptime Robot status" src="https://img.shields.io/uptimerobot/status/m792602403-5f4dc058c03d541d373a9fb9">
<img alt="Uptime Robot ratio (7 days)" src="https://img.shields.io/uptimerobot/ratio/7/m792602403-5f4dc058c03d541d373a9fb9">
<img alt="GitHub" src="https://img.shields.io/github/license/NalinPlad/hkkr.in">
<a href="https://github.com/NalinPlad/hkkr.in/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/NalinPlad/hkkr.in"></a>
</br>
<img width="75%" alt="HKKRIN usage gif" src="https://user-images.githubusercontent.com/43052612/188688509-51a47414-0863-4150-b577-5168a12fa19c.gif">

</p>

<p align=center><a href="#usage">Usage</a> • <a href="#contributing">Contributing</a> • <a href="#todo">ToDo</a></p>

---


<a href="https://www.producthunt.com/posts/hkkr-in?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-hkkr&#0045;in" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=359115&theme=light" alt="HKKR&#0046;IN - cURL&#0032;client&#0032;for&#0032;Hacker&#0032;News | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>



Hkkr.in is a [Curl](https://github.com/curl/curl) client for [Hacker News](https://news.ycombinator.com/)</br></br>
I spend a lot of time in the terminal, and also lots of time on HN, so I made hkkr.in to make viewing HN in the terminal simple and accessible from any computer, not just ones that have [HN CLI](https://github.com/search?q=Hacker+News+CLI) programs installed. I was inspired by the [wttr.in](https://github.com/chubin/wttr.in) which does a similar thing for the weather and for moon phases

If you want, you can donate to the project using the Sponsor button(at the top near the star and fork buttons), or by visiting this [link](https://ko-fi.com/nalinplad). Tips will go towards hosting hkkr.in

## Usage 
> Use `curl hkkr.in/curlme` to get similar info in the terminal

To get the top ten posts, run `curl hkkr.in`

A single result might look like this
```
1.  Bitwarden raises $100M
➥    ▴646 ➤ hkkr.in/32735479 (bitwarden.com)
```

It shows the title, votes, link to the discussion, and the domain of the url. Use the link on the bottom ([hkkr.in/32735479](https://hkkr.in/32735479)) to visit that articles page on HN

You can pass some parameters to your request to alter the output(some parameter accept numbers as options, like `curl hkkr.in/n10`)

| Parameter     | Function                   |
| ------------- | -------------              |
| n(number)     | Number of results to show(max 100) |
| m(number)     | Max width of titles        |
| f(number)     | Url mode [0: hkkr.in, 1: HN, 2: Article Url]|
| a             | Show all stories(max 100)  |
| h             | Show https:// in story urls|
| u             | Ignore user-agent          |
## Contributing
Want to help out? If you have any ideas, bugs, or suggestions, please open an issue [here](https://github.com/NalinPlad/hkkr.in/issues/new)

If you want to help develop the project, feel free to open a pull request. When you run `npm start` the program will listen on port 3050, which you can change with the `PORT` variable in `app.js`

I wrote most of the code here quickly and its not the greatest. I may come in and refactor some of it in the future.

## ToDo
Some planned features

- [ ] Check user agent to serve an html version in the browser
- [ ] Option to disable ANSI escapes incase a terminal emulator doesent support them
- [ ] Show date on posts(EG: 4 days ago)
- [ ] Option to sort by date
- [x] Option to make hkkr.in/{ID} links go directly to url not discussion

###### // Thanks for using hkkr.in
