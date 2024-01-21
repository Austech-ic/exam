import Footer from "@/Components/Footer/footer";
import Header from "@/Components/Header/header";
import Navbar from "@/Components/Navbar/navbar";
import Action from '@/Components/ActionComp/action'
import SectionOne from '@/Components/SectionOne/sectionone'
import SectionTwo from '@/Components/SectionTwo/sectiontwo'
import SectionThree from '@/Components/SectionThree/sectionthree'
import SectionFour from '@/Components/SectionFour/sectionfour'
import SectionFive from '@/Components/SectionFive/sectionfive'
import Image from "next/image";

export default function Home() {
  return (
   <main>
    <Header />
    <Navbar />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <Action />
    <Footer />
   </main>
  );
}
