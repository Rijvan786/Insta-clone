const AuthModel = require("../models/Auth.model")
const Followmodel = require("../models/Follow.model")


const FollowController=async(req,res)=>{
    FolloweeUsername=req.params.name
    FollowerUsername=req.user.username

  const isexistUser=await AuthModel.findOne({
    username:FolloweeUsername
  })

  if(!isexistUser){
    return res.status(404).json({
        message:"user is not exists"
    })
  }

  if(FollowerUsername==FolloweeUsername){
    return res.status(409).json({
        message:"User is not follow yourself"
    })
  }
  

//     const allreadyfollow=await Followmodel.findOne({
//         Followee:FolloweeUsername,
//         Follower:FollowerUsername
// })

//  if(allreadyfollow){
//     return res.status(409).json({
//         messaege:`User is allready follow ${FolloweeUsername}`,
//         allreadyfollow
//     })
//  } 
  const Followed=await Followmodel.create({
        Follower:FollowerUsername,
        Followee:FolloweeUsername
    })

    res.status(200).json({
        message:`User is successfully follow ${FolloweeUsername}`,
        Followed
    })


    
}


const unFollowController=async(req,res)=>{
      FolloweeUsername=req.params.name
      FollowerUsername=req.user.username


      const unfollowed=await Followmodel.findOne({
          
            Followee:FolloweeUsername
      })
      if(!unfollowed){
        return res.status(404).json({
            message: ` your  are not follow ${FolloweeUsername}`
        })
      }

      await Followmodel.findOneAndDelete({
        Followee:FolloweeUsername
      })

    res.status(200).json({
        message:`your are successfully unfollow ${FolloweeUsername}`,
        

    })
}
const Follow_request=async(req,res)=>{
    FolloweeUsername=req.params.name
    FollowerUsername=req.user.username

  const isexistUser=await AuthModel.findOne({
    username:FolloweeUsername
  })

  if(!isexistUser){
    return res.status(404).json({
        message:"user is not exists"
    })
  }

  if(FollowerUsername==FolloweeUsername){
    return res.status(409).json({
        message:"User is not send follow  request yourself"
    })
  }
  

    const allreadyfollow=await Followmodel.findOne({
        Followee:FolloweeUsername,
})

 if(allreadyfollow){
    return res.status(409).json({
        messaege:`User is allready send follow  request ${FolloweeUsername}`,
        allreadyfollow
    })
 }  const Followed=await Followmodel.create({
        Follower:FollowerUsername,
        Followee:FolloweeUsername
    })

    res.status(200).json({
        message:`User is successfully send  follow request ${FolloweeUsername}`,
        Followed
    })


    
}
const request_accepted=async(req,res)=>{
    FolloweeUsername=req.user.username
    FollowerUsername=req.params.name

    const accepted =await Followmodel.findOneAndUpdate({
        Follower:FollowerUsername,
        Followee:FolloweeUsername
    },{status:"accepted"}
)

res.status(200).json({
    message:`request accepted ${FollowerUsername}`,
    accepted
})
}
const request_rejected=async(req,res)=>{
    FolloweeUsername=req.user.username
    FollowerUsername=req.params.name

    const rejected =await Followmodel.findOneAndUpdate({
        Follower:FollowerUsername,
        Followee:FolloweeUsername
    },{status:"rejected"}
)

res.status(200).json({
    message:`request rejected ${FollowerUsername}`,
    rejected
})
}

module.exports={ FollowController,unFollowController,Follow_request,request_accepted,request_rejected}