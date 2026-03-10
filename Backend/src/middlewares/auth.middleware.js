
const jwt=require("jsonwebtoken")



const Identifire=async (req,res,next)=>{
 
    const token=req.cookies.token

    if(!token){
        return res.status(404).json({
            message:"NOt providee token"
        })
    }
    let incrypted =null
    try{
         incrypted=await jwt.verify(token,process.env.JWT_SECRETS)
    }
    catch(err){
        return res.status(401).json({
            message:"User is not Authorized"
        })
    }
    req.user=incrypted
    next()
}


module.exports=   Identifire