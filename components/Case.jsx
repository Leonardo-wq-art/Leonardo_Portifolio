import React from 'react'
import Image from 'next/image'
import CaseOne from "@/public/case.png"
const Case = () => {
  return (
   <section id='Case'>
      <div className="w-full h-full flex justify-center items-center ">
    <span className=' font-bold 
              text-transparent md:text-8xl text-7xl 
              bg-clip-text bg-gradient-to-t
               from-gray-500 to-Black md:ml-10 m-0'>
                Case</span> 
    </div>
       <div  className='flex  md:flex-row-reverse flex-col items-center justify-center '>
        <div className='flex md:items-start items-center w-full py-5 px-10  justify-center flex-col '>
         
        
              <p className=' text-gray-300  
             md:max-w-xs  my-3 md:text-left text-center'>With a comfortable
              and adaptable case so that you can store 
             it whenever you want, and keep your durability forever..</p>
                <div className=' flex md:flex-row flex-col
             
             md:items-start my-5 items-center justify-center'>
                <button className="px-4 py-4 rounded-2xl group
                 bg-black border border-white 
   v4"> <p className=" text-white group-hover:text-black font-bold">Book Now</p>

   </button>

   </div>
        </div>
    
        <div className='flex flex-col w-full  md:items-end items-center justify-center '>
          <div className=''>
     <Image src={CaseOne} alt="case" width={182} height={254} className='w-auto h-auto'     />
          </div>


</div>
        </div>
   </section>
  )
}

export default Case