import React,{useState} from 'react'
 import { Link } from 'react-router-dom'
const Navbar = () => {


 const [togglemenu, setTogglemenu] =useState(false)

 const togglebtn =(e)=>{
  e.preventDefault()
    setTogglemenu((prev)=>!prev)
  } 

  return (
    <nav className='z-50 p-3  shadow-lg shadow-red-900  mb-[300px] fixed w-full bg-black text-orange-500 flex justify-between items-center' >
      <Link to='/'>
      {/* <h1 className='font-bold text-3xl text-white'> <span className='text-orange-500 font-bold text-5xl  rotate-45 '>U</span>niqpay</h1> */}
      <div className=' h-[40px]'>

      <img className='h-[100%]' src="/logo.png" alt="logo" />
      </div>
      </Link>

      <ul className=' gap-3 hidden lg:flex '>
        <li className=''>
            <Link className='no-underline hover:underline' to='/' >Home</Link>
        </li>
        <li>
            <Link to='/user' >Admin</Link>
        </li>
        <li>
            <Link to='/login' >Login</Link>
        </li>
        <li>
            <Link to='/proflie' >Profile</Link>
        </li>
        <li>
            <Link to='/dashboard' >Dashboard</Link>
        </li>
      </ul>
      <ul className='block lg:hidden'>
        <h1 onClick={togglebtn} className='cursor-pointer' >Profile</h1>
{togglemenu?<>
  <div className='z-50 leading-8 shadow-lg shadow-orange-900	 p-5 rounded-lg fixed w-[200px] ml-[-150px] mt-[6px] bg-gray-900 '>

<li onClick={togglebtn} className='hover:bg-black w-full'>
    <Link  className=' ' to='/' >Home</Link>
</li>
<li onClick={togglebtn} className='hover:bg-black w-full'>
    <Link to='/user' >Admin</Link>
</li>
{/* <li onClick={togglebtn} className='hover:bg-black w-[100%]'>
    <Link className='' to='/login' >Login</Link>
</li> */}
<li onClick={togglebtn} className='hover:bg-black w-full'>
    <Link to='/proflie' >Profile</Link>
</li>
<li onClick={togglebtn} className='hover:bg-black w-full'>
    <Link to='/dashboard' >Dashboard</Link>
</li>
</div>

</>:null}

      </ul>
    </nav>
  )
}

export default Navbar
