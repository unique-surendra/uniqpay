 import "./Members.css"
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";


const Members = () => {
  const opacity = 0;
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["1 0", "1.1 1"],
  });

  return (
    <div className=" min-h-[100vh] w-full  ">
      <div className="w-full text-center ">
        <h1 className="text-black text-3xl font-bol w-full ">
          Reviews
        </h1>
      </div>

      <motion.div
        ref={ref}
        style={{ scale: scrollYProgress, opacity: scrollYProgress }}
        className="members"
      >
        <div className="itemm itemm1">
          <div className="text-center">
            <h1>item 1</h1>
          </div>
        </div>
        <div className="itemm itemm2">
          <div className="text-center">
            <h1>item 2</h1>
          </div>
        </div>
        <div className="itemm itemm3">
          <div className="text-center">
            <h1>item 3</h1>
          </div>
        </div>
        <div className="itemm itemm4">
          <div className="text-center">
            <h1>item 4</h1>
          </div>
        </div>
        <div className="itemm itemm5">
          <div className="text-center">
            <h1>item 5</h1>
          </div>
        </div>
        <div className="itemm itemm6">
          <div className="text-center">
            <h1>item 6</h1>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Members;
