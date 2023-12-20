import React from "react";
import "./OurProducts.css";

const OurProducts = ({
  imgpath1,
  imgtext1,
  abouttext1,
  imgpath2,
  imgtext2,
  abouttext2,
}) => {
  return (
    <>
      <div>
        <section className="products">
          <div className="product">
            <div className="prduct-img">
              {/* <h1 className="text-center p-5 font-bold ">Product Heading</h1> */}
              <img src={imgpath1} alt={imgtext1} />
              <div className="ward-product"></div>
            </div>
          </div>
          <div className="abutproduct">
            <h1 className=" pt-5 pb-1 font-bold ">About Product </h1>
            <hr className="mb-3"/>
            <p className="p-5">{abouttext1}</p>
          </div>
        </section>
        <section className="products">
          <div className="abutproduct">
            <h1 className=" pt-5 pb-1 font-bold ">About Product </h1>
            <hr className="mb-3"/>
            <p className="p-5">{abouttext2}</p>
          </div>
          <div className="product">
            <div className="prduct-img">
              {/* <h1 className="text-center p-5 font-bold ">Product Heading</h1> */}
              <img src={imgpath2} alt={imgtext2} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OurProducts;
