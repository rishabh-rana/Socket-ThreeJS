var express = require('express');
var app = express();


app.get('/', (req,res) => {
  res.sendFile(__dirname+'/app.html');
})
app.get('/beta', (req,res) => {
  res.sendFile(__dirname+'/appp.html');
})


app.listen(process.env.PORT || 3000, process.env.IP);
