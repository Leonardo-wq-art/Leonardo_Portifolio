import Image from "next/image"
import ProductOne from "@/public/product1.png"
import ProductTwo from "@/public/product2.png"
import ProductThree from "@/public/product3.png"
import ProductFour from "@/public/product4.png"
import ProductFive from "@/public/product5.png"

const Choise = () => {
  return (
 <section id="Products">
      <div className="w-full h-full py-20 flex justify-center items-center ">
    <span className=' font-bold max-w-md text-center
              text-transparent text-7xl 
              bg-clip-text bg-gradient-to-t px-3
               from-gray-500 to-Black md:ml-10 m-0'>
               Choose
Your Style</span> 
    </div>
  <div className='grid gap-10 items-center justify-center max-w-5xl mx-auto
     lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
      
       <div className='flex items-center justify-center '>
            <div className="bg-slate-900 flex flex-col items-center justify-center
        h-[180px] w-[200px] pb-16 rounded-3xl">
          <Image src={ProductOne} alt='Headphone-Black' width={48} height={91}
            className='w-[96px]
            h-[128px]'/>
            <div className="flex-row flex w-full">
            <div className="flex flex-col items-start justify-end mb-[-20px]
            mt-8 
            w-full">
                <h1 className="font-bold text-white mx-5 ">Black</h1>
                <span className="font-bold text-gray-300 mx-5">$249</span>
            </div>
            <div className="w-full items-end justify-end flex  ">
<div className="w-5 h-5 rounded-full bg-black hover:bg-white mx-5"></div>
            </div>
            </div>
            
            </div>
       </div>
     
       <div className='flex items-center justify-center '>
            <div className="bg-slate-900 flex flex-col items-center justify-center
        h-[180px] w-[200px] pb-16 rounded-3xl">
          <Image src={ProductTwo} alt='Sponsor-1' width={48} height={91}
            className='w-[96px]
            h-[128px]'/>
            <div className="flex-row flex w-full">
            <div className="flex flex-col items-start justify-end mb-[-20px]
            mt-8 
            w-full">
                <h1 className="font-bold text-white ml-5 ">Red Black</h1>
                <span className="font-bold text-gray-300 mx-5">$249</span>
            </div>
            <div className="w-full items-end justify-end flex  ">
<div className="w-5 h-5 rounded-full bg-black hover:bg-white mx-5"></div>
            </div>
            </div>
            
            </div>
       </div>
      
       <div className='flex items-center justify-center '>
            <div className="bg-slate-900 flex flex-col items-center justify-center
        h-[180px] w-[200px] pb-16 rounded-3xl">
          <Image src={ProductThree} alt='Headphone' width={48} height={91}
            className='w-[96px]
            h-[128px]'/>
            <div className="flex-row flex w-full">
            <div className="flex flex-col items-start justify-end mb-[-20px]
            mt-8 
            w-full">
                <h1 className="font-bold text-white ml-5 w-32">Night Black</h1>
                <span className="font-bold text-gray-300 mx-5">$249</span>
            </div>
            <div className="w-full items-end justify-end flex  ">
<div className="w-5 h-5 rounded-full bg-black hover:bg-white mx-5"></div>
            </div>
            </div>
            
            </div>
       </div>
              <div className='flex items-center justify-center '>
            <div className="bg-slate-900 flex flex-col items-center justify-center
        h-[180px] w-[200px] pb-16 rounded-3xl">
          <Image src={ProductFour} alt='Sponsor-1' width={48} height={91}
            className='w-[96px]
            h-[128px]'/>
            <div className="flex-row flex w-full">
            <div className="flex flex-col items-start justify-end mb-[-20px]
            mt-8 
            w-full">
                <h1 className="font-bold text-white mx-5 ">Blue</h1>
                <span className="font-bold text-gray-300 mx-5">$249</span>
            </div>
            <div className="w-full items-end justify-end flex  ">
<div className="w-5 h-5 rounded-full bg-black hover:bg-white mx-5"></div>
            </div>
            </div>
            
            </div>
       </div>
       <div className='flex items-center justify-center '>
            <div className="bg-slate-900 flex flex-col items-center justify-center
        h-[180px] w-[200px] pb-16 rounded-3xl">
          <Image src={ProductFive} alt='Sponsor-1' width={48} height={91}
            className='w-[96px]
            h-[128px]'/>
            <div className="flex-row flex w-full">
            <div className="flex flex-col items-start justify-end mb-[-20px]
            mt-8 
            w-full">
                <h1 className="font-bold text-white ml-5 w-32">Twilight gray</h1>
                <span className="font-bold text-gray-300 mx-5">$249</span>
            </div>
            <div className="w-full items-end justify-end flex  ">
<div className="w-5 h-5 rounded-full bg-black hover:bg-white mx-5"></div>
            </div>
            </div>
            
            </div>
       </div>
    </div>
 </section>
  )
}

export default Choise