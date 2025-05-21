import mongoose from "mongoose";
import express from "express"
import { DB_NAME } from "../constrant.js";
import dotenv from "dotenv";
const app=express()
dotenv.config();


const dbConnect=async ()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDb connected !! DB HOST :${connectionInstance.connection.host}`)
        app.on("error",()=>{
            console.log("ERROR",error);
        })
    } catch (error) {
        console.log("ERROR",error);
        throw error;
    }
}
export default dbConnect;