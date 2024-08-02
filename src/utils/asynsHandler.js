const asynsHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=> next(err))
    }
}

export { asynsHandler }
// const asynsHandler =(fn)=async(req,res,next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(err.code).json(
//             {
//                 success: false,
//                 message: err.message
//             }
//         )
//     }
// }