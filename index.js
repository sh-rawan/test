import express from "express";
import dotenv from "dotenv";

const app = express()
dotenv.config()

app.get("/", (req,res)=>{res.send(process.env.MESSAGE)})


app.listen(process.env.PORT, console.log("Listning on port " + process.env.PORT + "!"))
