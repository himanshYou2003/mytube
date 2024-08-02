// require('dotenv').config({Path : './env'})

import dotenv from "dotenv"
import connectDB from "./db/DB.js";
import { app } from "./app.js";

dotenv.config({
    path: "./env"
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 3000,()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);
    })

})
.catch((err)=>{
    console.log("MONGODB CONNECTION Error  !!! ", err);
})






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