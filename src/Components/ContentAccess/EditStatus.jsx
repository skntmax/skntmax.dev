import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { v1rouer } from '../../actions/root_action'

function EditStatus() {
    let params = useParams()

    const [ fd,setFd]=  useState({
        content:{ name:"content" , value:"" , error:"",  message:"" , options:[], total:0}
    })



    const submit = async()=>{
      let update =await v1rouer.post(`admin/change-content-status/${params?.qtnId}`, { contentStatus:Number(fd?.content?.value) })
      alert('updated')
    }
     

    const onChangeHandler= (e)=>{ 
        const { name , value}  = e.target

         setFd(p=>({
             ...p  , [name] : { ...p[name] , value}  
        }))    

    }
    return (
        
    <div className='d-flex justify-content-center align-content-center h-100 mt-5'> 
     <select class="custom-select" name="content" onChange={onChangeHandler}>
     <option selected>Enable or Disable</option>
    <option value="1"  >Enable</option>
    <option value="0">Disable</option>
</select>

<button onClick={submit}> submit </button>

     </div>
  )
}

export default EditStatus