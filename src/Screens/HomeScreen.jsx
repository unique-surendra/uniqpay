import React from 'react'
import HeroSection from '../components/HeroSection'


const HomeScreen = () => {
  return (
<div className='mt-6  h-[100%] w-full bg-gradient-to-r from-zinc-400 to-red-200 '>

<HeroSection/>
<div className=" w-full  md:pt-[400px] pt-[300px] m-auto  pb-10  bg-orange-200 flex flex-wrap gap-10 ">
  <div className=" shadow-orange-900 shadow-2xl rounded-xl p-10 w-[400px] m-auto  bg-white h-[500px]">
  <h1>card 1</h1>
  <div className="card">
    <img src="/Uniqpay.gif" alt="card" />
  </div>
</div>
<div className=" shadow-orange-900 shadow-2xl rounded-xl p-10 w-[400px] m-auto bg-white h-[500px]">
  <h1>card 2</h1>
  <div className="card">
    <img src="/Uniqpay.gif" alt="card" />
  </div>
</div>
<div className=" shadow-orange-900 shadow-2xl rounded-xl p-10 w-[400px] m-auto bg-white h-[500px]">
  <h1>card 3</h1>
  <div className="card">
    <img src="/Uniqpay.gif" alt="card" />
  </div>
</div>


  </div>
</div>
  )
}

export default HomeScreen
