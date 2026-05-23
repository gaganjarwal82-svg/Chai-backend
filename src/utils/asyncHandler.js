
// Summary simple hai:
//asyncHandler website ko crash hone se bachata hai aur errors ko properly handle karta hai.
// Jab koi user website visit karta hai aur backend me database/API ka kaam fail ho jaye, tab ye automatically error pakad leta hai.



// const asyncHandler = (requestHandler) => {
//    return (req,res,next) => {
//         Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
//     }
// }

const asyncHandler = (fn) => async (req,res,next) => {
    try{
        await fn(req,res,next)
    }catch(error){
        res.status(error.code || 500).json({
            success: false,
            message: error.message
        })
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