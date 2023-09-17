import React from 'react'
import image1 from "./../Assets/ban1.webp";
import image2 from "./../Assets/ban2.webp";
import image3 from "./../Assets/ban3.webp";
const Banner = () => {
    return (
        <div id='findPassion' className='bg-white pb-14 pt-8'>

            <div className='lg:w-10/12 mx-auto '>

                <div className='flex lg:flex-row flex-col relative gap-12'>

                    <div className='w-[30%] flex justify-center lg:pl-0 pl-16'>
                        <h1 className='lg:text-8xl text-6xl lg:mt-20 '>
                            Watch. Learn. Grow.
                        </h1>
                    </div>

                    <div className='flex gap-5'>
                        <div className='relative '>
                            <div className=''>
                                <img src={image1} alt="" className='rounded-2xl -z-10' />
                            </div>
                        </div>

                        <div className='relative lg:w-[40%]  h-full '>
                            <div cclassName="lg:w-30-percent w-full h-full relative " >
                                <img src={image2} alt="" className="lg:absolute inset-0 w-full h-full object-cover rounded-2xl" />
                            </div>
                        </div>

                        <div className='relative lg:w-[40%]   h-full '>
                            <div cclassName="lg:w-30-percent w-full h-full relative " >
                                <img src={image3} alt="" className="lg:absolute inset-0 w-full h-full object-cover rounded-2xl" />
                            </div>
                        </div>
                    </div>

                    <div className='lg:absolute z-50 bottom-20  flex border border-slate-600 w-fit'>
                        <input type="email" placeholder='enter your email' className='p-5 text-black text-2xl' />

                        <button>
                            <div className='relative bg-green-500  p-7  z-10 group  transition-all duration-500'>
                                Go
                                <div className='absolute  w-full top-0 left-0 right-0 bottom-0 p-1  -z-10 h-full group-hover:bg-[#FEBA88] transition-transform duration-300 transform scale-y-0 group-hover:scale-y-100 origin-bottom'></div>
                            </div>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner;