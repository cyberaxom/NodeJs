var express = require('express');

var app = express();

//set up handlebars view engine
var handlebars = require('express3-handlebars')
    .create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req,res){
    res.render('home');
});

app.get('/about', function(req,res){
    res.render('about');
});

//custom 404 page
app.use(function(req,res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Page Not Found');
});

//custom 500 page
app.use(function(req,res){
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});



app.listen(app.get('port'), function(){
    console.log('Open your Browser');
})