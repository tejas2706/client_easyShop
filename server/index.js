const express = require("express");
const app = express();
const fileOperations = require("./fileOperations");
const bodyParser = require("body-parser")

app.use(bodyParser());

app.get('/health',(req,res)=>{
    res.status(200).send("Working")
})

app.post('/writeFile', (req,res)=>{
    console.log("req.body", req.body)
    let {fileName,data} = req.body;
    if(fileName && data){
        fileOperations.appendToFile(fileName,data,()=>{
            console.log("DONE")
        })
    }
})

app.get('/readFile',(req,res)=>{
    let filename = req.query.filename;
    console.log(filename);
    fileOperations.readFile(filename,(err,data)=>{
    console.log("data", data)
        return res.status(200).send(data);
    })
})

app.post('/addProduct',(req,res)=>{
    let data = req.body.editedProd;
    fileOperations.readFile("products.json",(err,data)=>{
        data.data.filter
    })
})

app.listen(4000,()=>{
    console.log("Server listening on 4000")
})