import { options } from 'marked'
import React, { useState } from 'react'
import { v1rouer } from '../../actions/root_action'

import { MdEditor ,MdCatalog ,MdPreview } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import { utils } from '../../utils';
import { useCookies } from 'react-cookie';
import { constants } from '../../constant';

  import JSONInput from 'react-json-editor-ajrm';
    import locale    from 'react-json-editor-ajrm/locale/en'

function AddQuizQuestion() {
    const [cookies, setCookie] = useCookies ([constants.btcode_live_cd_key , constants.btcode_live_cd]);

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


    const [finalPayload ,setFinalPayload]  = useState({
        "question": "What is the difference between @media and @supports in CSS?",
        "options": [
            "@media is used for applying styles based on screen size, while @supports is used for applying styles based on feature support.",
            "@supports is used for defining fallback styles for old browsers, and @media is used for defining styles for different devices.",
            "@media is used for detecting user agent types, while @supports is used for conditional loading of external stylesheets.",
            "@supports is used for mobile responsiveness, and @media is used for desktop responsiveness."
        ],
        "correctAnswer": 0,
        "description": "@media is used for applying CSS styles based on conditions like screen size, orientation, and resolution, while @supports is used for applying styles based on whether the browser supports a specific CSS feature.\n\n### Example of @media:\n\n```css\n@media (max-width: 600px) {\n  body {\n    background-color: lightblue;\n  }\n}\n```\n\nIn this example, the background color of the `body` will only change if the viewport width is 600px or smaller.\n\n### Example of @supports:\n\n```css\n@supports (display: grid) {\n  .container {\n    display: grid;\n  }\n}\n```\n\nIn this example, the `.container` will only use CSS Grid if the browser supports the `display: grid` property."
    })
    
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
        let res = await v1rouer.post('quiz/insert-quiz-questions' ,payload , {
            headers:{
                 "authorization":`Bearer ${cookies[constants.btcode_live_cd_key]}`
            }
        }  )
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

              console.log(finalPayload)
            
        //     let payload = utils.checkDiscription(JSON.parse(finalPayload) )? JSON.parse(finalPayload):{}  
        //    let res =  await submit( JSON.parse(payload) ) 
        //     if(res?.data){
        //         alert('added ')
        //     }else{
        //         alert('some error occured ',)             
        //     }  
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

    <JSONInput
        id          = 'a_unique_id'
        placeholder = {  finalPayload }
        
        locale      = { locale }
        value={finalPayload}
        style={{width:"100%"}}
        height      = '500px'
        
        onChange={(payload)=>
        console.log(payload)
        // setFinalPayload(payload)
        
        }
        
    /> :" " 
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