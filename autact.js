let pup = require("puppeteer");

let gpage;
pup.launch({headless: false})
 .then(function(browser){
return browser.newPage();
 })
.then(function(page){
  gpage = page ;
  return page.goto("https://www.google.co.in/");
})
.then(function(){


    return gpage.screenshot({path:"ss.png"});
})
.catch(function(err){
    console.log(err);
})