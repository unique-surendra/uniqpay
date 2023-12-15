import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-white' >
       <h1 className='text-3xl font-bold  text-center text-red-700 ' >Page not found...</h1>
       <br />
 <Link className='text-blue-600 text-2xl bg-stone-200 p-2 rounded-xl'  to="/">
 Go to home
 </Link>
     </div>
  )
}

export default Error
