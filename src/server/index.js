const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/../game'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/../game/index.html');
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/error_pages/404.html');
});

app.listen(PORT, () => {
  console.log()
  console.log()
  console.log( '\x1b[33m%s\x1b[0m', `   Using environment port - ${PORT}` );
  console.log( '\x1b[33m%s\x1b[0m', '   TECHNICAL TEST GAME FOR' );
  console.log( '\x1b[32m%s\x1b[0m' ,`
             .*/((/,                                                                                
       .(,      ,(,     //          .(((((((((,                                                     
    .((        ,((/(((*   /(/       .(((.      *(((   ,((/  *((((,  ,(((*( /(((   *((/              
   ((((    *(((/          /(((/     .(((((((((  *(((  ((/ /((/  /((.,(((/*/ /((/ .((/               
 ,(((((((,     ,,      ./(((((((    .(((.        /((/(((  (((//////,,(((     /((/((/                
 (*   *(((((((((((((((((((((((((/   .(((((((((,   /((((   .(((((((/ ,(((      (((((                 
/        ,((((((((((((/.       *(                             ...             .(((                  
/          *((((((((,           (                                            .(((                   
 *          ,(((((/             /   .((((,    /((((            .(((.                                
 *,          *(((/             /    .(((((( ,((((((  ((((((/. (((((((./(((((( (((/ *(((  /((*       
   /         ,(((.            /     .(((./((((,/(((  .   .(((. .(((.  /(((, . (((/   (((((/         
    ./       *(((*         ./       .(((.  (/  /((( ((((*/(((, .(((.  /(((    (((/   *((((*         
       ,(/*/(((((((*   .//          .(((.      /((( /((((((((, .(((.  /(((    (((/ .(((.,(((.       
             ,*/((/*.                                                                              
  ` )
  console.log()
  console.log(' \x1b[36m%s\x1b[0m', '                    Created by Lucas C / llucbrell' )
  console.log()
  console.log()
});
