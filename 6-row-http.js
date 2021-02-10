//const request = require("request");
const { error } = require('console');
const http = require('http');


const latitude=45;
const longitude=-75;
const units='m';
//const url='http://api.weatherstack.com/current?access_key=64da51f1546599415f1b3879ced5ab41&query='+ latitude +',' + longitude + '&units='+ units;
const url='http://api.weatherstack.com/current?access_key=64da51f1546599415f1b3879ced5ab41&query=40,-75&units=m';

const request = http.request(url,(response)=>{

    let data = '';

    response.on('data',(chunk)=>{
        data = data + chunk.toString();        
    })

    response.on('end',()=>{
        const body = JSON.parse(data);
        console.log(body);
    })
})

request.on('error',(error)=>{
    console.log('An error ocured', error);
});

request.end();