import React from "react";
import "./Carousel.css";
const Carousel = () => {
  return (
    <section>
      <h1 className="text-center  mb-1 text-3xl p-10 ">Partners</h1>
      <hr />

      <div className="carousel-company min-h-[20vh] bg-orange-100 flex gap-10">
        <div className="company-1">
          <img src="/partners/axisbank.png" alt="" />
        </div>
        <div className="company-1">
          <img src="/partners/eazykerd.png" alt="" />
        </div>
        <div className="company-1">
          <img src="/partners/fast.png" alt="" />
        </div>
        <div className="company-1">
          <img src="/partners/eazykerd.png" alt="" />
        </div>
        <div className="company-1">
          <img src="/partners/yesbank.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Carousel;
