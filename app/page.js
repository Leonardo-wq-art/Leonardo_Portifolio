
import Discount from "@/components/Discount";
import Spec from "@/components/Spec";
import Footer_Conter from "@/components/Footer_Conter";
import Hero from "@/components/Hero";
import Case from "@/components/Case";
import Choise from "@/components/Choise";

export default function Home() {
  return (
    <div className="bg-gradient ">
<header><Hero/></header>
<main><Spec/>
<Case/>
<Discount/>
<Choise/>
</main>
<footer><Footer_Conter/></footer>

   </div>
  )
}
