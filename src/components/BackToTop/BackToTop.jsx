import React, { useEffect, useState } from "react";

const BackToTop = () => {

  const [backTop, setBackTop] = useState(false);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackTop(true);
      } else {
        setBackTop(false);
      }
    });
  }, []);

  return (
    <>
      {backTop && (
        <button
          className=" text-white text-5xl flex items-center justify-center rounded-sm z-50 fixed right-0 top-[80vh] bg-orange-700 h-[50px] w-[50px]"
          onClick={scrollTop}
        >


          ^
        </button>
      )}
    </>
  );
};

export default BackToTop;
