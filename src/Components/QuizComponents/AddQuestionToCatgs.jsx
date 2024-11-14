import React, { useEffect, useState } from 'react'
import { Typeahead,MenuItem } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { v1rouer } from '../../actions/root_action';

 const options =
  [
   {name:"html" , value:"html" },    
]


function AddQuestionToCatgs() {    


    
const [fd , setFd ]  = useState({
    quiz_cat: { name: "quiz_cat", value: "", options:[], error: "", required: false  , pn:1 , itemsPerPage:100},
    cat_wise_questions: { name: "cat_wise_questions", value: "", options:[], error: "", required: false  , pn:1 , itemsPerPage:100},
    difficulty_level: { name: "difficulty_level", options:[] ,  value: "", error: "", required: false },
    answers: { name: "answers" , value: false, options:[], error: "", required: false },
}  ) 
  
    const [update , setUpdate]  = useState(false)
  
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


    
        const appendOptions = (name ,obj )=>{
            setFd(p=>{
            return {
             ...p , [name]:{ ...p[name] , options : [ ...p[name]['options'] , {value:obj.value , name:obj.name}  ] }    
            }
               })
   
       }


        const onPickupQuestion = (array )=>{
             appendOptions('answers', array)

        }



        const onChangeDifficulty= (e, key )=>{
         const { name , value:difficultyId  } = e.target
         
         let updatedAnswersOptions = fd.answers.options.map((ele, index)=>{
             if(index==key) {
               return { ...ele , difficultyId:difficultyId   }    
             }
             return ele 
         })
          
         setOptions('answers', updatedAnswersOptions )
            
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
            "difficultyId":fd?.difficulty_level?.value,
            pagination:false
        } )
        return res?.result
       
    }


    
    const catWiseQuizQuestions = async ()=>{
        let res = await v1rouer.post('quiz/get-topic-wise-questions' , {    
            "quizCat":fd?.quiz_cat?.value , } )
        return res?.result
       
    }
    

    const callAllQuizQuestions = async ()=>{
        let res = await v1rouer.get('quiz/get-all-quiz-questions'  )
        return res?.result
       
    }
    

      

    const callUpdateAllQuestions = async (payload)=>{
        let res = await v1rouer.post('quiz/update-questions-into-quiz-cat' ,payload , {}  )
        return res?.result
       
    }
    

    const onSubmitQuestions= async ()=>{
        setUpdate(true)
        let params = {  
            "quizCat":fd.quiz_cat?.value ,
            difficultyId: fd.difficulty_level?.value ,  
            "questions":[]
        }

         let notValid = fd.answers.options.some(ele=> ele.difficultyId=="" )   
        
         if(notValid){
            alert("please set difficilty level")
            setUpdate(false)
            return 
         }
          
        let updatedQuestion  = fd.answers.options.map(ele=>{
              return { 
                    "questionId":ele.value,
                    "difficultyId":ele.difficultyId
             }
        })
        params.questions = updatedQuestion
        let updatd = await callUpdateAllQuestions(params)

        console.log("updatd",updatd)
         if(updatd?.data){
            alert("updated")
         }else{
             alert("some erorr occured")
         }

         setUpdate(false)

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
                     let arr = qtnList?.data.questionList?.map((ele)=>({
                         value:ele.QUIZ_QUESTION?._id,
                         name:ele?.QUIZ_QUESTION?.QUESTION,
                         
                     }))

                     setOptions('answers',arr )
                  }
             })()
              
          
            }
         
    },[fd?.quiz_cat?.value , fd.difficulty_level?.value])


    useEffect(()=>{
          
        if(fd?.quiz_cat?.value!="" ) {
           (async function(){
               let allQuizQuestions = await callAllQuizQuestions()
                if(allQuizQuestions?.data) {
                   let arr = allQuizQuestions?.data.map((ele)=>(
                       {
                       value:ele._id,
                       name:ele.QUESTION,
                       difficultyId:"" 
                   }))

                    setOptions('cat_wise_questions',arr )
                }
           })()

          }
       
  },[fd?.quiz_cat?.value])


    return (
     
     <>
      <div className='container'>
         <div className='row border '>
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

          <div className='col-12 my-3'>
          <Typeahead
            id="basic-typeahead"
            labelKey="name"
            multiple
            disabled={(fd?.difficulty_level?.value!="" &&  fd?.quiz_cat?.value!="")?false:true }
            // onChange={onPickupQuestion}
            options={fd.cat_wise_questions.options || []}
            placeholder="Choose a fruit..."
            selected={fd.answers.options || []}

            renderMenuItemChildren={(option, props) => (
               <>
                <MenuItem
                onClick={(e) => e.preventDefault()} // Prevent Typeahead from closing
        >
          <div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation(); // Prevent Typeahead from closing and losing focus
              onPickupQuestion(option); // Toggle selection
                }}
                style={{ display: 'flex', alignItems: 'center' }}
                >
                    <input
                        type="checkbox"
                        checked={fd.answers.options.some((selectedOption)=> selectedOption.value == option?.value ) }
                        
                        style={{ marginRight: '8px' }}
                    />
                <span>{option.name}</span>
                </div>
                </MenuItem>
                </>
            )}

            />
          </div> 
         </div>




         <div className='col-12 my-3' style={{height:"60vh" , overflow:"auto"}}>
          
         <ul className="list-group list-group-flush">
        
              
            {fd?.answers?.options && fd?.answers?.options.length>0 &&  fd?.answers?.options.map((ele, index)=> {
                 return <> 
           
                   <li className="list-group-item flex justify-content-between">      
                  {ele?.name || ""}
                  <select style={{width:"auto"}} name="setDifficulty"   onChange={(e)=>onChangeDifficulty(e, index)}   className="form-select form-select-sm " aria-label=".form-select-sm example">
                    <option selected>Select Difficulty</option>
                    {fd?.difficulty_level?.options && fd?.difficulty_level?.options.length>0 &&  fd?.difficulty_level?.options.map((ele)=>(
                              <option value={ele._id}>{ele.DIFFICULTY_LEVEL}</option> 
                        )) }        
                    </select>
                     </li>
                 </>
            } ) }     
                
        </ul>
         
       
        <button type="button"
        disabled={update?true:false}
         onClick={onSubmitQuestions}
          class="btn btn-primary btn-lg btn-block my-5" style={{width:"100%"}}>
                        
                {
                    update? <div class="spinner-border" role="status">
                        </div> :"Update Quiz Questions"
                }         
  
          </button>
         
         </div>

      </div>

    

           
      </>
  )
}

export default AddQuestionToCatgs