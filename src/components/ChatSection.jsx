import React from 'react'
import { FaCheck } from "react-icons/fa6";

const ChatSection = () => {
  return (
    <div className='w-full flex flex-col md:flex-row items-center justify-between'>
        <div className='w-1/2 h-[600px] flex items-center  justify-center bg-[#24D1EC] relative'>

<img src="./Group.png" className='z-10 h-[650px]'  alt="pixel"/>

{/* Second Image (top-right of the first image) */}
<div className='absolute top-[-60px] left-[330px]'>
<img src='./chat.png ' className='h-[600px]' alt="course" />
</div>
</div>
    <div className='w-1/2 p-4 flex flex-col gap-5'>
    
    <h2 className='text-[25px] text-[#09C1E0] font-medium'>High Quality Courses</h2>
    <h2 className='text-[35px] text-[#093343] font-bold'>All you Need in One Place</h2>
    <div className='flex gap-5 items-center mt-5'>
      <div className='flex items-center justify-center rounded-full w-[30px] h-[30px] border-[#00BB6C] text-[#00BB6C] border-2'>
          <FaCheck/>
      </div>
      <p className='text-[20px] text-[#093343] font-medium'>Best Experience for all Students</p>
    </div>
    <div className='flex gap-5 items-center mt-5'>
      <div className='flex items-center justify-center rounded-full w-[30px] h-[30px] border-[#00BB6C] text-[#00BB6C] border-2'>
          <FaCheck/>
      </div>
      <p className='text-[20px] text-[#093343] font-medium'>Our instructors are industry leaders</p>
    </div>
    <div className='flex gap-5 items-center mt-5'>
      <div className='flex items-center justify-center rounded-full w-[30px] h-[30px] border-[#00BB6C] text-[#00BB6C] border-2'>
          <FaCheck/>
      </div>
      <p className='text-[20px] text-[#093343] font-medium'>subject matter experts committed to your success.</p>
    </div>
</div>


</div>
  )
}

export default ChatSection