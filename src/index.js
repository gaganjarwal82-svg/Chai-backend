
import connectDb from "./db/index.js"
import dotenv from "dotenv"


dotenv.config({
    path:'./env '
})




connectDb()















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