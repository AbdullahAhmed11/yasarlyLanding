import React from 'react'

const Trending = () => {
  return (
    <div className='w-full h-[500px] bg-[#F4F8FB] mb-[150px] md:mt-[1px]  p-4 '>
        <div className='flex flex-col gap-5 mt-[60px]'> 
        <h2 className='text-[#000000] text-[20px] font-bold'>Trending Courses</h2>
        <p className='text-[#000000] text-[20px] font-medium'>Learn more about what ‘App’ can offer in these articles</p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mt-5'>
            <div>
                <img src="./Frame.png" alt="img" className='w-full h-[300px]'/>
            </div>
            <div>
                <img src="./Frame.png" alt="img" className='w-full h-[300px]'/>
            </div>
            <div>
                <img src="./Frame.png" alt="img" className='w-full h-[300px]'/>
            </div>
            <div>
                <img src="./Frame.png" alt="img" className='w-full h-[300px]'/>
            </div>
        </div>
    </div>
  )
}

export default Trending