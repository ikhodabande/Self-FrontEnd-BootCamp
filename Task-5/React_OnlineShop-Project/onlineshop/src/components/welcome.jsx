import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const Welcome=()=> {
  const [showWelcome , setShowWelcome] = useState()

  useEffect(()=>{
    const data = localStorage.getItem("show_app_intro")
    setShowWelcome(JSON.parse(data) ?? true)
  
  },[])

  const onHideWelcome=()=>{
     setShowWelcome(false)
     localStorage.setItem("show_app_intro" , JSON.stringify(false))
  }

  return (
    <>


    {showWelcome && (
    <div className="container">
      <div className=" bg-primary text-white my-3 ">
         <FontAwesomeIcon
         icon={faClose}
         style={{float:"right", margin:"5px"}}
         onClick={onHideWelcome}
          />
          <div className="p-4">Welcome</div>
      </div>
    </div>

    )}

    </>
  )
}

export default Welcome