import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Image from "next/image";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="max-w-xl flex justify-center w-auto ">
      
      <div className="">
        <Header/>
        <MainContent />
        <Footer/>
      </div>
    </div>
  );
}
