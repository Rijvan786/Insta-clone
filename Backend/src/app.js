const express=require("express")
const cookieParser = require("cookie-parser")
const cors=require("cors")
let path=require("path")


const app=express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"https://insta-clone-2wag.onrender.com",
    credentials:true
}))
app.use(express.static("./public"))

/**
 * Required routes
 */

const AuthRouter=require("./routes/Auth.route")
const PostRouter = require("./routes/Post.route")
const FollowRouter = require("./routes/Follow.route")






/**
 * User of Routes
 * 
 */

app.use("/api/Instagram",AuthRouter)
app.use("/api/post",PostRouter)
app.use("/api/user",FollowRouter)
app.use("*name",(req,res)=>{
    res.sendFile(path.join(__dirname,".","../public/index.html"))
})

module.exports=app