import React, { useEffect, useReducer, useState } from 'react'
import { Typeahead,MenuItem } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { v1rouer } from '../../actions/root_action';
import { Cookies, useCookies } from 'react-cookie';
import { constants } from '../../constant';

function AddTimeSpan() {

    const [cookies, setCookie] = useCookies ([constants.btcode_live_cd_key , constants.btcode_live_cd]);


    const intial  = {
     quiz_cat:{name:"quiz_cat" , value:"" , options:[] , pn:1 ,itemsPerPage: 1000   },    
     difficulty_level:{name:"difficulty_level" , value:"" , options:[] ,pn:1 ,itemsPerPage: 1000  },    
     duration:{name:"duration" , value:""  },    
    }
        
    
    const formReducer = (state , action)=>{

        switch(action.type){
            case "options" :
                const {payload}= action 
                 if(action.name=="quiz_cat") {
                     return {...state,['quiz_cat']:{...state['quiz_cat'] , options:payload.data?.quiz_cat?.map(ele=>({name:ele.TITLE, value:ele._id}) )  }  }
                 } 

                 if(action.name=="difficulty_level") {
                    return {...state,['difficulty_level']:{...state['difficulty_level'] , options:payload.data.map(ele=>({name:ele.DIFFICULTY_LEVEL, value:ele._id}))  }  }                    
                } 



            case "value" :
                if(action.name=="quiz_cat") {
                    return {...state,['quiz_cat']:{...state['quiz_cat'] , value:action.payload.data  }  }
                } 

                if(action.name=="difficulty_level") {
                return {...state,['difficulty_level']:{...state['difficulty_level'] ,  value:action.payload.data  }}                    
            } 
       
            if(action.name=="duration") {
                return {...state,['duration']:{...state['duration'] , value:action.payload.data  }  }
            } 

       
        }

        
        
    }
    

    
    const [fd, dispatch] = useReducer(formReducer, intial) 
    const [singleSelections, setSingleSelections] = useState([]);
    const [multiSelections, setMultiSelections] = useState([]);
    const [loader, setLoader] = useState(false);


    
  
  const callQuizCat = async ()=>{
    let res = await v1rouer.post('quiz/get-quiz-categories',{pn:fd.quiz_cat?.pn , itemsPerPage:fd.quiz_cat?.itemsPerPage } )
    return res?.result
   }


    const callDifficultyLevel = async ()=>{
    let res = await v1rouer.get('quiz/get-difficulty-level' )
    return res?.result
    }
    

    const callTimeStamp = async (payload)=>{
        let res = await v1rouer.post('quiz/get-quiz-timestamps' , payload ,{
            headers:{
                 "authorization":`Bearer ${cookies[constants.btcode_live_cd_key]}`
            }
        }   )
        return res?.result?.data
        }
    
        


        
    const updateTimeStamp = async (payload)=>{
        let res = await v1rouer.post('quiz/update-timespan-of-quiz-catgs' , payload ,{
            headers:{
                 "authorization":`Bearer ${cookies[constants.btcode_live_cd_key]}`
            }
        }   )
        return res?.result?.data
        }
    

    const setCat =async  ()=>{
        let cat = await callQuizCat()
        console.log("cat",cat)
        
        dispatch({type:"options",name:"quiz_cat", payload:{ data : cat?.data }})
    }
     
    const setDiff =async ()=>{
        let diff = await callDifficultyLevel()
        dispatch({type:"options",name:"difficulty_level", payload:{ data : diff?.data }})
    }
     
    useEffect(()=>{
      setCat()
      setDiff()         
    },[])
    
    useEffect(()=>{
          
          (async function () {
              if(fd.quiz_cat.value && fd.difficulty_level.value) {

                let  timeStamp = await callTimeStamp({ 
                    "quizCat":quiz_cat?.value[0]?.value , 
                  "difficultyId":difficulty_level?.value[0]?.value
                  })    

                  if(timeStamp?.QUIZ_TIMESPAN)
                    dispatch({type:"value",name:"duration", payload:{ data : Number(timeStamp?.QUIZ_TIMESPAN)  }}) 
                }
            })()
         
    }, [fd.quiz_cat.value ,fd.difficulty_level.value ])


    

    const UpdateTimeStamp = async ()=>{
        setLoader(true)

         
        if(fd.quiz_cat.value && fd.difficulty_level.value) {

            let  timeStamp = await updateTimeStamp({ 
                "quizCat":fd.quiz_cat?.value[0]?.value , 
                "difficultyId":fd.difficulty_level?.value[0]?.value,
                timeSpan:fd.duration.value
              })    
               
              if(timeStamp){
                 alert("updated")
              }

            }

        setLoader(false)

    }

  

   const { quiz_cat , difficulty_level , duration }  = fd 
    
    return (
            <>

                        
                <div class="container">
                <div class="row">
                    <div className="col-sm">
                      
                    <Typeahead
                    id="basic-typeahead-single"
                    labelKey="name"
                    onChange={(value)=>{
                dispatch({type:"value",name:"quiz_cat", payload:{ data : value }})
                         
                    }}
                    onPaginate={() => console.log('Results paginated')}
                    options={quiz_cat.options}
                    name={quiz_cat.name}
                    paginate={true}
                    placeholder="category"
                    selected={quiz_cat.value}
                    />
                    

                    </div>
                    <div className="col-sm">
                   
                       
                    <Typeahead
                    id="basic-typeahead-single"
                    labelKey="name"
                    onChange={(value)=>{
                        dispatch({type:"value",name:"difficulty_level", payload:{ data : value }})
                    }}
                    options={difficulty_level.options}
                    name={difficulty_level.name}
                    placeholder="difficulty level"
                    selected={difficulty_level.value}
                    />
                    </div>
                    <div className="col-sm">

                    <select class="form-select"
                      onChange={(e)=>{
                        dispatch({type:"value",name:"duration", payload:{ data : Number(e.target.value)  }}) }}
                    selected={duration.value}                    
                    name={duration.name}
                    value={duration.value}
                     aria-label="Default select example">
                        {(new Array(100)).fill(undefined).map((ele,index)=> 5*index).slice(1,).map(ele=>  <option 
                        value={ele} 
                        >{ele} min </option>  ) }  
                        </select>

                    </div>
                    <div class="d-grid gap-2 my-5">

                   
                             <button 
                             disabled={loader?true:false}
                             class="btn btn-primary" type="button" onClick={UpdateTimeStamp}>
                             {
                            loader? <div class="spinner-border" role="status">
                        </div> :"update timestamp"
                }         


                             </button>
                    </div>
                </div>
        </div>


    </>
  )
}

export default AddTimeSpan