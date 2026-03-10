const express=require("express")

const PostRouter=express.Router()

const PostController=require("../Controller/Post.Controller")
const multer=require("multer")
const Identifire = require("../middlewares/auth.middleware")
const upload=multer({storage:multer.memoryStorage()})
 
/**
 * CreatepostController
 * /api/post/
 */

PostRouter.post("/",upload.single("image"),Identifire,PostController.CreatPostController)

/**
 * GetALL Post Controller 
 * /api/post/
 */
PostRouter.get("/",Identifire,PostController.getPostController)


/**
 * getPostDetails
 * /api/post/details/:postID
 */

PostRouter.get("/details/:postID",Identifire,PostController.getPostDetailController)

/** any post 
 * /api/post/:postID
*/
PostRouter.get("/anypost/:postID",PostController.getpostanycontroller)

/** Like a post 
 * /api/post/like/:postID
*/

/**
 * getalluserregister
 */
PostRouter.get("/alluser",PostController.getmealluser)

PostRouter.post("/like/:postID",Identifire,PostController.likePostController)

/**
 * unLike a Post
 * /api/post/unlike/:postID
 */
PostRouter.post("/unlike/:postID",Identifire,PostController.unlikePostController)


/**
 * getFeed controller 
 * 
 * /api/post/getfeed
 */

PostRouter.get("/getfeed",Identifire,PostController.getFeedController)

module.exports=PostRouter