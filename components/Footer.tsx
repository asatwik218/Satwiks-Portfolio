import Link from "next/link";
import React from "react";
import {
  AiFillInstagram,
  AiOutlineCopyrightCircle,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { Separator } from "./ui/separator";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <div className="my-10 w-full ">
        <div className="flex items-center justify-center text-gray-400 ">
          <Link
            href="https://www.instagram.com/satwik_agarwal/"
            target="_blank"
          >
            <AiOutlineInstagram className="w-7 h-7 mr-2 hover:text-gray-200" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/satwik-agarwal-a7b14323a/"
            target="_blank"
          >
            <AiOutlineGithub className="w-7 h-7 mr-2 hover:text-gray-200" />
          </Link>
          <Link href="https://github.com/asatwik218" target="_blank">
            <AiOutlineLinkedin className="w-7 h-7 mr-2 hover:text-gray-200" />
          </Link>
          <Link
            href="mailto:asatwik218@gmail.com?subject=Lets%20have%20a%20chat"
            target="_blank"
          >
            <MdOutlineEmail className="w-7 h-7 mr-2 hover:text-gray-200" />
          </Link>
        </div>
        <div className="text-xs text-gray-400 flex items-center justify-center mt-1">
          <span>Satwik</span>
          <AiOutlineCopyrightCircle />
          <span>2023</span>
        </div>
      </div>
    </>
  );
};
export default Footer;
