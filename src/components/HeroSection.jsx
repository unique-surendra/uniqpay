import React, { useRef } from "react";

import {motion,useScroll} from "framer-motion"
 

const HeroSection = () => {
  const opacity= 0;
  const ref = useRef()

 const{ scrollYProgress}  = useScroll({
  target:ref,
  offset:["1 0","0.9 1"],
})

  return (
    <motion.div 
    ref={ref}
    style={{scale:scrollYProgress,
    opacity:scrollYProgress}}
 
    className="hero-bg min-h-[100vh]     ">
      <h1 className=" lg:text-8xl text-6xl font-bold text-center capitalize pt-20 ">
        For <span className="text-orange-600">Best</span> Experience 
      </h1>


     


    <br />
    <h2 className="text-3xl font-bold  text-end pr-10  ">
        Start with <span className="text-orange-600 font-bold text-4xl" >uniqpay</span>  
      </h2>



      <div className="hero-content max-h-[100px]  max-w-2xl ">
        <img className="h-[100%] w-[100%] rounded-full  "  src="/Uniqpay.gif" alt="" />
      </div>
    </motion.div>
  ); 
};

export default HeroSection;
