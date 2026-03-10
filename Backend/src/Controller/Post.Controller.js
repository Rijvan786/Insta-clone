const imagekit=require("@imagekit/nodejs")
const{toFile}=require("@imagekit/nodejs");
const PostModel = require("../models/Post.model");
const Likemodel = require("../models/Like.model");
const { post } = require("../routes/Auth.route");
const AuthModel = require("../models/Auth.model");



/**
 * 
 * @param {Key} of Imagkit 
 *  
 */

const key=new imagekit({
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY
})


/**createpost */
const CreatPostController=async(req,res)=>{
         const {caption,imgurl,user}=req.body 
         const userid=req.user.id
    console.log(req.file,req.body);

    const file=await key.files.upload({
        file:await toFile(Buffer.from(req.file.buffer) ,"file"),
        fileName:"file",
        folder:"Instaclone"
    })

    const Post=await PostModel.create({
        caption:req.body.caption,
        imgurl:file.url,
        user:userid
    })

    res.status(200).json({
        message:"Post is Created successfully",
        Post
    })
}

/** get yourself post */
const getPostController=async(req,res)=>{
       
    const userid=req.user.id
    const post=await PostModel.find({
        user:userid
    })

    if(!post){
        return res.status(404).json({
            message:"User not created post"
        })
    }

    res.status(200).json({
        message:"all post get successfully",
        post
    })
}

/**get indivisually post of yourself */
const getPostDetailController=async(req,res)=>{
    const userid=req.user.id
    const PostID=req.params.postID

    const Post=await PostModel.findById(PostID)
    const validpostuser=Post.user.toString()==userid
    if(!validpostuser){
        return res.status(403).json({
            message:"Conten is Forbidden"
        })
    }

   res.status(200).json({
    message:"User is fetched post successfully",
    Post
   })
}
/**any post fetch  */
const getpostanycontroller=async(req,res)=>{
    const PostID=req.params.postID

    const post=await PostModel.findById(PostID)
    if(!post){
        return res.status(404).json({
            message:"post is not created"
        })
    }

    res.status(200).json({
        message:"Post fetched successfully",
        post
    })
}
const getmealluser= async(req,res)=>{
     
    const alluser=await AuthModel.find()
     

     res.status(200).json({
        message:"get data successfully",
        alluser
     })

}

const likePostController =async(req,res)=>{
        const username=req.user.username
        console.log(username);
        const postId=req.params.postID
         const Post=await PostModel.findById(postId)
         if(!Post){
            return res.status(404).json({
                message:"User is not created post"
            })
         }
const allreadylike=await Likemodel.findOne({
    post:postId,
    user:username
  
})

if(allreadylike){
    return res.status(409).json({
        message:"user is already like thist post",
        allreadylike,
       
    })
}
        const like=await Likemodel.create({
            post:postId,
            user:username
    
        })
  
        res.status(200).json({
            message:"LIked a post Succeessfully",
            like,
            Post
        })
}
const unlikePostController=async(req,res)=>{
    const userid=req.user.username
    const postID=req.params.postID
    const Post=await PostModel.findById(postID)
    const userislike=await Likemodel.findOne({
        post:postID,
        user:userid
    })
    if(!userislike){
        res.status(404).json({
            message:"user is not like this post",
            post
        })
    }
    await Likemodel.findOneAndDelete({
        post:postID,
        user:userid
    })
    res.status(200).json({
        message:"Unlike successfully this post",
        Post
    })

}

const getFeedController=async(req,res)=>{
    username=req.user.username
   const post =await Promise.all((await PostModel.find().populate("user").lean())
    .map(async(post)=>{
        const islike=await Likemodel.findOne({
            user:username,
            post:post._id
        })

        post.islike=Boolean(islike)
        return post
    }))
   

    res.status(200).json({
    messsage:"get feed successfully",
    post
   })
}
module.exports={CreatPostController,
    getPostController,
    getPostDetailController,
    likePostController,
    unlikePostController,
      getFeedController,
      getpostanycontroller,
      getmealluser
}