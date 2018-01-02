var express = require('express');
var request = require('request');


var APPS = [
    {
        path: "/api/",
        base: "http://localhost:5000",
    },
    {
        path: "/web/",
        base: "http://localhost:8000",
    },
];


var app = express();
APPS.forEach(function(a) {
    app.use(a.path, function(req, res) {
      var url = a.base + req.url;
      req.pipe(request(url)).pipe(res);
    });
});


app.listen(process.env.PORT || 3000);
