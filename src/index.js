//require('dotenv').config({path:'./env'})  
import dotenv from "dotenv"

//import mongoose from "mongoose";  //not in use
//import {DB_NAME} from "./constant"  //not in use
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})



connectDB() //import and execute



/*import express from "express"
const app = express()

(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERRR:",error);
            throw error
        })


        app.listen(process.env.PORT,()=>{
            console.log(`app is listening on port ${process.env.PORT}`);
        })
        
    } catch (error) {
        console.error("ERROR:",error)
        throw error
        
    }
})() */