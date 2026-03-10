/**Server run karne ke liye  & Database connect karne ke liye */
require("dotenv").config()
const app=require("./src/app")
const ConnectDb=require("./src/config/database")


app.listen(3000,()=>{
    console.log("Server is running on 3000 port");
})

ConnectDb()