import React from 'react'
import Image from "next/image";
import logo from "@/public/logo.png"

const Footer_Conter = () => {
  return (
    <>

    <div className='flex lg:flex-row flex-col items-center
     justify-between px-5 py-20'>
      <div className='w-[64px] h-[124px]'>            
       </div>

      <div className='flex flex-col lg:items-start items-center justify-center my-10'>
      <div className="w-[32px] h-[32px] ">
      
      <Image src={logo} alt="logo" width={15} height={15} className="w-[32px] h-[32px] " />
          </div>
      
      </div>
      <ul className='flex flex-col lg:items-start items-center my-5 justify-center'>
<li className='text-white font-bold text-xl'>About</li>
<li className="text-gray-100 my-2">About Us</li>
<li className="text-gray-100 my-2">Features</li>
<li className="text-gray-100 my-2">News</li>



</ul>


 
<ul className='flex flex-col lg:items-start my-5 items-center justify-center'>
<li className='text-white font-bold text-xl'>Our Services</li>
<li className="text-gray-100 my-2">Pricing</li>
<li className="text-gray-100 my-2">Discounts
</li>
<li className="text-gray-100 my-2">Shipping mode</li>



</ul>


<ul className='flex flex-col lg:items-start items-center my-5 justify-center'>
<li className='text-white font-bold text-xl my-2'>Our Company</li>
<li className="text-gray-100 my-2">Blog</li>
<li className="text-gray-100 my-2">
About us</li>
<li className="text-gray-100 my-2">
Our Mision</li>



</ul>

     </div>
     </>
  )
}

export default Footer_Conter