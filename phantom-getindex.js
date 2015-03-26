//phantomjs

console.log('Loading a web page');
var page = require('webpage').create();
var url = 'http://localhost/basekit2/dist/';
page.open(url, function (status) {
  console.log("Status: " + status);
  if(status === "success") {
    page.render('index.png');
  }
  phantom.exit();
});