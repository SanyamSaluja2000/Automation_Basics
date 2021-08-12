let pup = require("puppeteer");

let gpage;
pup.launch({headless: false,
  defaultViewport: null, // default aur args full screen ke liye
args:["--start-maximized"]
 })
 .then(function(browser){
return browser.newPage();
 })
.then(function(page){
  gpage = page ;
  return page.goto("https://www.google.co.in/");
})
.then(function(page){
   return gpage.type("input.gLFyf.gsfi","iron man");
})
.then(function(){
    return Promise.all([ gpage.waitForNavigation(),gpage.click(".FPdoLc.lJ9FBc .gNO89b")])
   
})
//promise.all array meh argument leta h iska basic matlab yeh hua ki jitne bhi promises h un sbka ek promise krdia matlb alg alg ki jagah 
// sare ek saath promise crate krdiye
.then(function(){
    return Promise.all([gpage.waitForNavigation(),gpage.click("[data-hveid = 'CAEQAw']")])
})
.then(function(){


    return gpage.screenshot({path:"ss.png"});
})

.catch(function(err){
    console.log(err);
})