const mongoose=require("mongoose")


const Postschema=new mongoose.Schema({
    caption:{
        type:String,
        required:[true,"required for creating a post"]
    },
        imgurl:{
            type:String,
            required:[true,"required for creating post"]
        },
   user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
    required:[true,"required for store data"]
   }
})

const PostModel=new mongoose.model("PostModel",Postschema)


module.exports= PostModel