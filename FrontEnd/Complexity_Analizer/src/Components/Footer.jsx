import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='  w-full p-8 text-white sm:px-20'>
            
            <div className='border-0 border-white rounded-lg h-full w-full bg-gray-900'>
                <p className='py-4 px-2 sm:'>Common Complexity Classes</p> 

                <div className='p-6 flex flex-col gap-6 md:grid md:grid-cols-3  '>
                    <div className="box h-28 w-full border-2 border-white flex flex-col justify-center items-start px-4 bg-black ">
                        <p className=''> <span className='text-green-500'>0(1)</span> Constant</p>
                        <p className='text-gray-400'>Best Possible Performance</p>
                    </div>

                    <div className="box h-28 w-full border-2 border-white flex flex-col justify-center items-start px-4 bg-black ">
                        <p className=''> <span className='text-green-500'>0(log n)</span> Logarithmic</p>
                        <p className='text-gray-400'>Best Possible Performance</p>
                    </div>

                    <div className="box h-28 w-full border-2 border-white flex flex-col justify-center items-start px-4 bg-black ">
                        <p className=''> <span className='text-blue-500'>0(n)</span> Linear</p>
                        <p className='text-gray-400'>Best Possible Performance</p>
                    </div>

                    <div className="box h-28 w-full border-2 border-white flex flex-col justify-center items-start px-4 bg-black ">
                        <p className=''> <span className='text-yellow-300'>0(n log n)</span> Constant</p>
                        <p className='text-gray-400'>Best Possible Performance</p>
                    </div>

                    <div className="box h-28 w-full border-2 border-white flex flex-col justify-center items-start px-4 bg-black ">
                        <p className=''> <span className='text-red-300'>0(n<sup>2</sup>)</span> Quadratic</p>
                        <p className='text-gray-400'>Best Possible Performance</p>
                    </div>

                    <div className="box h-28 w-full border-2 border-white flex flex-col justify-center items-start px-4 bg-black ">
                        <p className=''> <span className='text-red-300'>0(2^n)</span> Exponential</p>
                        <p className='text-white'>Best Possible Performance</p>
                    </div>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Footer