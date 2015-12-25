var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
var insta = require('instagram-node').instagram();

var app = express();
insta.use({
  client_id: '293f7be23755487c8a2e782a3184d0c1',
  client_secret: 'a02b864cb0f64949b9d0df1e7d013a17'
});

app.set('port', process.env.PORT || 9000);
// app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
//to load the index.html
app.use('/', express.static(path.join(__dirname, 'app')));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}
app.get('/api/projects', function(req, res) {
  fs.readFile('projects.json', function(err, data) {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});
app.get('/api/tutorials', function(req, res) {
  fs.readFile('tutorials.json', function(err, data) {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});
app.get('/api/instagram', function(req, res) {
   var objtmp = {};
  insta.user_media_recent('1394457325', {count : 20}, function(err, medias, pagination, remaining, limit) {
	console.log('err Insta : ');
	console.log(err);
	var objInsta = [];
	for(var i = 0 ; i < medias.length ; i++){
		objtmp.images = medias[i].images;
		objtmp.link = medias[i].link;
		objtmp.likes = medias[i].likes.count;
		objInsta.push(objtmp);
		objtmp = {};
	}
	return res.json(objInsta);
	});
});



app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
