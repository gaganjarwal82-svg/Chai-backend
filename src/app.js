import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app  = express()

// app.use is generally use for middlewares  
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true

}))

app.use(express.json({limit: "16kb"})) //data come from form in the json format 
app.use(express.urlencoded({extended:true, limit:"16kb"})) // data coming from the url 
app.use(express.static("public")) // public excess for access image and video 
app.use(cookieParser()) 


//  routes 
import UserRouter from "./routers/user.routes.js"


//  routes declaration 
app.use("/api/v1/users",UserRouter)


export {app}