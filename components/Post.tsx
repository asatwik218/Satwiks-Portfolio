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
    <div className="my-4 mx-5 sm:mx-10 md:mx-5 flex flex-col justify-center ">
      {/* post header */}
      <div className="post-header--image flex w-full">
        <Avatar className="w-14 h-14">
          <AvatarImage src="/images/avatar.webp" alt="@satwik" />
          <AvatarFallback>SA</AvatarFallback>
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
      <div className="post-video border w-full border-gray-500/50 mt-1 py-2 bg-[#0D0B0C] relative">
        {project?.videoURL ? (
          <video
            className="aspect-video object-cover"
            src={project.videoURL}
            ref={vidRef}
            onTouchStart={() => {
              if (isPlaying) {
                vidRef.current?.pause();
                vidRef.current!.currentTime = 0;
                setIsPlaying(false);
                console.log("paused");
              }
            
            }}
            onTouchEnd={async () => {
              if (vidRef.current && !isPlaying) {
                await vidRef.current?.play();
                setIsPlaying(true);
                console.log("playing");
              }
            }}
            loop
            muted
            poster={project.imageURL}
            onMouseLeave={() => {
              if (isPlaying) {
                vidRef.current?.pause();
                vidRef.current!.currentTime = 0;
                setIsPlaying(false);
                console.log("paused");
              }
              // vidRef.current?.pause();
              // vidRef.current!.currentTime = 0;
            }}
            onMouseOver={async () => {
              if (vidRef.current && !isPlaying) {
                await vidRef.current?.play();
                setIsPlaying(true);
                console.log("playing");
              }
            }}
          />
        ) : (
          <img
            src={project.imageURL}
            // src="/projectContent/portfolio-website.png"
            alt="post-image"
            className="aspect-video  top-0 left-0 w-full h-full "
            loading="lazy"
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