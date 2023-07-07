import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "./ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

const Nav: React.FC = () => {
  return (
    <div className="sticky bg-[#0D0B0C]/30 backdrop-blur-md top-0 z-10">
      <nav className="mx-5  flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo.webp"
            alt="satwik logo"
            width={40}
            height={40}
            className="object-cover  "
          />
        </Link>
        {/* <div className="flex justify-between items-center text-gray-300">
          <div className="hover:bg-gray-800 md:m-2 rounded text-sm focus:ring-transparent md:text-base py-1 text-light px-2 focus-visible:outline-none focus-visible:border-none focus:outline-none focus:border-none">
            <DropdownMenu>
              <DropdownMenuTrigger>Resume</DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#0D0B0C] border-gray-600 border w-44 justify-center outline-none my-1 text-gray-300">
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link
                      href="/resumes/webdev-resume.pdf"
                      target="_blank"
                      download
                    >
                      Web Developer
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />

                  <DropdownMenuItem>
                    <Link
                      href="/resumes/embedded-software-resume.pdf"
                      target="_blank"
                      download
                    >
                      Embedded Software Engineer
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div> */}
        <div className="flex justify-between items-center text-gray-300">
          <div className="hover:bg-gray-800 cursor-pointer md:m-2 rounded text-sm focus:ring-transparent md:text-base py-1 text-light px-2 focus-visible:outline-none focus-visible:border-none focus:outline-none focus:border-none">
            <Link href="/resumes/resume.pdf" target="_blank">
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
