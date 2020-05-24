// import RNFS from 'react-native-fs';
// const RNFS = require("react-native-fs");
import FileSystem from 'react-native-filesystem';


module.exports = async (fileName, dataToAppend) => {
  let data = await FileSystem.readFile('./jsonFiles/'+fileName);
  console.log("data", data)






  // FileSystem.readFile('./jsonFiles/'+fileName, 'utf8', (err, data) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     obj = JSON.parse(data);
  //     obj.data.push(dataToAppend);
  //     json = JSON.stringify(obj);
  //     console.log("json", json)
  //     FileSystem.writeToFile('./jsonFiles/'+fileName, json);
  //   }
  // });
}


// module.exports = appendToFile;