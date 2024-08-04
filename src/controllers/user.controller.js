import {asynsHandler} from "../utils/asynsHandler.js"


const registerUser = asynsHandler( async (req,res)=>{
    res.status(200).json(
        {
            message: "Done"
        }
    )
})

export { registerUser }