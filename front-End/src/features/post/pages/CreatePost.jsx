import { useRef ,useState} from 'react'
import { usePost } from '../hook/usePost'
import "../../auth/style/Form.scss"
import { useNavigate } from 'react-router'
const CreatePost = () => {
const {Loading,handlecreatpost}=usePost()

const [caption, setcaption] = useState("")
const ImagField=useRef() 
const navigate= useNavigate()  
const submithandler=async(e)=>{
  e.preventDefault()
   const file=ImagField.current.files[0]
 await handlecreatpost(caption,file)
 console.log("successfully created");
navigate("/Feed")

}
if(Loading){
  return(<main className='Loading'>
    <h1>Loading...</h1>
  </main>)
}

  return (
     <main>
         <div className="form-container">
             <h1>CreatPost</h1>
             <form onSubmit={submithandler} >
              <label htmlFor="file">Select Image</label>
                 <input hidden
                 ref={ImagField}
                
                 type="file" name="file" id='file'  />
                 <input
                 onChange={(e)=>{setcaption(e.target.value)}}
                  type="text"
                  name="caption"  />
                 <button type="submit">Submit</button>
             </form>
             
         </div>
     </main>
  )
}

export default CreatePost