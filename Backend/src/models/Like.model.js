const mongoose=require("mongoose")

const LikeScheama=new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"PostModel"
    },
    user:{
       type:String,
       required:[true,"Username is required for cretating post"]
    }
},
{
    timestamps:true
})

LikeScheama.index({post:1,user:1},{unique:true})


const Likemodel=mongoose.model("Likemodel",LikeScheama)

module.exports = Likemodel