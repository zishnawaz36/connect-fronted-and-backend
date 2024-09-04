import cors from 'cors';
import {configDotenv } from 'dotenv';
import express from 'express';
const app=express();
app.use(cors());
configDotenv();
const port=process.env.PORT;
app.get("/api/jokes",function(req,res){
    const jokes = [
        { id: 1, title: "joke1", content: "hritik" },
        { id: 2, title: "joke2", content: "zeeshan" },
        { id: 3, title: "joke3", content: "hritika" },
        { id: 4, title: "joke4", content: "virat the foolest crickter" },
        { id: 5, title: "round", content: "this is not a joke" },
      ];
      res.send(jokes)
});
app.listen(port,()=>{
    console.log("everything is fine and port is running on");
})

