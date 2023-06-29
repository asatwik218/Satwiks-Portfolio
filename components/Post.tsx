"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProjectData } from "@/utils/types";
import moment from "moment";
import React, { useState } from "react";
import { BsDot } from "react-icons/bs";
import PostButtons from "./PostButtons";
import PostDesc from "./PostDesc";
import { Separator } from "./ui/separator";
import Image from "next/image";

type PostProps = {
  project: ProjectData;
};

const Post: React.FC<PostProps> = ({ project }) => {
  const [noOfLikes, setNoOfLikes] = useState(project.noOfLikes);

  return (
    <div className="my-4 mx-5 sm:mx-10 md:mx-5 flex flex-col justify-center ">
      {/* post header */}
      <div className="post-header--image flex w-full">
        <Avatar className="w-14 h-14">
          <AvatarImage src="/images/avatar3.png" alt="@satwik" />
          <AvatarFallback>SATWIK</AvatarFallback>
        </Avatar>
        <div className="post-header--text flex items-center ">
          <span className="text-sm font-bold">{project.title}</span>
          <BsDot className="text-gray-300/90" />
          <span className="text-sm text-gray-300/90 ">
            {moment(new Date(project?.dateAdded?.seconds * 1000)).fromNow()}
          </span>
        </div>
      </div>
      {/* post video */}
      {project?.videoURL && (
        <div className="post-video border w-full border-gray-500/50 mt-1 py-2 bg-[#0D0B0C]">
          <video className="aspect-video">
            <source src="/videos/vid1.mov" />
          </video>
        </div>
      )}
      {/* post image */}
      {project?.imageURL && (
        <div className="post-video border w-full border-gray-500/50 mt-1 py-2 bg-[#0D0B0C]">
          <Image src={project.imageURL} alt="post-image" />
        </div>
      )}

      {/* post button */}
      <PostButtons
        project={project}
        noOfLikes={noOfLikes}
        setNoOfLikes={setNoOfLikes}
      />
      {/* post description */}
      <PostDesc project={project} noOfLikes={noOfLikes} />
      <Separator className="my-3" />
    </div>
  );
};
export default Post;
