const fs = require('fs');
const dataJSON = require('./1-json.json');

dataJSON.age = '42';
dataJSON.name = 'Vale';

const newDataJSON = JSON.stringify(dataJSON);
fs.writeFileSync('1-json.json',newDataJSON);