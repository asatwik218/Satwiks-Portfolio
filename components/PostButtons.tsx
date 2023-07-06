"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React, { useEffect, useState } from "react";
import { AiOutlineGithub } from "react-icons/ai";

import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa";
import { ProjectData } from "@/utils/types";
import { doc, increment, updateDoc } from "firebase/firestore";
import { firestore } from "@/utils/firebase";

type PostButtonsProps = {
  project: ProjectData;
  noOfLikes: number;
  setNoOfLikes: React.Dispatch<React.SetStateAction<number>>;
};

const PostButtons: React.FC<PostButtonsProps> = ({
  project,
  noOfLikes,
  setNoOfLikes,
}) => {
  const [liked, setLiked] = useState(false);

  const handleLike = async () => {
    if (liked) {
      //unliking
      setLiked(false);
      document.getElementById("like-svg")?.classList.remove("active");
      localStorage.removeItem(`${project.id}`);
      setNoOfLikes((prev) => prev - 1);
      try {
        const projectDocRef = doc(firestore, "projects", project.id);
        await updateDoc(projectDocRef, {
          noOfLikes: increment(-1),
        });
      } catch (error: any) {
        console.log("handle click error: ", error.message);
      }

      console.log("unliked");
    } else {
      //liking
      setLiked(true);
      document.getElementById("like-svg")?.classList.add("active");
      localStorage.setItem(`${project.id}`, "true");
      setNoOfLikes((prev) => prev + 1);
      try {
        const projectDocRef = doc(firestore, "projects", project.id);
        await updateDoc(projectDocRef, {
          noOfLikes: increment(1),
        });
      } catch (error: any) {
        console.log("handle click error: ", error.message);
      }
      console.log("liked");
    }
  };

  useEffect(() => {
    if (localStorage.getItem(`${project.id}`) === "true") {
      setLiked(true);
      document.getElementById("like-svg")?.classList.add("active");
    }
  }, []);

  return (
    <div className="post-buttons flex items-center my-1 ml-1 gap-x-3 ">
      <div onClick={handleLike}>
        <LikeIconSvg />
      </div>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link target="_blank" href={project.githubURL}>
              <AiOutlineGithub className="w-6 h-6   hover:text-gray-100/80" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Checkout the Code!</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      {project.deploymentURL && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link target="_blank" href={project.deploymentURL}>
                <FaPaperPlane className="w-4 h-4   hover:text-gray-100/80" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Visit!</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  );
};
export default PostButtons;

const LikeIconSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 47.5 47.5"
      id="like-svg"
      className="w-5 h-5"
    >
      <defs>
        <clipPath id="a">
          <path d="M0 38h38V0H0v38Z"></path>
        </clipPath>
      </defs>
      <g transform="matrix(1.25 0 0 -1.25 0 47.5)">
        <path d="M36.885 25.166c0 5.45-4.418 9.868-9.867 9.868-3.308 0-6.227-1.633-8.018-4.129-1.79 2.496-4.71 4.129-8.017 4.129-5.45 0-9.868-4.418-9.868-9.868 0-.772.098-1.52.266-2.241C2.752 14.413 12.216 5.431 19 2.965c6.783 2.466 16.249 11.448 17.617 19.96.17.721.268 1.469.268 2.241"></path>
      </g>
    </svg>
  );
};
