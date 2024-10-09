import React, { useContext, useEffect } from 'react'
import { CookieContext } from './Components/CookieProvider/CookieProvider'
import { useCookies } from 'react-cookie';
import { constants } from './constant';
import { useNavigate } from 'react-router-dom';

function PrivateWrapper({children}) {
    const [cookies, setCookie] = useCookies ([]);
    const navigate = useNavigate();

 
   useEffect(()=>{
      if(!cookies[constants.btcode_live_cd_key]) {
        navigate('/')
      }
   },[])
    
   if(cookies[constants.btcode_live_cd_key])
    return (
    <div>{children}</div>
    )

}

export default PrivateWrapper