//  const express= require('express')
import express from 'express';
import 'dotenv/config'
 const app = express();
//  require('dotenv').config()


const port= 8000;

app.get('/', (req, res)=>{
    res.send("welcome");
})


app.listen(process.env.PORT, ()=>{
    console.log(`listening on ${port}`);
    
});