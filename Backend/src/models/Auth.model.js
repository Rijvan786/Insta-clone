const mongoose=require("mongoose")



const AuthSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"It is already registered user"],
        required:[true,"It is required for registered this webside"]
    },
    email:{
        type:String,
        unique:[true,"It is already registered email"],
        required:[true,"It is required for registered this webside"]
    },
    password:{
        type:String,
        required:[true,"It is required for registered this webside"],
        select:false
    },
    bio:String,
    profileImg:{
        type:String,
         default:"https://ik.imagekit.io/Rizwan786/default-png-0q6opbat0cr7deg8.png?updatedAt=1772950502601"
    }

})


const AuthModel=new mongoose.model("user",AuthSchema)
    

 module.exports =AuthModel