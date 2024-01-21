import Footer from "@/Components/Footer/footer";
import Header from "@/Components/Header/header";
import Navbar from "@/Components/Navbar/navbar";
import Action from '@/Components/ActionComp/action'
import SectionOne from '@/Components/SectionOne/sectionone'
import SectionTwo from '@/Components/SectionTwo/sectiontwo'
import Image from "next/image";

export default function Home() {
  return (
   <main>
    <Header />
    <Navbar />
    <SectionOne />
    <SectionTwo />
    <Action />
    <Footer />
   </main>
  );
}
