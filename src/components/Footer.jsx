import React from 'react'
import logo from "./../Assets/logo.svg";
import { Link } from 'react-router-dom';
import Flogo from "./../Assets/FooterLogo.svg";
import {LiaFacebookF} from "react-icons/lia";
import {BsBehance} from "react-icons/bs";
import {BiLogoLinkedin} from "react-icons/bi";
import {BiLogoInstagram} from "react-icons/bi";
import {BiLogoDribbble} from "react-icons/bi";
import {AiFillHeart} from "react-icons/ai";


const Footer = () => {
    return (
        <div className='mt-20' >
            <div className='flex lg:flex-row flex-col gap-10  justify-between lg:w-10/12 lg:mx-auto lg:h-52 lg:items-center ml-6 mb-10'>

                <div>
                    <img src={logo} alt="" />
                </div>

                <div className='flex gap-10'>

                    <div className='flex flex-col gap-4'>
                        <Link to={"/"}>
                            <div className='relative z-10 group w-fit  transition-all duration-500 text-[#1e1e2f] text-lg'>
                                find passion
                                <div className='absolute  w-full top-4 -z-10 h-1/3 group-hover:bg-[#97C680] transition-transform duration-300 transform scale-y-0 group-hover:scale-y-100 origin-bottom'></div>
                            </div>
                        </Link>

                        <Link to={"/"}>
                            <div className='relative z-10 group w-fit  transition-all duration-500 text-[#1e1e2f] text-lg '>
                                skills
                                <div className='absolute w-full top-4 -z-10 h-1/3 group-hover:bg-[#97C680] transition-transform duration-300 transform scale-y-0 group-hover:scale-y-100 origin-bottom'></div>
                            </div>
                        </Link>
                    </div>

                    <div className='flex flex-col gap-4'>

                        <Link to={"/"}>
                            <div className='relative z-10 group w-fit  transition-all duration-500 text-[#1e1e2f] text-lg'>
                                categories
                                <div className='absolute w-full top-4 -z-10 h-1/3 group-hover:bg-[#97C680] transition-transform duration-300 transform scale-y-0 group-hover:scale-y-100 origin-bottom'></div>
                            </div>
                        </Link>

                        <Link to={"/"}>
                            <div className='relative z-10 group w-fit transition-all duration-500 text-[#1e1e2f] text-lg'>
                                customer
                                <div className='absolute  w-full top-4 -z-10 h-1/3 group-hover:bg-[#97C680] transition-transform duration-300 transform scale-y-0 group-hover:scale-y-100 origin-bottom'></div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='flex flex-col gap-4'> 

                    <h3 className='text-2xl font-medium'>Join our Community</h3>

                    <div className='flex border border-slate-600 w-fit'>
                        <input type="email" placeholder='enter your email' className='p-5 text-black text-sm'/>
                       
                        <button>
                        <div className='relative bg-green-500  p-5  z-10 group  transition-all duration-500'>
                          Go
                            <div className='absolute  w-full top-0 left-0 right-0 bottom-0 p-1  -z-10 h-full group-hover:bg-[#FEBA88] transition-transform duration-300 transform scale-y-0 group-hover:scale-y-100 origin-bottom'></div>
                        </div>
                    </button>
                    </div>
                </div>

            </div>

            <div className=' border-t-2 border-slate-500 w-11/12 flex lg:flex-row 
            flex-col-reverse lg:w-10/12 mx-auto justify-between items-center gap-4 pt-3'>

                <div className='flex gap-2 items-center lg:mt-8 '>
                    <img src={Flogo} alt="" />
                    <p className='text-[#1e1e2f] text-base'>2021 Halo Lab. All rights reserved</p>
                </div>

                <div className='flex gap-5 '>

                <div className='border-slate-500 border-[1px] rounded-full h-fit w-fit hover:bg-black hover:text-white'>
                    <LiaFacebookF className='text-2xl m-1'/>
                </div>

                <div className='border-slate-500 border-[1px] rounded-full h-fit w-fit hover:bg-black hover:text-white'>
                    <BsBehance className='text-2xl m-1'/>
                </div>

                <div className='border-slate-500 border-[1px] rounded-full h-fit w-fit hover:bg-black hover:text-white'>
                    <BiLogoLinkedin className='text-2xl m-1'/>
                </div>

                <div className='border-slate-500 border-[1px] rounded-full h-fit w-fit hover:bg-black hover:text-white'>
                    <BiLogoInstagram className='text-2xl m-1'/>
                </div>

                <div className='border-slate-500 border-[1px] rounded-full h-fit w-fit hover:bg-black hover:text-white'>
                    <BiLogoDribbble className='text-2xl m-1'/>
                </div>
                </div>
            </div>

            <div className='bg-[#1e1e2f] w-full mx-auto  text-white mt-8'>
                <div className='flex justify-center items-center p-3 gap-1'>
                    <AiFillHeart className='text-yellow-300 lg:text-2xl text-lg heart'/>
                    
                    <p> 
                         <span className='lg:text-[18px] sm:text-base'><u>Like</u></span>
                       {" "} & {" "}
                        <span className='lg:text-[18px] sm:text-base'><u>Follow</u></span>
                        <span className='lg:text-[18px] sm:text-base text-slate-400'> from you. New free to use projects from us.</span>
                        </p>
                </div>
            </div>
        </div>
    )
}

export default Footer