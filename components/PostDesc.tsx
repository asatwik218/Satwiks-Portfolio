"use client";
import { ProjectData } from "@/utils/types";
import React, { useState } from "react";

type PostDescProps = {
  project: ProjectData;
  noOfLikes: number;
};

const PostDesc: React.FC<PostDescProps> = ({ project, noOfLikes }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="post-desc ml-1 mt-1 text-sm ">
      <p className="mb-1">{noOfLikes} likes</p>

      {showMore ? (
        <>
          <div>
            <p>
              {project.description}
              <p className="text-sky-200 mt-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="mr-2 mb-1">
                    #{tag}
                  </span>
                ))}
              </p>
            </p>
            <p
              className="hover:text-gray-400/90 text-gray-400 cursor-pointer text-sm "
              onClick={() => {
                setShowMore(false);
              }}
            >
              show less
            </p>
          </div>
        </>
      ) : (
        <>
          <div>
            <p>{project.description.substring(0, 150)}...</p>
            <p
              className="hover:text-gray-400/90 text-gray-400 cursor-pointer text-sm "
              onClick={() => {
                setShowMore(true);
              }}
            >
              more
            </p>
          </div>
        </>
      )}
    </div>
  );
};
export default PostDesc;
