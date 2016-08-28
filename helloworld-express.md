Simple hello world beginer tutorial with Node.js and Express

What is Node.js?
- Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. 

Download here:
- https://nodejs.org/en/

Next let's create a directory for our app
- mkdir njshello
- cd njshello

Now let's initialize our application to create a package.json file for your application which will describe all of your dependencies
- npm init
- accept all defaults (select <Enter> for all)

Next we need to install Express which is a web framework for Node.js in the myapp directory and save it in the dependencies list.
- npm install express --save

At this point we have all dependencies install now let's create our application

Create a file named
- app.js

Add to app.js the following:
~~~~
 //declaring our dependency is express framework
 var express = require('express');
 var app = express();

 //respond with “Hello World!” for requests to the root URL (/)
 app.get('/', function (req, res) {
  res.send('Hello World!');
 });

 //start a server and listens on port 8080 for connections and write to the console basic info
 app.listen(8080, function () {
 console.log('Hello world app listening on port 8080!');
 });
~~~~








