"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { TechStackButton } from "./TechStackButton";
import reactLogo from "../../public/assets/react.png";
import javascriptLogo from "../../public/assets/javascript.png";
import tailwindLogo from "../../public/assets/tailwind.png";
import nodejsLogo from "../../public/assets/nodejs.png";
import gitLogo from "../../public/assets/git.png";
import reduxLogo from "../../public/assets/redux-logo.png"
import bootstrapLogo from "../../public/assets/images.jpg"
import expressLogo from "../../public/assets/express.png";
import restapiLogo from "../../public/assets/restapi.png";
import mongodbLogo from "../../public/assets/mongodb.png";
import mongooseLogo from "../../public/assets/mongoose.png";
import PostmanLogo from "../../public/assets/postman-icon.webp";
import mysqlLogo from "../../public/assets/mysql-5-logo.png";
import typescriptLogo from "../../public/assets/typescript.png";
import npmLogo from "../../public/assets/npm-logo.png";
import javaLogo from "../../public/assets/Java-Logo.png";
import htmlLogo from "../../public/assets/html.png";
import cssLogo from "../../public/assets/css.png";
import gitHubLogo from "../../public/assets/github.png";
import awsLogo from "../../public/assets/aws-amazon-web-services.jpg"
import cicdLogo from "../../public/assets/cicdLogo.png";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import art from "../../public/assets/art.webp";
import art3 from "../../public/assets/art-3.webp";
import art4 from "../../public/assets/art-4.webp";
import art6 from "../../public/assets/art-6.webp";
import art7 from "../../public/assets/art-7.webp";
import blog1 from "../../public/assets/blog1.webp";
import blog2 from "../../public/assets/blog2.webp";
import Blog3 from "../../public/assets/Blog3.webp";
import { BlogsCards } from "./BlogsCards";
import { ServiceCards } from "./ServiceCards";


interface LazyImageProps {
  src: StaticImageData;
  alt: string;
  width: number;
}

const LazyImage = ({ src, alt, width }: LazyImageProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
  });

  return (
    <div ref={ref}>
      {inView && <Image src={src} alt={alt} width={width} loading="lazy" />}
    </div>
  );
};

const AboutPage: React.FC = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center mt-28">
        <LazyImage src={art4} alt="about" width={1000} />
      </div>

      <div className="relative min-h-screen w-full flex flex-col justify-center items-center">
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 left-0 blue__gradient" />
        <div className="absolute z-[0] w-[40%] h-[35%] bottom-0 right-0 blue__gradient" />
        <div
          className="text-center dark:text-white text-neutral-800 text-[2.5rem] font-bold pt-32"
          id="about"
        >
          🌌 About 🦄
        </div>
        <br />
        <br />
        <div className="w-[90%] sm:w-[80%] md:w-[80%] xl:w-[60%] my-14 text-2xl z-10">
          Hello, I'm a{" "}
          <span className="text-green-300">Full-Stack Web Developer</span>, Competitive Coder & MERN Stack developer. Passionate on problem-solving using java. Strong understanding of Data Structures and Algorithms. Curiosity to delve into emerging technologies. Love to build web applications using MERN stack to help people around me.
          <br />
          <br />
          <br />
          <div className="flex w-full flex-wrap mt-8">
          <TechStackButton title="HTML5" logo={htmlLogo} />
          <TechStackButton title="CSS3" logo={cssLogo} />
          <TechStackButton title="JavaScript" logo={javascriptLogo} />
          <TechStackButton title="TypeScript" logo={typescriptLogo} />
          <TechStackButton title="Java" logo={javaLogo}/>
            <TechStackButton title="React.Js" logo={reactLogo} />
            <TechStackButton title="Redux" logo={reduxLogo} />
            <TechStackButton title="TailwindCSS" logo={tailwindLogo} />
            <TechStackButton title="Bootstrap" logo={bootstrapLogo} />
            <TechStackButton title="Node.Js" logo={nodejsLogo} />
            <TechStackButton title="Express.js" logo={expressLogo} />
            <TechStackButton title="REST APIs" logo={restapiLogo} />
            <TechStackButton title="MongoDB" logo={mongodbLogo} />
            <TechStackButton title="MySQL" logo={mysqlLogo} />
            <TechStackButton title="Mongoose" logo={mongooseLogo} />
            <TechStackButton title="Git" logo={gitLogo} />
            <TechStackButton title="GitHub" logo={gitHubLogo} />
            <TechStackButton title="NPM" logo={npmLogo}/>
            <TechStackButton title="Postman" logo={PostmanLogo} />
            <TechStackButton title="AWS" logo={awsLogo}/>
            <TechStackButton title="CI/CD" logo={cicdLogo} />
            
          </div>
          <br />
          <br />
          <br />
          <div>
            <span className="sm:text-4xl text-[30px] font-bold text-green-300">
              ✨ Ranga Dharma Teja Kuntumalla
            </span>
            <br />
            <br /> <span className="font-bold text-purple-300">
              Currently:
            </span>{" "}
            Final Year Engineering Student <br />
            <br />
            <span className="font-bold text-purple-300">Branch:</span> Computer
            Science Engineering (Software Engineering) <br />
            <br />
            <span className="font-bold text-purple-300">University:</span> Centurion University
            <br />
            <br />
            <span className="font-bold text-purple-300">
              Graduation Year:
            </span>{" "}
            2025
            <br />
            <br />
            <span className="font-bold text-purple-300">Address:</span>{" "}
            Vizianagaram, Andhra Pradesh, India
            <br />
            <br />
            <br />
            <br />
            <div
              className="w-full flex justify-center items-center my-28"
              id="about"
            >
              <LazyImage src={art6} alt="about" width={1000} />
            </div>
            <span className="font-bold text-green-300">
              🎗️ As a student of computer science, I specialize in:
            </span>
            <br />
            <br />
            -Full Stack Web Development
            <br /> -Data Structure & Algorithms <br />
            -Object Oriented Programming
            <br /> -Database Management
            <br />
            
          </div>
          <br />
          🙌 So, let's connect and share a few laughs while we navigate the tech
          world together!
          <br />
          <br />
          ➡️ I am looking for opportunities in the fields of web development and
          software development.
          <br />
        </div>
      </div>

      <div className="w-full flex justify-center items-center my-2" id="about">
        <LazyImage src={art7} alt="about" width={1000} />
      </div>

      
    
      <div
        className="text-center dark:text-white text-neutral-800 text-[2.5rem] font-bold pt-32"
        id="services"
      >
        🌌 Services 🦄
      </div>
      <div className="relative flex justify-center w-full my-8">
        <div className="flex flex-wrap justify-around items-center xl:w-[70%] sm:w-[90%]">
          <ServiceCards
            title="Frontend Development"
            description="Creating stellar user interfaces and web experiences using the latest technologies."
            emoji="💻"
          />
          <ServiceCards
            title="Backend Development"
            description="Developing robust, scalable server-side logic for a wide range of web applications."
            emoji="📡"
          />
          <ServiceCards
            title="Responsive Design"
            description="Designing websites that look and perform equally well on all devices and screen sizes."
            emoji="📲"
          />
        </div>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 left-0 blue__gradient" />
        <div className="absolute z-[0] w-[40%] h-[35%] bottom-0 right-0 blue__gradient" />
      </div>

      <div className="w-full flex justify-center items-center my-2" id="about">
        <LazyImage src={art} alt="about" width={1000} />
      </div>
    </>
  );
};

export default AboutPage;
