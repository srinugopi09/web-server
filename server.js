var PORT = process.env.PORT || 9001;
var express = require('express');
var middleware = require('./middleware.js');
var app = express();




app.use(middleware.logger);

app.get('/about', function(req, res) {
res.send('Hello About what!!!!');
});



app.use(express.static(__dirname + '/public'));


app.listen(PORT, function (){
	console.log('Express Server Started on port ' + PORT);
});

