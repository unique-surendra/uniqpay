import "./Reviews.css";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
// import Review from "./Review/Review";

const Reviews = () => {
  const opacity = 0;
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1 0", ".9 1"],
  });

  return (
    <div className=" min-h-[100vh] w-full  ">
      <div className="w-full text-center ">
        <h1 className="text-black text-3xl font-bol w-full ">Reviews</h1>
      </div>
      <hr />

      <motion.div
        ref={ref}
        style={{ scale: scrollYProgress, opacity: scrollYProgress }}
        className="members pb-[100px]"
      >
        <div className="itemm itemm1">
          <div className=" text-center">
            <div className="reviews-img relative h-[80px] w-[80px] m-auto  ">
              <img
                className="absolute h-[100%] w-[100%] mt-[-40px] rounded-full border border-red-800 "
                src="/backbg.jpg"
                alt="item1"
              />
            </div>
            <h1 className="font-bold captialize text-center  m-auto mt-[-40px]   ">
              Name XYZ
            </h1>
            <p className="text-justify p-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur debitis quam praesentium aliquid porro! Non fugit
              cupiditate animi, magni fuga deleniti! Sequi dicta assumenda sint
              incidunt. Eum deleniti veritatis reprehenderit.
            </p>
          </div>
        </div>

        <div className="itemm itemm1">
          <div className=" text-center">
            <div className="reviews-img relative h-[80px] w-[80px] m-auto  ">
              <img
                className="absolute h-[100%] w-[100%] mt-[-40px] rounded-full border border-red-800 "
                src="/backbg.jpg"
                alt="item1"
              />
            </div>
            <h1 className="font-bold captialize text-center  m-auto mt-[-40px]   ">
              Name of XYZ
            </h1>
            <p className="text-justify p-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur debitis quam praesentium aliquid porro! Non fugit
                favriote candidate in this entire
              school
            </p>
          </div>
        </div>

        <div className="itemm itemm1">
          <div className=" text-center">
            <div className="reviews-img relative h-[80px] w-[80px] m-auto  ">
              <img
                className="absolute h-[100%] w-[100%] mt-[-40px] rounded-full border border-red-800 "
                src="/backbg.jpg"
                alt="item1"
              />
            </div>
            <h1 className="font-bold captialize text-center  m-auto mt-[-40px]   ">
              Name XYZ
            </h1>
            <p className="text-justify p-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur debitis quam praesentium aliquid porro! Non fugit
              cupiditate animi, magni fuga deleniti! Sequi dicta assumenda sint
              incidunt. Eum deleniti veritatis reprehenderit.
            </p>
          </div>
        </div>

        <div className="itemm itemm1">
          <div className=" text-center">
            <div className="reviews-img relative h-[80px] w-[80px] m-auto  ">
              <img
                className="absolute h-[100%] w-[100%] mt-[-40px] rounded-full border border-red-800 "
                src="/backbg.jpg"
                alt="item1"
              />
            </div>
            <h1 className="font-bold captialize text-center  m-auto mt-[-40px]   ">
              Name of XYZ
            </h1>
            <p className="text-justify p-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur debitis quam praesentium aliquid porro! Non fugit
              cupiditate animi, magni fuga deleniti! Sequi dicta assumenda sint
              incidunt. Eum deleniti veritatis reprehenderit.
            </p>
          </div>
        </div>

        <div className="itemm itemm1">
          <div className=" text-center">
            <div className="reviews-img relative h-[80px] w-[80px] m-auto  ">
              <img
                className="absolute h-[100%] w-[100%] mt-[-40px] rounded-full border border-red-800 "
                src="/backbg.jpg"
                alt="item1"
              />
            </div>
            <h1 className="font-bold captialize text-center  m-auto mt-[-40px]   ">
              Name XYZ
            </h1>
            <p className="text-justify p-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur debitis quam praesentium aliquid porro! Non fugit
              cupiditate animi, magni fuga deleniti! Sequi dicta assumenda sint
              incidunt. Eum deleniti veritatis reprehenderit.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Reviews;
