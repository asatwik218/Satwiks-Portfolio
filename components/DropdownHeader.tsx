import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { AiFillGithub , AiOutlineInstagram, AiOutlineMail} from "react-icons/ai";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";



const DropdownHeader: React.FC= () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <BsThreeDots className=" w-6 h-6 ml-2 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-stone-800 w-44 justify-center text-white outline-none border-none">
        <DropdownMenuItem className="flex justify-center text-sm">
          <AiOutlineMail className="w-4 h-4 mr-1" />
          Contact me
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex justify-center text-sm ">
          <AiOutlineInstagram className="w-5 h-5 mr-1" />
          Instagram
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="flex justify-center text-sm">
          About this account
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default DropdownHeader;