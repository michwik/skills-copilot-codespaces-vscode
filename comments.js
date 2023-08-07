// Create web server
// Run: node comments.js
// Open browser: http://localhost:3000/ (or another port)
// Open browser: http://localhost:3000/api/comments
// Open browser: http://localhost:3000/api/comments/1

var http = require("http");
var url = require("url");
var comments = [
    { id: 1, author: "Pete Hunt", text: "This is one comment" },
    { id: 2, author: "Jordan Walke", text: "This is *another* comment" }
];

var server = http.createServer(function (request, response) {
    var url_parts = url.parse(request.url);
    console.log("url_parts = " + url_parts);
    console.log("url_parts.pathname = " + url_parts.pathname);
    console.log("url_parts.path = " + url_parts.path);
    console.log("url_parts.query = " + url_parts.query);
    console.log("url_parts.hash = " + url_parts.hash);
    console.log("url_parts.href = " + url_parts.href);

    if (url_parts.pathname == "/") {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write("<html><body><h1>Hello World</h1></body></html>");
        response.end();
    } else if (url_parts.pathname == "/api/comments") {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(JSON.stringify(comments));
        response.end();
    } else if (url_parts.pathname == "/api/comments/1") {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(JSON.stringify(comments[0]));
        response.end();
    } else {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.write("Page not found");
        response.end();
    }
});

server.listen(3000);
console.log("Server is listening"); 
