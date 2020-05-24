const fs = require("fs");

function appendToFile (fileName, dataToAppend, callback) {
  
  readFile(fileName, (err, data) => {
  console.log("data", data)
    if (err) {
      console.log(err);
    } else {
      obj = JSON.parse(data);
      console.log("obj", obj)
      obj.data.push(dataToAppend);
      json = JSON.stringify(obj);
      console.log("json", json)
      fs.writeFile('./jsonFiles/'+fileName, json, callback);
    }
  });
}


function readFile(filename, callback){
  return fs.readFile('./jsonFiles/'+filename, 'utf8',callback)
}



module.exports = {
  appendToFile,
  readFile
}