import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [togglemenu, setTogglemenu] = useState(false);

  const togglebtn = (e) => {
    e.preventDefault();
    setTogglemenu((prev) => !prev);
  };

  return (
    <nav className="z-50 p-3   shadow-gray-900  mb-[300px] fixed w-full bg-black text-orange-500 flex justify-between items-center">
      <Link to="/">
        <div className=" h-[40px]">
          {/* <img className="h-[100%]" src="/logo.png" alt="logo" /> */}
          <h1 className="font-bold text-2xl">
            <span className="text-white">Benak</span>
            <span className="pay">Pay</span>
          </h1>
        </div>
      </Link>

      <ul className=" gap-3 hidden lg:flex ">
        <li className=" ">
          <Link className=" " to="/">
            Home
          </Link>
          <span className="material-symbols-outlined"></span>
        </li>
        <li>
          <Link lassName=" " to="/login">
            Sign In
          </Link>
        </li>
        <li>
          <Link lassName=" " to="/signup">
            Create account
          </Link>
        </li>

        <li>
            Company
           <div className="devapilist    ">
            <ul>
              <li>
                <Link lassName=" " to="/aboutus">
                  About
                </Link>
              </li>
              <li>Services</li>
              <li>
                <Link lassName=" " to="/support">
                  Support
                </Link>
              </li>
              <li>Contact</li>
            </ul>
          </div>
        </li>
        <li lassName="devapi">
          <Link lassName=" " to="/dashboard">
            Developer API
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
          Profile
        </h1>
        {togglemenu ? (
          <>
            <div className="z-50 leading-8 shadow-lg shadow-orange-900	 p-5 rounded-lg fixed w-[200px] ml-[-150px] mt-[6px] bg-gray-900 ">
              <li onClick={togglebtn} className="hover:bg-black w-full">
                <Link className=" " to="/">
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

              <li onClick={togglebtn} className="hover:bg-black w-full">
                <Link lassName=" " to="/aboutus">
                  Company
                </Link>
                <div className="devapilist    ">
                  <ul>
                    <li>About</li>
                    <li>Services</li>
                    <li>
                      <Link lassName="" to="/support">
                        Support
                      </Link>
                    </li>
                    <li>Contact</li>
                  </ul>
                </div>
              </li>
              <li onClick={togglebtn} className="hover:bg-black w-full">
                <Link lassName=" " to="/dashboard">
                  Developer API
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
