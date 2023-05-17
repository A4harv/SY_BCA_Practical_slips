Q1.a Create a Node.js file that will convert the output "Hello World!" into upper-case letters.

 

var http = require('http');

var uc = require('upper-case');

http.createServer(function (req, res) {

  res.writeHead(200, {'Content-Type': 'text/html'});

  res.write(uc.upperCase("Hello World!"));

  res.end();

}).listen(8080);

 

Save the code above in a file called "d_uppercase.js", and initiate the file:

First install upper-case module

 

C:\Users\Your Name>npm upper-case

 

Initiate d_uppercase:

 

C:\Users\Your Name>node d_uppercase.js

 

If you have followed the same steps on your computer, you will see the the same result as the example: 

 http://localhost:8080