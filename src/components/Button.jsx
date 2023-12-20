import React from 'react'

const Button = ({text}) => {
  return (
    <>
      <button className="bg-orange-700 hover:bg-orange-500  hover:shadow-sm hover:shadow-orange-500 text-white text-bold px-5 py-2 text-xl rounded-md  mt-5 m-auto capitalize   ">
        {text}
      </button>
    </>
  );
}

export default Button
