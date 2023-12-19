import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import Button from "../Button";

const HeroSection = () => {
  const opacity = 0;
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1 0", "1.1 1"],
  });

  return (
    <section className="w-full h-[100%]">
      {/* <marquee
        className=" font-bold tracking-tight h-[80px] text-2xl bg-orange-600 flex justify-center items-center"
        behavior="scroll"
        direction="left"
      >
        <div>
          <ul className="flex  gap-10">
            <li className="text-white ">Fast & Secure Transaction </li>
            <li className="text-black ">
              Payments Infrastructure for Internet
            </li>
            <li className="text-white ">Online Payments </li>
            <li className="text-black ">Fast & Secure Transaction </li>
          </ul>
        </div>
      </marquee>
 */}
      <motion.div
        // ref={ref}
        // style={{scale:scrollYProgress,
        // opacity:scrollYProgress}}

        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        className="hero-container"
      >
        <div className="item item1">
          <div className="btn"></div>
          <div className="heading-text">
            <section className="flex justify-start items-center flex-col">
              <h1 className="text-3xl md:text-6xl mb-10 mt-6 font-bold text-white text-center">
                Fast & secure transaction
              </h1>
              <div className="btn flex justify-evenly w-[300px]  ">
                <Link to="/signup">
                  <Button text="Get Started" />
                </Link>
                <Link className=" " to="/login">
                  <Button text="Login" />
                </Link>
              </div>
              <div className="text">
                <p className=" p-10 text-xl  text-white font-bold tracking-normal  max-w-[500px] ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  quis explicabo omnis ratione vero laboriosam dolores veniam
                  provident ullam aliquam!
                </p>
              </div>
            </section>
          </div>
        </div>
        <div className="item item2   h-[100%] w-[100%] bg-orange-600 ">
          <div className="features   min-h-[300px]">
            <h1 className="text-2xl rounded-t-lg capitalize py-1  z-40 w-full  text-white  bg-orange-700 ">
              Features
            </h1>
            <div className="feature1 feature">
              DETAILED REPORTING AND ANALYTICS
            </div>
            <div className="feature2 feature">RECONCILIATION TOOLS</div>
            <div className="feature3 feature">
              MASS PAYOUTS AND BULK SETTLEMENTS
            </div>
            <div className="feature4 feature">CUSTOMIZABLE DASHBOARDS</div>
            <div className="feature5 feature">DEVELOPER DOCUMENTATION</div>
            <div className="feature6 feature">24/7 CUSTOMER SUPPORT</div>
          </div>
        </div>
        <div className="item item3">item3</div>
      </motion.div>

      {/* <motion.div
        ref={ref}
        style={{ scale: scrollYProgress, opacity: scrollYProgress }}
        className="hero-bg min-h-[100vh]     "
      >
        <h1 className=" lg:text-8xl text-6xl font-bold text-center capitalize pt-20 ">
          For <span className="text-orange-600">Best</span> Experience
        </h1>

        <br />
        <h2 className="text-3xl font-bold  text-end pr-10  ">
          Start with{" "}
          <span className="text-orange-600 font-bold text-4xl">uniqpay</span>
        </h2>

        <div className="hero-content max-h-[100px]  max-w-2xl ">
          <img
            className="h-[100%] w-[100%] rounded-full  "
            src="/Uniqpay.gif"
            alt=""
          />
        </div>
      </motion.div> */}
    </section>
  );
};

export default HeroSection;
