import About from "@/components/About";
import React from "react";


const AboutPage: React.FC = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="max-w-3xl mt-4">
        <About />
      </div>
    </div>
  );
};
export default AboutPage;
