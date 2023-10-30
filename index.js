const express = require('express')
require("dotenv").config()
const {connection}=require("./config/db")
const {BookRoute}=require("./routes/BookRoute")
const app=express()
app.use(express.json())

app.use('/',BookRoute)






app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connected to mongoose")
    }catch(err){
console.log(err)
    }
    console.log(`server running to ${process.env.port}`)
})