import { options } from 'marked'
import React, { useState } from 'react'
import { v1rouer } from '../../actions/root_action'

import { MdEditor ,MdCatalog ,MdPreview } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import { utils } from '../../utils';

function AddQuizQuestion() {

     const [ fd ,setFd] = useState({ 
        quizQuestion: { name: "quizQuestion", value: "", options:[], error: "", required: false  , pn:1 , itemsPerPage:100},
        questionOptions: { name: "questionOptions", value: [], options:[
            {name: "quizQuestion1", value: "", options:[], error: "", required: false , placeholder:"options1"   } ,
            {name: "quizQuestion2", value: "", options:[], error: "", required: false  ,placeholder:"options2"  } ,
            {name: "quizQuestion3", value: "", options:[], error: "", required: false  ,placeholder:"options3"  } ,
        
        ], error: "", required: false  , pn:1 , itemsPerPage:100},
        correctAnswer: { name: "correctAnswer", value: [], options:[], error: "", required: false  , pn:1 , itemsPerPage:100},
        description: { name: "description", value: "", options:[], error: "", required: false  , pn:1 , itemsPerPage:100},
      })


    const [finalPayload ,setFinalPayload]  = useState("")
    
      const [mode ,setMode]  = useState({
         manual:true,
         json:false
      })


      const setArrayState = ( e)=>{
        const { name , value}  = e.target
             setFd(p=>{
             return {
              ...p , [name]:{ ...p[name] , value : [...p[name]['value'], value ] }    
             }
        })
        }

    

    const setState = ( e)=>{
        const { name , value}  = e.target
             setFd(p=>{
             return {
              ...p , [name]:{ ...p[name] , value : value }    
             }
        })
        }
    
        const setOptions = (name ,options )=>{
                 setFd(p=>{
                 return {
                  ...p , [name]:{ ...p[name] , options : options }    
                 }
            })
     }


     const addMoreOptionField = ()=>{
        setFd(p=>({
             ...p, ['questionOptions']:{
                               ...p['questionOptions'] , 'options':[ ...p['questionOptions']['options']  ,
                               {name:   `quizQuestion${p['questionOptions']['options'].length+1}` , value: "", options:[], error: "", required: false ,placeholder:` options ${p['questionOptions']['options'].length+1}`   } ,
                            ]
             }
        }))
     }


    const onChangeOptionhandler = (e,index)=>{
         const {name , value } = e.target
         
            setFd(p=>{
             return {
                 ...p  , 
                 
                 ['questionOptions']:{ ...p['questionOptions'] ,

                value : fd['questionOptions']['options'].map(ele=> ele.value) , 
                    
                options: p['questionOptions']['options'].map(ele=>{
                     if(ele.name==name){
                         return  { ...ele , value:value }
                     }
                     return ele 
                 })}
             }
         })
    }


    
    const submit = async (payload)=>{
        let res = await v1rouer.post('quiz/insert-quiz-questions' ,payload  )
        return res?.result
       
    }


    const submitQuizQuestion= async ()=>{
     
        if(mode.manual) {
            let payload = {
                "question": fd.quizQuestion.value,
                "options": fd.questionOptions.value,
                "correctAnswer":  Number(fd.correctAnswer.value),
                "description": fd.description.value
            }
    
           let res =  await submit(payload) 
            if(res?.data){
                alert('added ')
            }else{
                alert('some error occured ')             
            }  
        }






        
        if(mode.json) {
              if(!finalPayload) {
                 alert("please enter body first ")
                 return 
              }
            
            let payload = utils.checkDiscription(finalPayload)?finalPayload:{}  
           let res =  await submit(payload) 
            if(res?.data){
                alert('added ')
            }else{
                alert('some error occured ',)             
            }  
        }         
    }
            
  return (
     <>


      <div className='container-fluid' style={{width:"50%"}}>

      

<div class="form-check d-flex">
   <input

  onClick={()=>{setMode({ manual:true ,json:false })}} 
  checked = {mode.manual?true:false}
  class="form-check-input mx-1" type="radio"
   name="manual" id="flexRadioDefault1" />
  <label class="form-check-label" for="flexRadioDefault1">
    Manual
  </label>

  <input 
  onClick={()=>{setMode({ manual:false ,json:true })}} 
  checked = {mode.json?true:false}
  class="form-check-input mx-2" type="radio" 
  name="json" id="flexRadioDefault2" />
  <label class="form-check-label" for="flexRadioDefault2">
        JSON
  </label>

</div>



{ 
    mode.json ?  
    <textarea   
      name={'json'}
      class="form-control my-5"
       id="exampleFormControlTextarea1" 
       rows="10"
       onChange={(e)=> setFinalPayload(e.target.value)}
        placeholder={"put your json here"} /> :" " 
}

           {
            mode.manual ? 
            <div className='row'>
             <div className='col-12'>
             <label>Quiz Question </label>
             <input type="text"
              name="quizQuestion"
              onChange={setState}
              class="form-control" id="exampleFormControlInput1" placeholder="Type your question here" />
            </div>

            <div className='col-12 my-2 '>
            <label>Options </label>

                {fd.questionOptions.options.map((ele,index)=>( 
                            <textarea onChange={e=> onChangeOptionhandler(e, index)}  name={ele.name}  class="form-control my-1" id="exampleFormControlTextarea1" rows="3" placeholder={ele.placeholder} />
                ))}   
                
                  
            <button type="button"
            onClick={()=> addMoreOptionField()}
             class="btn btn-primary btn-lg btn-block" style={{width:"100%"}}>+</button>

            </div>

                 

            <div className='col-12 my-2 '>
            <label for="exampleFormControlSelect1">Correct answer</label>
            <select  onChange={setState} name="correctAnswer" class="form-control" id="exampleFormControlSelect1">

                {fd.questionOptions.options.map((ele,index)=>(
                <option>{index}</option>
                ))}

            </select>            
            </div>

            <div className='col-12 my-2 '>
            <label for="exampleFormControlSelect1">Discription</label>
           

            <MdEditor 
            name="description"
            language='en-US'
            preview={false}
            theme={'light'}
            modelValue={fd.description.value || ""} 
            onChange={(value)=>{setState({ target:{name:'description' ,value} } )} }  
            />
       
       <MdPreview  language='en-US' editorId={'show'} modelValue={fd.description.value || ""}   previewTheme="github"  />
 
        </div>

            </div> :""
           }
            

            <button type="button"
            onClick={submitQuizQuestion}
             class="btn btn-primary btn-lg btn-block" style={{width:"100%"}}>Add a Quiz Question </button>            
    </div>
    </>

  )
}

export default AddQuizQuestion