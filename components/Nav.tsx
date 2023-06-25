import React from "react";
import Image from "next/image";
import Link from "next/link";

const Nav: React.FC = () => {
  return (
    <>
      <nav className="mx-5 my-1 flex justify-between items-center">
        <Image
          src="/images/logo.jpeg"
          alt="promptopia logo"
          width={40}
          height={40}
          className="object-cover  "
        />
        <div className="flex justify-between">
          <div className="hover:bg-slate-800  m-2 rounded">
            <Link href="#" className="p-3 text-sm">
              RESUME
            </Link>
          </div>
          <div className="hover:bg-slate-800  m-2 rounded ">
            <Link href="#contact" className="p-3 text-sm">
              ABOUT ME
            </Link>
          </div>
        </div>
      </nav>
      <hr className="border-slate-500/40"/>
    </>
  );
};
export default Nav;
