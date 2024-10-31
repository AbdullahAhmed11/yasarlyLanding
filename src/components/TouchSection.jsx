import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";

const TouchSection = () => {
  return (
    <div className='w-full h-[500px] bg-[#00B8D9] flex flex-col md:flex-row md:items-center justify-between'>
        <div className='md:w-1/2 w-full p-4 flex flex-col gap-5'>
            <h2 className='text-[#093343] text-[40px] font-bold'>Keep in touch</h2>
            <p className='text-[#FFFFFF] font-medium text-[25px]'>Contact the administrator via WhatsApp to inquire or<br/> purchase courses.</p>
            <button
                className='w-[200px] h-[65px] rounded-full bg-[#089B55] text-white flex gap-2 items-center justify-center'
            >
                
              <IoLogoWhatsapp className='text-[20px]'/>  Contact With Admin</button>
        </div>
        <div className='w-1/2 hidden md:block'>
            <img src="./touch.png" alt="img" className='w-[500px] h-[300px]' />
        </div>
    </div>
  )
}

export default TouchSection