import React, { useEffect, useState } from 'react'
import { getCategories, savePaidPdf } from '../../actions/category_action'

function AddPaidFiles() {
 
    const [data ,setData] = useState({
         cat:{name:"cat" ,value:"", error:"" , options:[], message:""},
         file:{name:"file" ,value:"", error:"" , message:""}
    }) 
     

    const {cat , file }  = data 

    useEffect(()=>{
          (async function(){
             let cat =await  getCategories('get-categories')
             setData(p=>({
                 ...p , 'cat':{...p['cat'] ,options:cat?.result?.data.map(ele=> ({_id:ele._id , TITLE:ele.TITLE })) }
             }))
           

          })()
    } ,[])


    const onChangeHandler= (e)=>{
         const { name  }  = e.target
         
         if(name=="file") {
             setData(p=>{
                return{
                    ...p , [name]:{...p[name], value:e.target.files[0]}
                }
            })
             

         }else{
            setData(p=>{
                return{
                    ...p , [name]:{...p[name], value: e.target.value}
                }
            })
         }
    }

    const insertPaidFile =async ()=>{
          let formData = new FormData()
          formData.append('attachment' , data.file.value)
          formData.append('catId' , data.cat.value)
           let saved = await savePaidPdf('insert-paid-files' , formData )
            console.log("saved",saved)
            if(saved.status) {
                  alert('saved')
            }
        } 


    return (
    <>
     <div className='container'> 
        
         <div className='row'>
              <div className='col-12'>
                <div class="form-group" >
                    <label for="exampleInputEmail1">Category</label>

 
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Example select</label>
                            <select type="text" onChange={onChangeHandler} name={cat.name} value={cat.value} class="form-control" id="exampleFormControlSelect1">
                            
                            {cat.options.map(ele=>{
                                 return  <option value={ele._id}>{ele.TITLE}</option>
                            })}

                            </select>
                        </div>
                        
                                        
                  
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Files</label>
                    <input type="file" name={file.name}  onChange={onChangeHandler} class="form-control"   />
                </div>
          
                <button  class="btn btn-primary" onClick={insertPaidFile} >Insert</button>
                 
              </div>
        </div>
         
     </div>
       

    </>
  )
}

export default AddPaidFiles
