import React, { useContext, useEffect } from 'react'

import { CookiesProvider } from 'react-cookie';

function CustomCookieProvider({children}) {

  return (   
      <CookiesProvider>
       {children}
      </CookiesProvider>
    ) 
    
}

export default CustomCookieProvider