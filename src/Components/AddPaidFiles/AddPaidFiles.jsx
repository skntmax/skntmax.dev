import React, { useEffect, useState } from 'react'
import { getCategories, savePaidPdf } from '../../actions/category_action'

import { Typeahead } from 'react-bootstrap-typeahead'; // ES2015
import 'react-bootstrap-typeahead/css/Typeahead.css';
function AddPaidFiles() {
 
    const [data ,setData] = useState({
         cat:{name:"cat" ,value:"", error:"" , options:[], message:""},
         file:{name:"file" ,value:"", error:"" , message:"" ,extension:"" , } 
                
     }) 

     const [ loader , setLoader ]  = useState(false)
    
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
        debugger 
        const { name  }  = e.target
         

         if(name=="file") {

            let filename = e.target.value
            let file_arr = filename.split('.')
            let ext = (file_arr[file_arr.length-1]).toLowerCase() 
             
             if(ext!= "pdf" ) {
                alert("please insert pdf file only")
                return
             }

             setData(p=>{
                return{
                    ...p , [name]:{...p[name], value:e.target.files[0] , extension:ext}
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
           
        setLoader(true)
        for(let key in data) {
           if(!data[key]['value']) {
              alert("please fill all the fields")
              return
           }    

           if(!data[key]['value'] && key=="file") {
              
               if(data[key]['extension']!=='pdf')
                {
                    alert("please select pdf only , then retry ") 
                    return 
                }
               
           }
            

        }


        let formData = new FormData()
          formData.append('attachment' , data.file.value)
          formData.append('catId' , data.cat.value)
    
           let saved = await savePaidPdf('insert-paid-files' , formData )
            if(saved.status) {
                setLoader(false)
                  alert('saved')
            }

    setLoader(false)

        } 


    return (
    <>
     <div className='container'> 
        
         <div className='row'>
              <div className='col-12'>
                <div class="form-group" >

 
                        <div>
                            
                        <Typeahead
                            onChange={(selected) => {
                               const {label , value} = selected[0]
                                onChangeHandler({ target: { name:data.cat.name , value}  })
                              }}
                             
                            options={ data.cat.options?data.cat.options.map(ele=>({label:ele.TITLE ,  value:ele._id})) :[]} />

                        </div>


                        {/* <div class="form-group">
                            <select type="text" onChange={onChangeHandler} name={cat.name} value={cat.value} class="form-control" id="exampleFormControlSelect1">
                             <option value=""> please select category first  </option>
                            {cat.options.map(ele=>{
                                 return  <option value={ele._id}>{ele.TITLE}</option>
                            })}

                            </select>
                        </div> */}

                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Files</label>
                    <input type="file" name={file.name}  onChange={onChangeHandler} class="form-control"   />
                </div>
                 
               {loader ?   <button disabled class="btn btn-primary" > loader </button> :
                 <button  class="btn btn-primary" onClick={insertPaidFile} >Insert</button>
                 }
            
              
              </div>
        </div>
         
     </div>
       

    </>
  )
}

export default AddPaidFiles
