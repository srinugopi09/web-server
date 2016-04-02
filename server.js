var PORT = 9001;
var express = require('express');
var app = express();


var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('Private Route!');
		next();
	},
	logger: function (req, res, next){
		console.log('Request: ' + new Date().toString()  + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
}

app.use(middleware.logger);

app.get('/about', function(req, res) {
res.send('Hello About what!!!');
});



app.use(express.static(__dirname + '/public'));


app.listen(PORT, function (){
	console.log('Express Server Started on port ' + PORT);
});

