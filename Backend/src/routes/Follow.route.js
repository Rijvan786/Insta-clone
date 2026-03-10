const express=require("express")
const Identifire = require("../middlewares/auth.middleware")


const FollowRouter=express.Router()
const FollowController=require("../Controller/Follow.conroller")

/**
 * Follow the user successfully
 * api/user/follow/:name
 */
FollowRouter.post("/Follow/:name",Identifire,FollowController.FollowController)



/**
 * unFollow the user successfully
 * api/user/unfollow/:name
 */
FollowRouter.post("/unFollow/:name",Identifire,FollowController.unFollowController)



/**
 * send Follow request the user successfully
 * api/user/follow_request/:name
 */
FollowRouter.post("/follow_request/:name",Identifire,FollowController.Follow_request)


/**
 * user request accepted successfully
 * api/user/request_accepted/:name
 */
FollowRouter.put("/request_accepted/:name",Identifire,FollowController.request_accepted)
/**
 * Follow request accepted
 * api/user/request_rejected/:name
 */
FollowRouter.put("/request_rejected/:name",Identifire,FollowController.request_rejected)










module.exports= FollowRouter