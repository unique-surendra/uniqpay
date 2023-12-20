import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [togglemenu, setTogglemenu] = useState(false);
  // const [login, setLogin] = useState(false)
  const [togglemenuicon, setTogglemenuicon] = useState(false);

  const togglebtn = (e) => {
    e.preventDefault();
    setTogglemenu((prev) => !prev);
 
  };

  const togglebtnicon = (e) => {
    e.preventDefault();
    setTogglemenuicon((prev) => !prev);
 
  };

  const handleScrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="z-50 p-3   shadow-gray-900  mb-[300px] fixed w-full bg-black text-orange-500 flex justify-between items-center">
      <Link to="/">
        <div className=" h-[40px]">
          {/* <img className="h-[100%]" src="/logo.png" alt="logo" /> */}
          <h1 onClick={handleScrollToTop} className="font-bold text-2xl">
            <span className="text-white">Benak</span>
            <span className="pay">Pay</span>
          </h1>
        </div>
      </Link>

      <ul className=" gap-3 hidden lg:flex ">
        <li onClick={handleScrollToTop} className=" ">
          <Link className=" " to="/">
            Home
          </Link>
          <span className="material-symbols-outlined"></span>
        </li>
        <li>
          <Link onClick={handleScrollToTop} lassName=" " to="/login">
            Sign In
          </Link>
        </li>
        <li>
          <Link onClick={handleScrollToTop} lassName=" " to="/signup">
            Create account
          </Link>
        </li>

        <li>
          <Link to="/aboutus">
            Company
            <span class="material-symbols-outlined">expand_more</span>
          </Link>
          <div className="devapilist">
            <ul>
              <li>
                <Link onClick={handleScrollToTop} lassName=" " to="/aboutus">
                  About
                </Link>
              </li>
              <li>Services</li>
              <li>
                <Link onClick={handleScrollToTop} lassName=" " to="/support">
                  Support
                </Link>
              </li>
              <li>
                <Link
                  onClick={handleScrollToTop}
                  lassName=""
                  to="/careers
"
                >
                  Careers
                </Link>
              </li>
              <li>Contact</li>
            </ul>
          </div>
        </li>
        <li lassName="devapi">
          <Link lassName=" " to="/dashboard">
            Developer API
            <span class="material-symbols-outlined">expand_more</span>
          </Link>
          <div className="devapilist    ">
            <ul>
              <li>api 1</li>
              <li>api 2</li>
              <li>api 3</li>
              <li>api 4</li>
              <li>api 5</li>
            </ul>
          </div>
        </li>
      </ul>
      <ul className="block lg:hidden">
        <h1 onClick={togglebtn} className="cursor-pointer">
          {togglemenuicon ? (
            <span onClick={togglebtnicon} class="material-symbols-outlined">
              close
            </span>
          ) : (
            <span onClick={togglebtnicon} class="material-symbols-outlined">
              menu
            </span>
          )}
        </h1>
        {togglemenu ? (
          <>
            <div className="z-50 leading-8 shadow-lg shadow-orange-900	 p-5 rounded-lg fixed w-[200px] ml-[-150px] mt-[6px] bg-gray-900 px-4 ">
              <li onClick={togglebtn} className="hover:bg-black w-full">
                <Link onClick={handleScrollToTop} className=" " to="/">
                  Home
                </Link>
              </li>

              <li onClick={togglebtn} className="hover:bg-black w-full">
                <Link lassName=" " to="/login">
                  Sign In
                </Link>
              </li>
              <li onClick={togglebtn} className="hover:bg-black w-full">
                <Link lassName=" " to="/signup">
                  Create Account
                </Link>
              </li>

              <li onClick={togglebtn} className=" hover:bg-black w-full">
                <Link lassName=" " to="/aboutus">
                  Company
                  <span class="material-symbols-outlined">expand_more</span>
                </Link>
                <div className="devapilist    ">
                  <ul>
                    <li>
                      <Link
                        onClick={handleScrollToTop}
                        lassName=" "
                        to="/aboutus"
                      >
                        About
                      </Link>
                    </li>
                    <li>Services</li>
                    <li>
                      <Link
                        onClick={handleScrollToTop}
                        lassName=""
                        to="/support"
                      >
                        Support
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleScrollToTop}
                        lassName=""
                        to="/careers
"
                      >
                        Careers
                      </Link>
                    </li>
                    <li>Contact</li>
                  </ul>
                </div>
              </li>
              <li onClick={togglebtn} className="hover:bg-black w-full">
                <Link lassName=" " to="/dashboard">
                  Developer API
                  <span class="  material-symbols-outlined">expand_more</span>
                </Link>
                <div className="devapilist ">
                  <ul className=" ">
                    <li>api 1</li>
                    <li>api 2</li>
                    <li>api 3</li>
                    <li>api 4</li>
                    <li>api 5</li>
                  </ul>
                </div>
              </li>
              <li onClick={togglebtn} className="hover:bg-black w-full">
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </div>
          </>
        ) : null}
      </ul>
    </nav>
  );
};

export default Navbar;
