import express from "express"
import dotenv from "dotenv";
import dbConnect from "./db/index.js";
import { DB_NAME } from "./constrant.js";
import { app } from "./app.js";
dotenv.config({
    path:'./env'
});
 dbConnect().then(()=>{
app.listen(process.env.PORT||8000,()=>{
            console.log(`app is listening in port${process.env.PORT} and db name is ${DB_NAME}`);
            
        })
 }).catch((err)=>{
    console.log('MONGODB CONNECTION FAILED!!',err)
 })
        
 