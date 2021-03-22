var express = require('express')
var app = express()
var http = require('http')

app.set('views',(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static('./public'));
 
app.get('/', function (req, res) {
    res.render('index')
})

var server = app.listen(8000, function(){
    console.log('Listen on port 8000')
})