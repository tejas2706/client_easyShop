const fs = require('fs')

function appendToFile(fileName, dataToAppend) {
  fs.readFile('./jsonFiles/'+fileName, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      obj = JSON.parse(data);
      obj.data.push(dataToAppend);
      json = JSON.stringify(obj);
      fs.writeFile('./jsonFiles/'+fileName, json);
    }
  });
}


module.exports = appendToFile;