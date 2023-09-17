import React from 'react'

const Description = () => {
  return (
    <div className='lg:w-10/12 w-full  mx-auto'>
        <div className='lg:flex lg:flex-row sm:flex-col  mx-auto w-9/12 lg:max-w-maxContent sm:w-full  justify-between mt-20
                gap-8 sm:p-6'>

                    <div className='lg:text-5xl text-4xl lg:w-[50%] w-full  font-semibold  mb-4'>
                       <p className='lg:w-[70%] w-full text-[#1e1e2f]'> Get the skillis you need for a Job that is in demand</p>
                    </div>

                    <div className='flex flex-col  gap-8 lg:w-[50%] w-[90%]'>
                        <div className='lg:text-2xl text-xl font-light text-[#1e1e2f] lg:w-[80%] w-full'>
                        The modern labor market dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                        </div>
                    </div>

                </div>
    </div>
  )
}

export default Description