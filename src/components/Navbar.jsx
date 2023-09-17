import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../Assets/logo.svg";
import {GiHamburgerMenu} from "react-icons/gi";


const Navbar = () => {
   
    const navigate = useNavigate();
   
  
    return (
      <div className="w-full bg-white pb-4 lg:pt-4 pt-2">
        <div className="lg:w-10/12 md:full mx-auto">
          <div className="flex justify-between items-center mt-8">
            <div className="flex gap-x-36 justify-between items-center">
              <div>
                {/* Use Link from react-scroll for smooth scrolling */}
                <Link to="/" smooth={true} duration={500}>
                  <img src={logo} alt="" />
                </Link>
              </div>
  
              <nav className="lg:block hidden">
                <ul className="flex gap-x-6 text-[#1e1e2f] text-lg">
                  <li className="relative z-100">
                    <Link to="findPassion" smooth={true} duration={500}>
                      <div className="relative z-10 group transition-all duration-500">
                        find passion
                        <div className="absolute w-full top-4 -z-10 h-1/3 group-hover:bg-[#97C680] transition-transform duration-300 transform scale-y-0 group-hover:scale-y-100 origin-bottom"></div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="categories" smooth={true} duration={500}>
                      <div className="relative z-10 group transition-all duration-500">
                        categories
                        <div className="absolute w-full top-4 -z-10 h-1/3 group-hover:bg-[#97C680] transition-transform duration-300 transform scale-y-0 group-hover:scale-y-100 origin-bottom"></div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="skills" smooth={true} duration={500}>
                      <div className="relative z-10 group transition-all duration-500">
                        skills
                        <div className="absolute w-full top-4 -z-10 h-1/3 group-hover:bg-[#97C680] transition-transform duration-300 transform scale-y-0 group-hover:scale-y-100 origin-bottom"></div>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to="customer" smooth={true} duration={500}>
                      <div className="relative z-10 group transition-all duration-500">
                        customer
                        <div className="absolute w-full top-4 -z-10 h-1/3 group-hover:bg-[#97C680] transition-transform duration-300 transform scale-y-0 group-hover:scale-y-100 origin-bottom"></div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
  
            <div className="lg:flex hidden gap-x-6 items-center">
              <button>
                <div className="relative z-10 group mr-3 text-lg transition-all duration-500">
                  log in
                  <div className="absolute w-full top-4 -z-10 h-1/3 group-hover:bg-[#97C680] transition-transform duration-300 transform scale-y-0 group-hover:scale-y-100 origin-bottom"></div>
                </div>
              </button>
  
              <button>
                <div className="relative bg-black text-white px-5 py-2 rounded-full z-10 group transition-all duration-500">
                  Free trial
                  <div className="absolute w-full top-0 left-0 right-0 bottom-0 p-1 rounded-full -z-10 h-full group-hover:bg-[#97C680] transition-transform duration-300 transform scale-y-0 group-hover:scale-y-100 origin-bottom"></div>
                </div>
              </button>
            </div>
  
            <div className="lg:hidden md:block cursor-pointer">
              <GiHamburgerMenu onClick={() => navigate("navbarModal")} />
            </div>
          </div>
        </div>

        
      </div>
    );
  };
  
  export default Navbar;
  