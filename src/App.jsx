 import React from 'react'
import {Outlet} from "react-router-dom"
import Navbar from "./components/Navbar"
 import Footer from './components/Footer'
 const App = () => {
   return (
     <>
       <Navbar/>
       <div className='pb-10' ></div>
       <Outlet/>
       <Footer/>
       
     </>
   )
 }
 
 export default App
 