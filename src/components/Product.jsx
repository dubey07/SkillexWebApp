import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ballon from "./../Assets/ballon.webp";
import bricks from "../Assets/bricks.webp";
import diary from "../Assets/diary.webp";
import pencil from "../Assets/pencil.webp";
import { HiMiniArrowUpRight } from "react-icons/hi2"

const categories = [
    "All Categories",
    "Entertainment",
    "Lifestyle",
    "Writing",
    "Business",
    "Food"
]

const Product = () => {

    const [category, setCategory] = useState(categories[0])
    return (
        <div id='categories' className='lg:w-11/12 mx-auto mt-10'>
            <div className='flex flex-col items-center'>
                <h1 className='text-4xl font-medium text-[#1e1e2f] text-center'>
                    Unlimited access to 100+ instructors<span className='text-[#7ab15f]'>.</span>
                </h1>

                <div className='mt-14 flex gap-x-7 lg:text-xl text-base text-[#323132] items-center lg:w-max w-full'>
                    {
                        categories.map((i, index) => (
                            <div key={index}
                                className={`${i === category ? "border-b-2 border-slate-600 text-[#222222] font-medium" :
                                    "hover:border-b-2 border-slate-400"} min-w-fit`}>
                                <Link onClick={() => setCategory(i)}>{i}</Link>
                            </div>
                        ))
                    }
                </div>

                <div className='grid lg:grid-cols-4 grid-cols-2 p-6 mt-10 gap-x-5 gap-y-5'>
                    <div >
                        <div className='relative group '>

                            <img src={ballon} alt="" className='rounded-lg lg:aspect-auto sm:aspect-square sm:bg-cover lg:h-max lg:w-full w-52 h-52' />

                            <div className='bg-white rounded-full  absolute top-4 z-100 right-4 sm:opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300  group-hover:animation-fall'>
                                <HiMiniArrowUpRight fontSize={30} />
                            </div>

                            <h2 className='text-xl text-[#323132] font-medium mt-1 group-hover:text-[#97C680]'>Sales Marketing</h2>
                            <p>4 month</p>
                        </div>

                    </div>

                    <div>
                        <div className='relative group '>
                            <img src={bricks} alt="" className='rounded-lg lg:aspect-auto sm:aspect-square sm:bg-cover lg:h-max lg:w-full w-52 h-52' />
                            <div className='bg-white rounded-full  absolute top-4 z-100 right-4 sm:opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300  group-hover:animation-fall'>
                                <HiMiniArrowUpRight fontSize={30} />
                            </div>

                            <h2 className='text-xl text-[#323132] font-medium mt-1 group-hover:text-[#97C680]'>Data analytics</h2>
                            <p>3 month</p>
                        </div>

                    </div>
                    <div>
                        <div className='relative group '>
                            <img src={diary} alt="" className='rounded-lg lg:aspect-auto sm:aspect-square sm:bg-cover lg:h-max lg:w-full w-52 h-52' />
                            <div className='bg-white rounded-full  absolute top-4 z-100 right-4 sm:opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300  group-hover:animation-fall'>
                                <HiMiniArrowUpRight fontSize={30} />
                            </div>

                            <h2 className='text-xl text-[#323132] font-medium mt-1 group-hover:text-[#97C680]'>Copywriting pro</h2>
                        <p>2 month</p>
                        </div>
                        
                    </div>
                    <div>
                        <div className='relative group '>
                            <img src={pencil} alt="" className='rounded-lg lg:aspect-auto sm:aspect-square sm:bg-cover lg:h-max lg:w-full w-52 h-52' />
                            <div className='bg-white rounded-full  absolute top-4 z-100 right-4 sm:opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-800  group-hover:animation-fall'>
                                <HiMiniArrowUpRight fontSize={30} />
                            </div>

                            <h2 className='text-xl text-[#323132] font-medium mt-1 group-hover:text-[#97C680]'>Design art</h2>
                        <p>4 month</p>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;