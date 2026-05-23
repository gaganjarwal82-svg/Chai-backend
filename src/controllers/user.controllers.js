import {asyncHandler} from "../utils/asyncHandler.js"

//  register user
const registerUser = asyncHandler(async(req,res) => {
    res.status(200).json({
        message:"OK"
    })
})

//  export resgister user 
export {registerUser}