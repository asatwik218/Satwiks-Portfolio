import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Post from "./Post";
import { ProjectData } from "@/utils/types";
import About from "./About";
import Contact from "./Contact";

type MainContentProps = {
  projects: ProjectData[];
};

const MainContent: React.FC<MainContentProps> = ({ projects }) => {
  return (
    <>
      <Tabs defaultValue="projects">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="about" id="aboutTrigger">
            About
          </TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>
        <TabsContent value="projects">
          {/* todo:need to style */}
          <div className="flex justify-center flex-col items-center">
            {projects.map((project) => (
              <Post key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="about">
          <About />
        </TabsContent>
        <TabsContent value="contact">
          <Contact />
        </TabsContent>
      </Tabs>
    </>
  );
};
export default MainContent;
