var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());


app.get('/', function(req, res){
	
	var buf = new Buffer(fs.readFileSync("index.html", "utf-8"));
	res.send(buf.toString());

});


var port = process.env.PORT || 8080
app.listen(port, function(){

	console.log("Running on:" + port);
});
