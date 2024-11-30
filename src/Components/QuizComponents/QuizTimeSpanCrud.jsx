import React, { useEffect, useReducer, useState } from 'react'
import { Typeahead,MenuItem } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { v1rouer } from '../../actions/root_action';
import { Cookies, useCookies } from 'react-cookie';
import { constants } from '../../constant';

function QuizTimeSpanCrud() {

    const [cookies, setCookie] = useCookies ([constants.btcode_live_cd_key , constants.btcode_live_cd]);


    const intial  = {
     quiz_cat:{name:"quiz_cat" , value:"" , options:[] , pn:1 ,itemsPerPage: 1000   },    
     difficulty_level:{name:"difficulty_level" , value:"" , options:[] ,pn:1 ,itemsPerPage: 1000  },    
     duration:{name:"duration" , value:""  },    
     list:{name:"list" , value:"" ,options:[]   },    
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

                if(action.name=="list") {
                    return {...state,['list']:{...state['list'] , options:payload.data  }  }                    
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

    const callRemoveTimestamp = async (payload)=>{
        let res = await v1rouer.post('quiz/remove-timestamp' ,payload ,{
            headers:{
                 "authorization":`Bearer ${cookies[constants.btcode_live_cd_key]}`
                }
           })
        return res?.result
        }

    

    const callTimeStamp = async (payload)=>{
        let res = await v1rouer.post('quiz/get-quiz-timestamps/true' , payload ,{
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

                  if(timeStamp)
                        dispatch({type:"options",name:"list", payload:{ data : timeStamp }})
                }
            })()
         
    }, [fd.quiz_cat.value ,fd.difficulty_level.value ])


    

    const UpdateTimeStamp = async (id)=>{
        setLoader(true)         
        if(fd.quiz_cat.value && fd.difficulty_level.value) {

           // removing  item 
             await callRemoveTimestamp({ 
                timeStampId:id
              })    


        // reloading item 
        let  timeStamp = await callTimeStamp({ 
        "quizCat":quiz_cat?.value[0]?.value , 
        "difficultyId":difficulty_level?.value[0]?.value
        })    

        if(timeStamp)
            dispatch({type:"options",name:"list", payload:{ data : timeStamp }})
    
            }

        setLoader(false)

    }

  

   const { quiz_cat , difficulty_level ,list }  = fd 
    
    return (
            <>

                        
                <div class="container">
                <div class="row">
                    <div className="col-6">
                      
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
                    <div className="col-6">
                   
                       
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


               {list && list.options && list.options.map((ele)=>{
                 return <>

                 <div class="list-group mt-2">
                        <button type="button" class="list-group-item list-group-item-action " aria-current="true">
                            { ele.cat[0]?.TITLE } ---------------- 
                            { ele.difficulty[0]?.DIFFICULTY_LEVEL } -- {ele.QUIZ_TIMESPAN}  
                        </button>                    
                        <span onClick ={()=>   UpdateTimeStamp(ele._id)}> remove </span>
                     </div>
                 </>
               })}
                   


                </div>
        </div>


    </>
  )
}

export default QuizTimeSpanCrud