import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import Bio from "./Bio";
import DropdownHeader from "./DropdownHeader";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <div className="flex text-textLight">
        <div className="avatar-img">
          <Avatar className="md:h-56 md:w-56 h-32 w-32">
            <AvatarImage src="/images/avatar.webp" alt="@satwik" />
            <AvatarFallback>SA</AvatarFallback>
          </Avatar>
        </div>
        <div className="header-text  pt-5 md:pt-8  md:flex md:flex-col">
          <div className="flex flex-wrap md:flex-row flex-col md:items-center justify-center ">
            {/* still need to do styling for bigger screen sizes */}
            {/* username div */}
            <div className="text-xl ml-3 mr-2  flex items-center font-bold">
              Satwik Agarwal
              <MdVerified className="w-6 h-6 ml-2 text-[#0077b5] " />
              <div className="md:hidden">
                <DropdownHeader />
              </div>
            </div>
            {/* buttons div */}
            <div className="flex  items-center pt-5 md:pt-0 ">
              <Link  href="https://github.com/asatwik218" target="_blank">
                <Button className="ml-2 mr-2" >
                  <AiFillGithub className="mr-1 h-5 w-5" /> Github
                </Button>
              </Link>
              <Link href="mailto:asatwik218@gmail.com?subject=Lets%20have%20a%20chat" target="_blank">
                <Button variant="default" className="">
                  Message
                </Button>
              </Link>

              <Link href="https://www.linkedin.com/in/satwik-agarwal-a7b14323a/" target="_blank">
                <Button
                  variant="default"
                  className="ml-2 bg-[#0077b5] hover:bg-[#0077b5]/90"
                  size="icon"
                >
                  <FaLinkedinIn className="h-4 w-4 text-white" />
                </Button>
              </Link>

              <div className="hidden md:flex">
                <DropdownHeader />
              </div>
            </div>
          </div>
          <div className="mt-4 hidden md:block">
            <Bio />
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <Bio />
      </div>
      <Separator className="mt-4 mb-0" />
    </>
  );
};
export default Header;
