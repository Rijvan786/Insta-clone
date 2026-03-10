const express=require("express")

const AuthRouter=express.Router()

const AuthController=require("../Controller/Auth.Controller")
const Identifire = require("../middlewares/auth.middleware")


/** Register COntroller */
AuthRouter.post("/register",AuthController.RegisterController)


/** Login Controller */
AuthRouter.post("/login",AuthController.LoginController)




/** data get loggedIn user */

AuthRouter.get("/getme",Identifire,AuthController.getme)







module.exports=   AuthRouter