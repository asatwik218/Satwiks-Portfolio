"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProjectData } from "@/utils/types";
import moment from "moment";
import React, { useState, useRef, useEffect } from "react";
import { BsDot } from "react-icons/bs";
import PostButtons from "./PostButtons";
import PostDesc from "./PostDesc";
import { Separator } from "./ui/separator";

type PostProps = {
  project: ProjectData;
};

const Post: React.FC<PostProps> = ({ project }) => {
  const [noOfLikes, setNoOfLikes] = useState(project.noOfLikes);
  const [isPlaying, setIsPlaying] = useState(false);
  const vidRef = useRef<HTMLVideoElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(()=>{
    setIsMounted(true)
  },[])
  
  if(!isMounted) return null
  return (
    <div className="py-4 px-5 sm:px-10 md:px-5 flex flex-col justify-center hover:bg-gray-900 rounded-md">
      {/* post header */}
      <div className="post-header--image flex w-full">
        <Avatar className="w-14 h-14">
          <AvatarImage src="" alt="@satwik" />
          <AvatarFallback></AvatarFallback>
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
      <div className="post-video  rounded-xl border w-full border-gray-500/50 mt-1 py-2 bg-[#0D0B0C] relative">
        {project?.videoURL ? (
          <video src="">

          </video>
            // poster={`https://firebasestorage.googleapis.com/v0/b/portfolio-a7d62.appspot.com/o/projectImages%2F${project.imageURL}?alt=media`}
           
        ) : (
          <img
            src={`https://firebasestorage.googleapis.com/v0/b/portfolio-a7d62.appspot.com/o/projectImages%2F${project.imageURL}?alt=media&token=447f3679-3e8d-4282-be4d-4ee4a6e05244`}
            alt="post-image"
            className="aspect-video  top-0 left-0 w-full h-full "
          />
        )}
      </div>

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