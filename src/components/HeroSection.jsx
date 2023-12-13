import React from "react";

const HeroSection = () => {
  return (
    <div className="h-[100vh]    ">
      <h1 className=" lg:text-8xl text-6xl font-bold text-center capitalize pt-20 ">
        For <span className="text-orange-600">Best</span> Experience 
      </h1>

      <br />
     <h2 className="text-3xl font-bold  text-end pr-10  ">
        Start with <span className="text-orange-600 font-bold text-4xl" >uniqpay</span> right now 
      </h2>

      <div className="hero-content max-h-[100px]  max-w-2xl ">
        <img className="h-[100%] w-[100%] rounded-full "  src="/Uniqpay.gif" alt="" />
      </div>
    </div>
  ); 
};

export default HeroSection;
