
// Summary simple hai:
//asyncHandler website ko crash hone se bachata hai aur errors ko properly handle karta hai.
// Jab koi user website visit karta hai aur backend me database/API ka kaam fail ho jaye, tab ye automatically error pakad leta hai.



// same process using promise 
const asyncHandler = (requestHandler) => {

    (req,res,next) => {
        Promise.resolve(req, res, next).catch((err) => next(err))
    }
}
 export {asyncHandler}










// const asyncHandler = (fn) => async (req,res,next) => {
//     try{
//         await fn (req,res,next)
//     }catch(error){
//         res.status(error.code || 5000).json({
//             success:false,
//             message:error.message
//         })
//     }
// }
// // (fn) => async () => {} ekk function liya or usko further dusre functino mai pass krdiya 