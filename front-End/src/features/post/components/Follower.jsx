import { useNavigate } from 'react-router'

const Follower = ({posts}) => {
  const navigator=  useNavigate()
    // console.log(posts)
    // const newPosts = Follow.filter((Follow) => Follow.Follower=Follower)
    // console.log(newPosts);
    
  return (
  <div className='Followdata'>
     
    <div className="Following">
                 <h3>Following</h3>
            {posts.map((post,key)=>{
             console.log(post);
          return (<div key={key} className="suggest"
            
          >{post.Followee &&<h4 id='h4'>{post.Followee} <h5 id='h5'>Following</h5> </h4> }</div>) 
          })}
          </div>    
      <div className='Follower'>
     <button className='buttonn'
            onClick={()=>{
              navigator("/register")
            }}>Logout</button>
      
          <h3>Suggested for you</h3>
          {posts.map((post,key)=>{

          return (<div key={key} className="suggest">{<h4>{post.username}</h4>}<h5> Follow  </h5> </div>) 
          })}
        
          
    </div>

          
    
  </div>
  )
}

export default Follower