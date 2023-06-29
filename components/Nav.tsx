import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";


const Nav: React.FC = () => {
  return (
    <div className="sticky bg-[#0D0B0C]/30 backdrop-blur-md top-0 z-10">
      <nav className="mx-5  flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo1.png"
            alt="satwik logo"
            width={40}
            height={40}
            className="object-cover  "
          />
        </Link>
        <div className="flex justify-between items-center text-gray-300">
          <div className="hover:bg-gray-800 md:m-2 rounded text-sm md:text-base py-1 text-light">
            <Link href="#" className="md:p-3 pr-2">
              Resume
            </Link>
          </div>
        </div>
      </nav>
      <Separator className="" />
    </div>
  );
};
export default Nav;
