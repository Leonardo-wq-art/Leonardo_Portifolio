
import Link from "next/link"
import Image from "next/image";
import logo from "@/public/logo.png"
import Icons from "./Icons";
const Navbar = () => {
 
  return (

    <nav className='  flex flex-row items-center justify-between max-w-5xl mx-auto p-5   '>

  <div className="flex flex-row items-center justify-center ">
    <div className="w-[32px] h-[32px] ">
      
<Image src={logo} alt="logo-Beats3" width={32} height={32} className="w-[32px] h-[32px] " />
    </div>
  </div>
  <ul className="md:flex hidden text-slate-700  
   flex-row items-center justify-center gap-10">




    <li className=" underline-animation text-white font-bold">
        <Link href="#Home">Home</Link>
    </li>
    <li className="underline-animation text-white font-bold">
      <Link href="#Specs">Specs</Link>
    </li>

    <li className="underline-animation text-white font-bold">
      <Link href="#Case">Case</Link>
    </li>
    <li className="underline-animation text-white font-bold">
      <Link href="#Products">Products</Link>
    </li>
   
  </ul>
<Icons/>

    
  </nav>

  );
};


export default Navbar