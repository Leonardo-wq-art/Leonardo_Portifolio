import Image from "next/image"
import discount from "@/public/discount.png"
const Discount = () => {
  return (
    <div className='flex 
     md:flex-row-reverse flex-col items-center rounded-3xl justify-center py-10 my-20
      lg:mx-auto mx-5 max-w-[915px] bg-slate-800 '>
        <div className="	w-[256px] h-[176px]">
      <Image src={discount} alt="discount-Headphone" className="w-[256px] h-[176px]"
       width={126} height={46}/>
        </div>

<div className="flex flex-col items-center justify-center">
<h1 className=" text-white font-bold text-xl md:text-left text-center max-w-[200px]">Immerse yourself in
your music</h1>
<p className=" text-gray-300   max-w-[200px] mr-3 py-5">Get it now, up to 50% off.</p>
<div className=' flex md:flex-row flex-col
             w-full flex-1
             md:items-start my-5 items-center justify-start'>
                <button className="px-4 py-4 rounded-2xl group
                 bg-black border border-white 
   v4"> <p className=" text-white group-hover:text-black font-bold">Book Now</p>

   </button>

   </div>
</div>
    </div>
  )
}

export default Discount