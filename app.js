'use strict'

const express = require('express');                     //Hämtar Express, som ett server som skyddar sin data. 
const router = require('./routes/IndexRouter.js');      //lägger in pathen till router till variabeln router
const fetcher = require('./public/NumFetcher.js');
const app = express();                                  //kör express modulen med när app används. 
const port = 8080;                                      //säger vilket port man ska använda sig av. 

app.use(express.static('public'));                      //säger att om den kan inte hitta någon fil så ska den leta i public. 

app.use('/', router);                                   //säger att appen ska använda sig av router när den är på / sidan

 const RandNum = fetcher;

console.log(RandNum);

module.exports =  {RandNum};
app.listen(port)                                        //säger till appen att den ska köra nu programen på port
console.log('its alive on: http://localhost:' + port)                                //berättar till användaren via consolen att appen går på full varv. 
