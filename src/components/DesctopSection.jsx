import React from 'react'
import { BsAndroid2 } from "react-icons/bs";
import { FaWindows } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
const DesctopSection = () => {
  return (
<div className='w-full flex items-center justify-between'>
  <div className='w-1/2 h-[500px] bg-[#24D1EC] relative'>
    {/* First Image */}
    <img src='./macbook.png' alt="macbook" className='ml-[150px] mt-[30px]' />
    
    {/* Second Image (top-right of the first image) */}
    <div className='absolute top-0 right-[-180px]'>
      <img src='./Course.png' alt="course" />
    </div>
  </div>

  {/* Second column */}
  <div className='w-1/2 flex flex-col gap-5 ml-[150px]'>
    <h2 className='text-[25px] text-[#09C1E0] font-medium'>always Ready to study</h2>
    <h2 className='text-[35px] text-[#093343] font-bold'>Choose your best Device<br/> To study</h2>
    <p lassName='text-[30px] text-[#165D74] font-normal'>Now, you can select your suitable Device to study</p>
    <div className='flex items-center gap-5'>
                <button className='flex items-center justify-center gap-3 w-[90px] h-[60px] bg-[#23B54A] rounded-md '>
                <BsAndroid2 className='text-[#fff]'/> 
                </button>
                <button className='flex items-center justify-center gap-3 w-[90px] h-[60px] bg-[#141414] rounded-md '>
                <BsApple className='text-[#fff]'/>
                </button>
                <button className='flex items-center justify-center gap-3 w-[90px] h-[60px] bg-[#00A3FF] rounded-md '>
                <FaWindows className='text-[#fff]'/> 
                </button>
            </div>
  </div>
</div>

  )
}

export default DesctopSection