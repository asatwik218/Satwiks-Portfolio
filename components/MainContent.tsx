import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Post from "./Post";
import { ProjectData } from "@/utils/types";

type MainContentProps = {
  projects:ProjectData[]
};

const MainContent: React.FC<MainContentProps> = ({projects}) => {
  return (
    <>
      <Tabs defaultValue="feed">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="feed">Feed</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* todo:need to style */}
      <div className="flex justify-center flex-col items-center">
       { projects.map((project)=> (<Post key={project.id} project={project}/>))}
      </div>
    </>
  );
};
export default MainContent;
