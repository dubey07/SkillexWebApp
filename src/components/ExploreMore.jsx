import React from 'react';
import logo1 from "./../Assets/logo 1.svg";
import logo2 from "./../Assets/logo 2.svg";
import logo3 from "./../Assets/logo 3.svg";
import video from "./../Assets/video.mp4";

const timeline = [
    {
        logo: logo1,
        title: "Leadership",
        description: "Fully committed to the success company"
    },
    {
        logo: logo2,
        title: "Responsiblity",
        description: "employess will always be our top priority"
    },
    {
        logo: logo3,
        title: "Flexiblity",
        description: "The ability to switch is an important skills"
    },

]

const ExploreMore = () => {
    return (
        <div className='bg-[#F8F4F1] '>
            <div >
                <div className='flex lg:flex-row gap-6 flex-col-reverse justify-between items-cente  mx-auto w-10/12  mt-16 mb-32'>

                    <div className='flex flex-col lg:w-[30%] w-full sm:mt-10'>
                        {
                            timeline.map((i, index) => (

                                <div className='flex flex-col sm:gap-2 '>
                                    <div className='flex gap-4 items-center'>

                                        <div className='bg-white p-3 rounded-full flex  items-center justify-center'>
                                            <img src={i.logo} alt="" />
                                        </div>

                                        <div className='flex flex-col '>
                                            <h3 className='font-bold text-richblack-800'>{i.title}</h3>
                                            <p className='w-[70%]'>{i.description}</p>
                                        </div>
                                    </div>

                                    <div className=''>
                                        {
                                            index < timeline.length - 1 ? (<div className='lg:h-14 h-10 border-slate-600   ml-6 w-[1px] border border-dashed'>
                                            </div>) : (<div></div>)
                                        }
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                    <div className="relative lg:w-fit w-full h-fit shadow-blue-200 shadow-[0px_0px_30px_0px]">
                        <video muted loop autoPlay className='rounded-2xl '>
                            <source src={video}/>
                        </video>

                        <div className="absolute lg:-top-12 -top-8 lg:right-24 right-5 max-w-fit  bg-[#97c680] flex text-[#1e1e2f] 
                        uppercase  gap-2 lg:p-4 p-2">
                            {/* Section 1 */}
                            <div className="lg:flex hidden gap-3 items-center ">
                                <h1 className="text-3xl font-bold ">10</h1>
                                <h1 className=" text-sm lg:w-[10%]">
                                    Years experiences
                                </h1>
                            </div>
                            
                            <div className='lg:opacity-100 opacity-0 h-10  w-[1px] border border-slate-800'></div>

                            {/* Section 2 */}
                            <div className="flex gap-2 items-center">
                                <h1 className="text-3xl font-bold ">250</h1>
                                <h1 className=" text-sm ">
                                    types of courses
                                </h1>
                            </div>

                            
                        </div>
                    </div>

                </div>
            </div >
        </div>
    )
}

export default ExploreMore