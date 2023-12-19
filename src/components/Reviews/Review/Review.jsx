import React from 'react'
import "../Reviews.css";

const Review = ({imgpath,imgtext,reviewtext,reviewname}) => {
  return (
    <div className="itemm itemm1">
      <div className=" text-center">
        <div className="reviews-img relative h-[80px] w-[80px] m-auto  ">
          <img
            className="absolute h-[100%] w-[100%] mt-[-40px] rounded-full border border-red-800 "
            src={imgpath}
            alt={imgtext}
          />
        </div>
        <h1 className="font-bold captialize text-center  m-auto mt-[-40px]   ">
         {reviewname}
        </h1>
        <p className="text-justify p-10">
         {reviewtext}
        </p>
      </div>
    </div>
  );
}

export default Review
