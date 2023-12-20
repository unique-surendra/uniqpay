import React from "react";

const OutlinedButton = ({ text }) => {
  return (
    <>
      <button className=" border-2 border-orange-500 text-white rounded-md hover:bg-orange-500  hover:shadow-sm hover:shadow-orange-500   text-bold px-5 py-1 text-xl   mt-5 m-auto capitalize   ">
        {text}
      </button>
    </>
  );
};

export default OutlinedButton;
