import React from 'react'
import Image from 'next/image'
import specs from "@/public/specs.png"
const Spec = () => {
  return (
 <section id="Specs" className=' py-20'>
    <div className="w-full h-full flex justify-center items-center ">
    <span className=' font-bold 
              text-transparent md:text-8xl text-7xl 
              bg-clip-text bg-gradient-to-t
               from-gray-500 to-Black md:ml-10 m-0'>
                 Specs</span> 
    </div>
    <div  className='flex  md:flex-row flex-col items-center justify-center '>
        <div className='flex md:items-end items-center w-full py-5 px-10  justify-center flex-col '>
                        
           <div className='flex flex-col md:text-left text-center 
             md:mx-10 mx-0 my-5 md:items-start items-center 
             md:justify-starts justify-center'>  
        <h1 className='
             text-white text-sm md:text-left text-center
            '>Connection
            </h1><span className='
             text-gray-400 md:text-left text-center
             max-w-sm text-xs'>Bluetooth v5.2t</span>
           </div>
                          
           <div className='flex flex-col md:mx-20 mx-0 my-5 md:text-left text-center  md:items-start items-center 
             md:justify-starts justify-center'>  
        <h1 className='
             text-white text-sm md:text-left text-center
            '>Battery
           
            </h1><span className='
             text-gray-400 md:text-left text-center
             max-w-sm text-xs'> Duration 40h</span>
           </div>
                          
           <div className='flex flex-col  md:mx-20 mx-0  md:text-left text-center my-5 md:items-start items-center 
             md:justify-starts justify-center'>  
        <h1 className='
             text-white text-sm md:text-left text-center
            '>Load
            
            </h1><span className='
             text-gray-400 md:text-left text-center
             max-w-sm text-xs'>Fast charge 4.2-AAC</span>
           </div>
                          
           <div className='flex flex-col  md:mx-5 mx-0 my-5 md:text-left text-center md:items-start items-center 
             md:justify-starts justify-center'>  
        <h1 className='
             text-white text-sm md:text-left text-center
            '>Microphone
           
            </h1><span className='
             text-gray-400 md:text-left text-center
         text-xs max-w-[150px]'> Supports Apple Siri
             and Google</span>
           </div>





       
            
        </div>
    
        <div className='flex flex-col w-full  md:items-start items-center justify-center '>
          <div className='w-[256px]  h-[277px]'>
     <Image  src={specs} alt="HeadPhone-specs" width={65 } height={103} 
     className="w-[256px]  h-[277px]"/>
          </div>


</div>
        </div>
 </section>
  )
}

export default Spec