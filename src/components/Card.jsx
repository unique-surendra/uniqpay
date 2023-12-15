import React, { useRef } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { motion, useScroll } from "framer-motion";

const Card = ({ heading, text, btnText }) => {
  const opacity = 0;
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1 0", "1.1 1"],
  });

  return (
    <motion.div
      ref={ref}
      style={{ scale: scrollYProgress, opacity: scrollYProgress }}
      // initial={{ opacity: 0, scale: 0.1 }}
      // animate={{ opacity: 1, scale: 1 }}
      // transition={{ duration: 0.9 }}

      className=" shadow-orange-900 shadow-2xl rounded-xl p-10 w-[400px] m-auto bg-white h-[100%]  "
    >
      <h1 className="text-center bg-orange-700 text-white font-bold text-2xl capitalize  ">
        {heading}
      </h1>
      <div className="card h-[300px] w-[300px]   ">
        <img className="w-[100%] h-[100%] " src="/Uniqpay.gif" alt="card" />
      </div>
      <p className="text-gray-700 z-30  ">{text}</p>
      <div className="flex justify-center">
        <Link to="/login">
          <Button text={btnText} />
        </Link>
      </div>
    </motion.div>
  );
};

export default Card;
