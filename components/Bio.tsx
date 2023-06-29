import Link from "next/link";
import React from "react";
import { FcElectronics } from "react-icons/fc";

type BioProps = {};

const Bio: React.FC<BioProps> = () => {
  return (
    <div className="bio-text ml-3 flex flex-col">
      <p className=" font-normal pb-1">
        Bringing Ideas to Life with Code! ✨
      </p>
      <p className="text-sm text-gray-300">
        {" "}
        Web Developer 👨‍💻{" "}
        <span className="font-bold px-1 text-white hover:text-sky-500 cursor-pointer">
          #ReactJS
        </span>{" "}
        <span className="font-bold px-1 text-white hover:text-sky-500 cursor-pointer">
          #NextJS
        </span>{" "}
        <span className="font-bold px-1 text-white hover:text-sky-500 cursor-pointer">
          #TailwindCSS
        </span>{" "}
      </p>
      <p className="text-sm text-gray-300 flex items-center">
        Embedded Software Developer
        <FcElectronics className="mx-1 w-4 h-4" />{" "}
        <span className="font-bold px-1 text-white hover:text-sky-500 cursor-pointer">
          #C
        </span>{" "}
        <span className="font-bold px-1 text-white hover:text-sky-500 cursor-pointer">
          #C++
        </span>{" "}
        <span className="font-bold px-1 text-white hover:text-sky-500 cursor-pointer">
          #STM32
        </span>{" "}
      </p>
      <p className="text-sm text-gray-300">
        {" "}
        Budding Rocketeer & Avionics Engineer 🚀 at{" "}
        <span className="font-bold px-1 text-white hover:text-sky-500 cursor-pointer">
          #ThrustMIT
        </span>{" "}
      </p>
      <Link href="/about">
        <p className="hover:text-sky-500 cursor-pointer font-bold text-sm w-20" >
          more...
        </p>
      </Link>
    </div>
  );
};
export default Bio;
