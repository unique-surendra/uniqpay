import React from 'react'
import HeroSection from '../components/HeroSection'
import Card from '../components/Card'
import Team from '../components/Team'
import Parterners from '../components/Parterners'
 
const HomeScreen = () => {

  return (
<div className='  mt-6  h-[100%] w-full bg-white '>
{/* bg-gradient-to-r from-zinc-400 to-red-200 */}
 

<HeroSection/>


  
  <section>


 <hr  className='text-black h-1 bg-blue-950 ' />
    <h1 className=' text-center text-3xl font-extrabold pt-8   ' >Our Services</h1>

<div className=" w-full  md:pt-[200px] pt-[300px] m-auto  pb-[200px] flex flex-wrap gap-10 ">

<Card heading="Service 1" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, ipsa eius!" btnText="Explore more" />
<Card heading="Service 2" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, ipsa eius!" btnText="Explore more" />
<Card heading="Service 3" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, ipsa eius!" btnText="Explore more" />

</div>
  </section>



  <section>
 <Parterners/>

  </section>

  <section>

    <Team/>
    
    </section>

</div>
  )
}

export default HomeScreen
