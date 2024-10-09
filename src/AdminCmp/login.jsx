import React, { useContext, useState } from 'react'
import { v1rouer } from '../actions/root_action'
import { constants, getUserObj } from '../constant'
import { CookieContext } from '../Components/CookieProvider/CookieProvider'
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

function Login() {

    // const { cookies ,setCookie  }  = useContext(CookieContext)
    const [cookies, setCookie] = useCookies ([constants.btcode_live_cd_key , constants.btcode_live_cd]);

    const navigate = useNavigate();
    const [fd , setFd ]  = useState({
        username: { name: "username", value: "", options:[], error: "", required: false  },
        password: { name: "password", value: "", options:[], error: "", required: false  },
      }) 

      const setState = ( e)=>{
         const { name , value}  = e.target
             setFd(p=>{
             return {
              ...p , [name]:{ ...p[name] , value : value }    
             }
        })
    
        }
    

        const callLoginAsAdmin = async (payload)=>{
            let res = await v1rouer.post('login-user', payload  )
            return res?.result
           }

           

           const onSubmit =async()=>{
            let payload = { username: fd.username.value , password:fd.password.value }
              let login =await callLoginAsAdmin(payload)
              console.log("login",login)
              
              if(login?.data){
                 // setting cookies      
               setCookie(constants.btcode_live_cd_key, login?.data?.token , { path: '/' } );
               setCookie(constants.btcode_live_cd, getUserObj(login?.data , ['token',"_v"]) ,{ path: '/' }  );
               navigate('/home')
            }
           }
      
        


  return (
    <>
     <div className='d-flex justify-content-center align-items-center'  style={{width:"100%", height:"100vh"}}>

  <div>
     
        <div class="form-group my-2">
            <input 
            type="text"
            onChange={setState}
             name={fd.username.name}
             value={fd.username.value}
             class="form-control"  placeholder="Email or username" />
        </div>
        <div class="form-group">
            <input type="password"
            name={fd.password.name}
            value={fd.password.value}
            onChange={setState}
             class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div class="form-group form-check">
        </div>    
        <button  onClick={onSubmit} class="btn btn-primary btn-block" style={{width:"100%"}}>Amdin Login</button>
  </div>
     </div>
   </>
  )
}

export default Login