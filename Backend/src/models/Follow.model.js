const mongoose=require("mongoose")


const FollowSchema=new mongoose.Schema({
     
    Follower:{
        type:String,
    },
     Followee:{
        type:String,
    },
    status:{
        type:String,
        default:"pending",
        enum:{
        values:["accepted","rejected","pending"],
        message:"user is only accepted , rejected or pending "
        }
    }
})


FollowSchema.index({Follower:1,Followee:1},{unique:true})

const Followmodel=mongoose.model("followmode",FollowSchema)
 
module.exports= Followmodel