import React,{useRef} from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Card from "../components/Card";
// import Team from "../components/OurProducts";
 import Reviews from "../components/Reviews";
import Carousel from "../components/Companies Carousel/Carousel";
import AboutUs from "../components/AboutUs";
import OurProducts from "../components/OurProducts";
import { Link } from "react-router-dom";
// import imgurl from './public/backbg.jpg'

import "./HomeScreen.css"
import BackToTop from "../components/BackToTop/BackToTop";


const HomeScreen = () => {
 const ref = useRef()

 const goToSections = (e)=>{
  e.preventdefault()
  window.location = "#reviews";
}
  
 const handleScrollToTop = () => {
   window.scroll({ top: 0, behavior: "smooth" });
 };


  return (
    <section>
      <div className="  mt-6  h-[100%] w-full bg-white ">
        {/* bg-gradient-to-r from-zinc-400 to-red-200 */}

        <HeroSection />

        <section>
          <hr className="text-black bg-blue-950 " />
          <h1 className=" text-center mb-5 text-3xl  pt-8   ">Our Services</h1>
          <hr className="" />

          <div className=" w-full  md:pt-[200px] pt-[300px] m-auto  pb-[200px] flex flex-wrap gap-10 ">
            <Card
              heading="Service 1"
              text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, ipsa eius!"
              btnText="Explore more"
            />
            <Card
              heading="Service 2"
              text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, ipsa eius!"
              btnText="Explore more"
            />
            <Card
              heading="Service 3"
              text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, ipsa eius!"
              btnText="Explore more"
            />
          </div>
        </section>

        <section>{/* <Parterners/> */}</section>

        <section>
          <Carousel />
        </section>
        <section>
          <h1 className="text-center  mb-100 text-3xl p-10 "> Our Products</h1>
          <hr />

          <OurProducts
            imgtext1="img1"
            imgpath1="/pro1.png"
            abouttext1=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Error fugit
            dignissimos nostrum doloribus a nulla deleniti ducimus iure. Minus,
            nemo exercitationem odit similique sunt est, deserunt aperiam iste
            excepturi culpa impedit dolorum quaerat at, rerum autem repellendus
            natus quis cumque laudantium. Incidunt sunt ipsum cum repudiandae
            vero voluptas aut quos qui unde. Reiciendis, nulla, incidunt
            suscipit explicabo dolores, tempora ducimus obcaecati consequatur
          orro quidem perspiciatis illum
            sint a modi incidunt soluta enim, amet voluptates. Excepturi quam
            necessitatibus voluptatem rerum placeat? Aliquid laboriosam harum
            iste molestias optio itaque modi magni similique voluptates numquam?"
            imgtext2="img2"
            imgpath2="/pro2.jpg"
            abouttext2=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Error fugit
          dignissimos nostrum doloribus a nulla deleniti ducimus iure. Minus,
            nemo exercitationem odit similique sunt est, deserunt aperiam iste
            excepturi culpa impedit dolorum quaerat at, rerum autem repellendus
            natus quis cumque laudantium. Incidunt sunt ipsum cum repudiandae
            vero voluptas aut quos qui unde. Reiciendis, nulla, incidunt
            suscipit explicabo dolores, tempora ducimus obcaecati consequatur
          orro quidem perspiciatis illum
            sint a modi incidunt soluta enim, amet voluptates. Excepturi quam
            necessitatibus voluptatem rerum placeat? Aliquid laboriosam harum
            iste molestias optio itaque modi magni similique voluptates numquam?"
          />
          <OurProducts
            imgtext1="img1"
            imgpath1="/backbg.jpg"
            abouttext1=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Error fugit
            dignissimos nostrum doloribus a nulla deleniti ducimus iure. Minus,
            nemo exercitationem odit similique sunt est, deserunt aperiam iste
            excepturi culpa impedit dolorum quaerat at, rerum autem repellendus
            natus quis cumque laudantium. Incidunt sunt ipsum cum repudiandae
            vero voluptas aut quos qui unde. Reiciendis, nulla, incidunt
            suscipit explicabo dolores, tempora ducimus obcaecati consequatur
          orro quidem perspiciatis illum
            sint a modi incidunt soluta enim, amet voluptates. Excepturi quam
            necessitatibus voluptatem rerum placeat? Aliquid laboriosam harum
            iste molestias optio itaque modi magni similique voluptates numquam?"
            imgtext2="img2"
            imgpath2="/backbg1.jpg"
            abouttext2=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Error fugit
          dignissimos nostrum doloribus a nulla deleniti ducimus iure. Minus,
          nemo exercitationem odit similique sunt est, deserunt aperiam iste
          excepturi culpa impedit dolorum quaerat at, rerum autem repellendus
            natus quis cumque laudantium. Incidunt sunt ipsum cum repudiandae
            vero voluptas aut quos qui unde. Reiciendis, nulla, incidunt
            suscipit explicabo dolores, tempora ducimus obcaecati consequatur
          orro quidem perspiciatis illum
            sint a modi incidunt soluta enim, amet voluptates. Excepturi quam
            necessitatibus voluptatem rerum placeat? Aliquid laboriosam harum
            iste molestias optio itaque modi magni similique voluptates numquam?"
          />
        </section>
        <section id="aboutcompany">
          <AboutUs />
        </section>
        <section
          id="reviews"
          ref={ref}
          onChange={goToSections}
          className="min-h-[100vh] "
        >
          <Reviews />
          {/* <hr /> */}
        </section>
        <section>{/* <Team /> */}</section>
      </div>

      <BackToTop />
    </section>
  );
};

export default HomeScreen;
