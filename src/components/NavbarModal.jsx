import React from 'react'
import { Link } from 'react-router-dom'

const NavbarModal = () => {
    return (
        <div className='md:block lg:hidden'>
            <div className='w-full flex flex-col  justify-between items-start mt-20 text-[#1e1e2f]'>
                <div className='w-full h-full'>
                    <div className='border-b-[1px] w-[100%]  border-slate-300 pb-4 pt-4'><Link>Find passion</Link></div>
                    <div className='border-b-[1px] w-[100%]  border-slate-300 pb-4 pt-4 '><Link>Categories</Link></div>
                    <div className='border-b-[1px] w-[100%]  border-slate-300 pb-4 pt-4'><Link>Skills</Link></div>
                    <div className='pt-4'><Link>customer</Link></div>
                </div>

            </div>

            <div className=' fixed bottom-14 gap-10 place-items-end border-t-[1px] border-slate-600 w-full p-1'>
                <div className='flex gap-x-5 mt-4'>
                <button className='border border-black px-7 py-1 rounded-full'>
                    Log in
                </button>

                <button>
                    <div className='relative bg-black text-white px-5 py-2 rounded-full z-10 group  transition-all duration-500'>
                        Free trial
                        <div className='absolute  w-full top-0 left-0 right-0 bottom-0 p-1 rounded-full -z-10 h-full group-hover:bg-[#97C680] transition-transform duration-300 transform scale-y-0 group-hover:scale-y-100 origin-bottom'></div>
                    </div>
                </button>
                </div>
            </div>
        </div>
    )
}

export default NavbarModal