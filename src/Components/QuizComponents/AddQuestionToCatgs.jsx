import React, { useEffect, useState } from 'react'
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { v1rouer } from '../../actions/root_action';

 const options =
  [
   {name:"html" , value:"html" },    
]


function AddQuestionToCatgs() {    


    
const [fd , setFd ]  = useState({
    quiz_cat: { name: "quiz_cat", value: "", options:[], error: "", required: false  , pn:1 , itemsPerPage:100},
    difficulty_level: { name: "difficulty_level", options:[] ,  value: "", error: "", required: false },
    answers: { name: "answers" , value: false, options:[], error: "", required: false },
   }  ) 
  

    const onSelect = ()=>{
         
    }

    const onRemove= ()=>{
         
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

    const callQuizCat = async ()=>{
         let res = await v1rouer.post('quiz/get-quiz-categories',{pn:fd.quiz_cat?.pn , itemsPerPage:fd.quiz_cat?.itemsPerPage } )
         return res?.result
        }


    const callDifficultyLevel = async ()=>{
        let res = await v1rouer.get('quiz/get-difficulty-level' )
        return res?.result
        }
    

    const callQuestionsArray = async ()=>{
        let res = await v1rouer.post('quiz/get-relvent-questions' , {    
            "quizCat":fd?.quiz_cat?.value ,
            "difficultyId":fd?.difficulty_level?.value } )
        return res?.result
       
    }
    
    
            
    
    
    useEffect(()=>{

         (async function() {  // for quiz category 
              let res =  await callQuizCat() 
              if(res)
                 setOptions('quiz_cat' , res?.data?.quiz_cat )
                
              let diff =  await callDifficultyLevel()
              if(diff)
                 setOptions('difficulty_level' ,diff?.data )  

         })()
         
    }, [])


    useEffect(()=>{
          
          if(fd?.quiz_cat?.value!="" &&  fd.difficulty_level?.value!="" ) {

             (async function(){
                 let qtnList = await callQuestionsArray()
                  if(qtnList?.data) {
                     let arr = qtnList?.data.map((ele)=>({
                         value:ele._id,
                         name:ele?.QUIZ_QUESTION?.QUESTION
                     }))

                     setOptions('answers',arr )
                  }
             })()
              
          
            }
         
    },[fd?.quiz_cat?.value , fd.difficulty_level?.value])

    return (
     
     <>
      <div className='container'>
         <div className='row'>
          <div className='col-6'>
            Quiz Cateogry

            <select  onChange={setState} name="quiz_cat"  class="form-select" aria-label="Default select example">            
             <option selected >Open this select menu</option>
            
            {fd?.quiz_cat?.options && fd?.quiz_cat?.options.length>0 &&  fd?.quiz_cat?.options.map((ele)=>(
                <option value={ele._id}>{ele.TITLE}</option>
            )) }

            </select>

    
          </div>

          <div className='col-6'>
          Difficulty level 
          <select onChange={setState} name="difficulty_level"  class="form-select" aria-label="Default select example">
            <option selected >Open this select menu</option>
            {fd?.difficulty_level?.options && fd?.difficulty_level?.options.length>0 &&  fd?.difficulty_level?.options.map((ele)=>(
                <option value={ele._id}>{ele.DIFFICULTY_LEVEL}</option>
            )) }

            </select>
          </div>
              
         </div>
      </div>

      <div className='container'>
         <div className='row'>
          <div className='col-12'>
          <Typeahead
            id="basic-typeahead"
            labelKey="name"
            multiple
            // onChange={setSelected}
            options={fd.answers.options || []}
            placeholder="Choose a fruit..."
            selected={fd.answers.options || []}
            />
                    

          </div>               
         </div>
         
      </div>

           
      </>
  )
}

export default AddQuestionToCatgs