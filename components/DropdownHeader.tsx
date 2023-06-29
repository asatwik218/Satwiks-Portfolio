import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineMail
} from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";

const DropdownHeader: React.FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center">
        <BsThreeDots className=" w-6 h-6 ml-2 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#0D0B0C] border-gray-600 border w-44 justify-center outline-none my-1 text-gray-300">
        <Link href="/contact" >
          <DropdownMenuItem className="flex justify-center text-sm">
            <AiOutlineMail className="w-4 h-4 mr-1" />
            Contact me
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <Link href="https://www.instagram.com/satwik_agarwal/" target="_blank">
          <DropdownMenuItem className="flex justify-center text-sm ">
            <AiOutlineInstagram className="w-5 h-5 mr-1" />
            Instagram
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <Link href="/about">
        <DropdownMenuItem
          className="flex justify-center text-sm"
        >
          <button>About this account</button>
        </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default DropdownHeader;
