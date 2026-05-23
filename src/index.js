
import connectDb from "./db/index.js"
import {app} from "./app.js"
import dotenv from "dotenv"


dotenv.config({
    path:'./env'
})


connectDb()

//  below code is concept of promise its is similar to if else  
.then(()=> {
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Server is running at port: ${process.env.PORT}`); 
    })
})
.catch((err) => {
    console.log("Mongo Db connection failed !!!",err);
})






























//  ==================================app.listen()==================================

// When you use frameworks like Express.js:

// app.listen(3000)

// it means:
// “Start the server and keep listening for incoming requests on port 3000.”


//  =================================app.on()=============================================
// When someone calls me → ring
// When battery low → show warning
// When message arrives → notify

// Those are events.

// JavaScript also works similarly.

// Example
// app.on("error", () => {
//     console.log("Something went wrong")
// })

// Meaning:

// “If an error event happens, run this function.”
















// =================================== METHOD-1 TO CREATE DATABASE CONNECTION===========================================
// import express from "express"
// const app = express()
// //  connection the database 
// ( async ()=>{
//     try{
//       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//       app.on("error",() =>{
//         console.log("ERROr",error);
//         throw error
//       })

//       app.listen(process.env.PORT, ()=>{
//         console.log(`App is listening on port ${process.env.PORT}`);
//       })

//     }catch(error){
//         console.error("ERROR: ",error)
//         throw err
//     }
// })()