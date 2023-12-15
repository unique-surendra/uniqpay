import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook,FaTwitter,FaInstagram,FaYoutube,FaLinkedin,FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='h-[100%] w-full bg-black text-white'>
      
   
<div className="links  ">
    <div className='flex  w-[80%] m-auto justify-around gap-2   flex-wrap  flex-col lg:flex-row '>

    <ul className='max-w-[400px] leading-8    mt-10 text-start   '>
        <li><p className='text-2xl text-orange-600' >About</p></li>
        <li className='hover:bg-black'> <Link to="/" >Support</Link></li>
        <li className='hover:bg-black'> <Link to="/" >Company</Link></li>
        <li className='hover:bg-black'> <Link to="/" >Privacypolicy</Link></li>
     </ul>
    <ul className='max-w-[400px] leading-8  mt-10  text-start  '>
        <li><p className='text-2xl text-orange-600' >Payments</p></li>
        <li> <Link to="/" >Payout</Link></li>
        <li> <Link to="/" >Paying</Link></li>
        <li> <Link to="/" >Collections</Link></li>
        <li> <Link to="/" >API Banking</Link></li>
     </ul>
    <ul className='max-w-[300px] leading-8  mt-10  text-start  '>
        <li><p className='text-2xl text-orange-600' >Contact us</p></li>
        <li> <h3  >Mobile No: +91 1010101010</h3></li>
        <li> <h3  >Email Us : uniqpayment@gmail.com</h3></li>
        <li className='leading-4 flex flex-wrap' > <h3  >Address: 
        </h3>
        <br />
        <p>
        Plot no. A, 40, Block A, Industrial Area, Sector 62, Noida, Uttar Pradesh - 201301

        </p>
        </li>
         
      </ul>
    </div>
</div>

<div className="social   shadow-lg shadow-gray-900  max-w-[400px] h-[200px]  leading-2   flex flex-wrap  m-auto mt-10 mb-10     justify-center items-center gap-5 ">


<Link className='text-pink-600 hover:pb-5  text-2xl hover:text-3xl   w-[20px]  ' to="/">
<FaInstagram/>
</Link>  

<Link  className='text-blue-800 hover:pb-5 text-2xl hover:text-3xl   w-[20px]   ' to="/">
<FaFacebook/>
 </Link>  
 <Link className='text-sky-700 hover:pb-5 text-2xl hover:text-3xl   w-[20px]  '  to="/">
<FaTwitter/>
 </Link>  
 <Link  className='text-red-700 hover:pb-5 text-2xl hover:text-3xl   w-[20px]  ' to="/">
 <FaYoutube/>
</Link>  
<Link  className='text-blue-500 hover:pb-5 text-2xl hover:text-3xl  w-[20px]   ' to="/">
<FaLinkedin/>
 </Link>  
 <Link className='text-white hover:pb-5 text-2xl hover:text-3xl  w-[20px]  '    to="/">
<FaGithub/>
 </Link>  
       
</div>


<div className="copyright text-center text-xs pb-7  ">
    <h6>Copyright &copy;2023 <span>All rights are reserved</span> </h6> 
     
    <p>Powerd by uniqpayment</p>
</div>

<div className='flex h-5 justify-evenly p-5 pb-8 text-xs' >
<span>Terms of Use</span>
<span>Privacy Policy</span>
<span>FQA</span>
<span>Cookie Policy</span>
</div>

</div>
    
  )
}

export default Footer
