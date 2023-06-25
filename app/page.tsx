import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Image from "next/image";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex justify-center w-screen mt-2 ">
      <div className="max-w-3xl w-full">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}
