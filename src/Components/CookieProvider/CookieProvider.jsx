import React, { createContext } from 'react'

import { useCookies } from 'react-cookie';
import { constants } from '../../constant';



export let CookieContext =createContext(null)
function CookieProvider({children}) {

    return (
    <>
{/* 
    <CookieContext.Provider value={{cookies ,setCookie} }>
         {children}
    </CookieContext.Provider> */}
       
    </>
  )
}

export default CookieProvider