import React from 'react'

import Image from 'next/image'
import Home from "@/public/home.png"
import sponsorOne from "@/public/sponsor1.png"
import sponsorTwo from "@/public/sponsor2.png"
import sponsorThree from "@/public/sponsor3.png"
import sponsorFour from "@/public/sponsor4.png"
const Hero = () => {
  return (
    <section id="Home" className='w-full h-full '>

    <div  className='flex  md:flex-row-reverse flex-col-reverse items-center justify-center '>
        <div className='flex md:items-start w-full py-5 px-5  lg:px-5 p-0  justify-center flex-col '>
        <span className=' font-bold 
              text-transparent md:text-8xl text-7xl 
              bg-clip-text bg-gradient-to-t
               from-gray-500 to-Black md:ml-10 m-0'>
                 On ear</span>
              <h1 className='font-bold
             text-white lg:text-6xl text-4xl
              max-w-sm   '> 
              Beats 3</h1>
              <span className='
             text-white my-5
              max-w-sm font-semibold '> 
              Overview</span>
              <p className=' text-gray-400  font-poppins
              md:max-w-md max-w-lg my-3 leading-loose'>Enjoy award-winning
              Beats sound with wireless
               listening freedom and a sleek, 
               streamlined design with comfortable padded earphones, 
               delivering first-rate playback.</p>
                <div className=' flex md:flex-row flex-col
             
                   md:items-center items-center justify-between'>
                <button className="h-10 w-48 rounded-2xl
                 bg-black md:mx-5 mx-0 my-5 flex flex-row items-center
                  justify-center border border-white group  v4"> <p className="
                   text-white group-hover:text-black ">Add to Bag</p>
   <p className='text-white font-bold mx-5 text-lg group-hover:text-black'>$299</p>

   </button>


      
   </div>
        </div>
    
        <div className='flex
          relative flex-col w-full  h-full
          md:items-end items-center justify-end '>
            <div className=' w-[256px]  md:h-[599px] h-[300px] '>
<Image src={Home} alt='headPhone-home-section' priority={true}
 className='imgclass  md:right-[-1rem] right-[20%]   w-[256px]  sm:h-[599px]'
 width={102} height={681}/>
</div>


</div>
</div>
    <div className='grid gap-10 items-center justify-center max-w-5xl mx-auto
     lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
      <div className='flex items-center justify-center'>
      <Image src={sponsorOne} alt='Apple-logo-1' width={60} height={2} className='w-[128px]
       h-[45px]'/>
           </div>
      <div className='flex items-center justify-center'>
       <Image src={sponsorTwo} alt='Spotify-logo' width={60} height={2} className='w-[128px]
       h-[38px]'/>
       </div>
       <div className='flex items-center justify-center'>
          <Image src={sponsorThree} alt='Amazon-logo' width={60} height={2} className='w-[128px]
       h-[39px]'/>
       </div>
       <div className='flex items-center justify-center'>
          <Image src={sponsorFour} alt='Youtube-logo' width={60} height={2} className='w-[128px]
       h-[28px]'/>
       </div>

    </div>
 </section>
  )
}

export default Hero