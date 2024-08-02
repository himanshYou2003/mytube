// require('dotenv').config({Path : './env'})

import dotenv from "dotenv"
import connectDB from "./db/DB.js";

dotenv.config({
    path: "./env"
})

connectDB();





/*
import express from "express";
const app = express();

(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)  
        app.on('error',(error)=>{
            console.log("Error: ",error);
            throw error;
        })
        app.listen(process.env.PORT,(err)=>{
            console.log(`App is listning on ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error: ", error);
        throw error;
    }
})()
    */