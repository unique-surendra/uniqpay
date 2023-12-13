import React from 'react'
import {Outlet,Navigate} from "react-router-dom"

const PrivateRoute = () => {

    let login = false
  return (
    login?  <Outlet /> : <Navigate replace to='/login' />
      
    
  )
}

export default PrivateRoute
