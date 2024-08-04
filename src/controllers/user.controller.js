import {asynsHandler} from "../utils/asynsHandler.js"
import {ApiError } from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponce } from "../utils/ApiResponce.js"


const registerUser = asynsHandler( async (req,res)=>{
    // res.status(200).json(
    //     {
    //         message: "Done"
    //     }
    // )

    //get user detailed from frontend
    //validation  ---not empty
    //check if user already exist ;   username , email
    //check for images  also avtar
    //upload them to cloudinary
    //create user object  - create entry in DB 
    //remove password and refresh token filed from response
    //check for user creation
    //return res 


    //get user detailed from frontend
    const {fullName, email,username,password} = req.body
    // console.log("email: " , email);

    //validation  ---not empty
    if(
        [fullName, email, username, password].some((field)=>field?.trim()==="")
    ){
        throw new ApiError(400,"All fileds are required")
    }

    //check if user already exist ;   username , email
    const existextedUser = User.findOne({
        $or:[{ username } , { email }]
    })
    if(existextedUser){
        throw new ApiError(409,"user with email or username already exists")
    }

    const avatarLocalpath = req.files?.avatar[0]?.path
    const coverimageLocalpath = req.files?.coverImage[0]?.path

    if(!avatarLocalpath){
        throw new ApiError(400,"Avtar is important")
    }

    const avtar = await uploadOnCloudinary(avatarLocalpath)
    const coverImage = await uploadOnCloudinary(coverimageLocalpath)

    if(!avatar){
        throw new ApiError(400,"Avtar is important")
    }

    const user = await User.create({
        fullName,
        avatar:avatar.url,
        coverImage:coverImage?.url  || "",
        email,
        password,
        username:username.toLowerCase(),
    })

    const  createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )
    if(!createdUser){
        throw new ApiError(500,"somethimg went wrong while registering the user")
    }

    return res.status(201).json(
        new ApiResponce(200,createdUser,"user registered successfully")
    )

})

export { registerUser }