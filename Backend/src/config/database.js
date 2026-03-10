const mongoose=require("mongoose")



const ConnectDb=()=>{
   console.log("mongodb+srv://rizwanmnhr_db_user:INViroc6YMavl8PU@cluster0.rdqouab.mongodb.net//24-revision");
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
          console.log("Database is Connected");

    })
    .catch((err)=>{
      console.log(err,"errrrrrrrrrrrrrr");
    })
   }

module.exports  = ConnectDb