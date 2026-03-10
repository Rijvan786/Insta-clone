const AuthModel = require("../models/Auth.model")

const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const RegisterController=async(req,res)=>{

const {username,email,password,bio,profileImg}=req.body   
       const AllreadyRegistered=await AuthModel.findOne({
        $or:[{username},
             {email}
        ]
       }).select("+password")
       if(AllreadyRegistered){
        return  res.status(409).json({
            message:"User"+(AllreadyRegistered.email==email?"email allready Registered":"is already Register")
        })


       }     
          let user=await AuthModel.create({
            username,
            email,
            password:await bcrypt.hash(password,10),
            bio,
            profileImg
 })

 const token=jwt.sign({
    id:user._id,
    username:user.username
 },
process.env.JWT_SECRETS,{expiresIn:"1d"}
)
 res.cookie("token",token)
       res.status(200).json({
        message:"User is registered successfully",
    
        username:user.username,
        email:user.email,
        password:user.password,
        bio:user.bio,
        profileImg:user.profileImg
       
       })
}

const LoginController=async(req,res)=>{
    let  {username,email,password,bio,profileImg}=req.body   
       const user=await AuthModel.findOne({
        $or:[{username},
             {email}
        ]
       }).select("+password")
       if(!user){
       return  res.status(404).json({
            message:"User is not found"
        })
       }
     profileImg=null
       const validuser=await bcrypt.compare(password,user.password)

       if(!validuser){
        return res.status(401).json({
            message:"User is enter invalid password"
        })
       }

       const token=jwt.sign({
        id:user._id,
        username:user.username
       },
    
    process.env.JWT_SECRETS,{expiresIn:"1d"}
    )
       res.cookie("token",token)
   res.status(200).json({
    message:"User is logged in successfully",
    username:user.username,
    email:user.email,
    bio:user.bio,
    profileImg:user.profileImg
   })

}
const getme= async(req,res)=>{
     let userid=req.user.id
     const alluser=await AuthModel.find()
     let Userdata=await AuthModel.findById(userid)

     res.status(200).json({
        message:"get data successfully",
        Userdata,
        alluser
     })

}
module.exports={RegisterController,LoginController,getme}