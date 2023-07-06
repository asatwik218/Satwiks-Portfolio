import Link from "next/link";
import React from "react";

type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  return (
    <div
      className="flex w-full flex-col text-gray-300/90 tracking-wide bg-[#0D0B0C]/30 backdrop-blur-sm p-5 text-sm md:text-base gap-y-4 "
      id="about"
    >
      <h1 className="text-3xl font-bold mt-1 text-white ">Hello there! 👋</h1>
      <p className="">
        I'm Satwik. I am a Web Developer, an Embedded Software Developer, a
        Rocketry Enthusiast and currently a Computer Science Undergrad.
      </p>
      <p className="">
        I am a self taught web developer specialising in ReactJS and NextJS. I
        have been building websites with react for over 2 years now. In addition
        to React.js, I also possess comprehensive knowledge and hands-on
        experience with backend technologies such as Node.js, Express.js,
        MongoDB, and Firebase. This well-rounded expertise allows me to develop
        full-stack applications seamlessly, ensuring a smooth integration
        between the front-end and back-end components.
      </p>

      <p>
        I also work as an Avionics and Embedded Software Engineer at{" "}
        <span>
          <Link href="https://www.thrustmit.in/" target="_blank">
            ThrustMIT
          </Link>
        </span>
        , which is one of India's top student Rocketry team. I am responsible
        for the <span>firmware development</span> of our custom flight computer.
        This flight computer board, built on the STM32 microcontroller platform,
        is equipped with an array of sensors. Its primary responsibilities
        include handling telemetry, data collection, and facilitating the safe
        recovery of our rockets.
      </p>
      <p>
        As an embedded software engineer i work with low-level languages like C
        and C++. This expertise enables me to work closely with the hardware
        components, ensuring seamless integration and flawless
        functionality.Additionally, my work in the avionics field has equipped
        me with a comprehensive understanding of Electronics and Communication
        systems.
      </p>
      <p>
        The collaborative nature of my work at ThrustMit allows me to engage
        with a highly skilled team of professionals. Together, we navigate
        complex challenges, employing innovative strategies and cutting-edge
        technologies to push the boundaries of rocketry
      </p>
      <p>
        The field of web development is characterized by constant evolution,
        with new technologies, libraries, and frameworks emerging on a regular
        basis. I embrace this ever-changing landscape with enthusiasm, always
        eager to experiment and explore these cutting-edge tools. By staying
        up-to-date with the latest advancements, I continuously enhance my
        development capabilities and deliver innovative solution
      </p>
      <p>
        As a self-taught professional, I am deeply committed to ongoing learning
        and growth. I actively seek out opportunities to expand my knowledge
        base, whether through online courses, attending industry conferences, or
        engaging with developer communities. This dedication to self-improvement
        empowers me to tackle complex challenges and deliver high-quality
        results.
      </p>
      <p>
        Thank you for taking the time to learn more about me. If you have a
        project in mind or would like to connect, feel free to reach out to me{" "}
        <span>here</span>
      </p>
      <p className="font-extrabold text-gray-200">Stay awesome!</p>
      <p className="font-signature text-white text-6xl mt-3">Satwik</p>

    </div>
  );
};
export default About;
