import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { v1rouer } from '../../actions/root_action'

function ContentList() {

    let params = useParams()

     
    
    const [ fd,setFd]=  useState({
        list:{ name:"list" , value:"" , error:"",  message:"" , options:[], total:0}
    })
    
    const [ pageProps , setPageProps]   = useState({
             "pn":1 ,
            "pageSize":10
    })
    
    const getContentList=async ()=>{
        
        let res = await v1rouer.post(`admin/get-content-by-users/${params?.contentId}`, pageProps )
          if(res?.result?.data) {
            setFd(p=>({
                 ...p, ['list']:{...p['list'], options:res?.result?.data ,total:res?.result?.count}
            }))
          }
         return res?.result?.data
    }

    useEffect(()=>{
        getContentList()
    }, [])
  

    
    useEffect(()=>{
        getContentList()
    }, [pageProps.pn])

  
const onPageChange = (pn)=>{
    setPageProps(p=>({
        ...p, pn:pn
    }))
} 
    const { list}  = fd 
  

  return <>
    
  <div className='d-flex justify-content-center align-content-center h-100 mt-5'>
  <ul class="list-group w-70 ">
{list.options && list.options.length>0 &&
    list.options.map((ele,i)=>{
         return   <> 
          
          <div className='d-flex justify-content-around '>
            
            <li class="list-group-item ">{ele.QS}-{ele.IS_ACTIVE}</li>
            <a href=""> </a>
         
            <a class="page-link" href={`/access-rights/questions-list/edit/${ele._id}`}>  Edit  </a>      
          
          </div>
         
         </> 
    })
  }
</ul>


  </div>





  <div className='d-flex justify-content-center align-content-center h-100 mt-5'>

  <nav aria-label="Page navigation example">
  <ul class="pagination">
  
   {new Array(Math.ceil(list.total/pageProps.pageSize)).fill(undefined).map((ele , i )=>{
      return  <>
      <li class={`page-item ${(i+1)==pageProps.pn?"active":""}  ` } onClick={()=>onPageChange(i+1)} >     
        <a class="page-link" href="#">  { i+1} </a>
       </li>      </>
   })  }
     </ul>
</nav>
</div>

  </>
}

export default ContentList