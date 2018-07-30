var express = require('express');
var app = express();


app.get('/', (req,res) => {
  res.sendFile(__dirname+'/three.html');
})
app.get('/ar', (req,res) => {
  res.sendFile(__dirname+'/ar.html');
})

app.listen(process.env.PORT || 3000, process.env.IP);
