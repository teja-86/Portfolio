import React from "react";
import linkedinLogo from "../../public/assets/linkedin_logo.png";
import leetcodeLogo from "../../public/assets/leetcode.png"
import gmailLogo from "../../public/assets/gmail_logo.png";
import githubLogo from "../../public/assets/github.png";
import art5 from "../../public/assets/art-5.webp";
import Image from "next/image";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="relative">
      <div
        className="text-center dark:text-white text-neutral-800 text-[2.5rem] font-bold pt-32"
        id="contact"
      >
        🌌 Contact 🦄
      </div>

      {/* Flex Container for Contact Links */}
      <div className="flex justify-center gap-14 mt-16">
        <div className="flex flex-col items-center">
          <Link href="https://www.linkedin.com/in/ranga-dharma-teja-kuntumalla-127b59239/">
            <Image
              src={linkedinLogo}
              alt="LinkedIn"
              width={50}
              style={{ objectFit: "contain", cursor: "pointer" }}
              loading="lazy"
            />
          </Link>
          <p>LinkedIn</p>
        </div>

        <div className="flex flex-col items-center">
          <Link href="https://github.com/teja-86/">
            <Image
              src={githubLogo}
              alt="GitHub"
              width={50}
              style={{ objectFit: "contain", cursor: "pointer" }}
              loading="lazy"
            />
          </Link>
          <p>GitHub</p>
        </div>

        <div className="flex flex-col items-center">
          <Link href="mailto:rangadharmateja0@gmail.com">
            <Image
              src={gmailLogo}
              alt="Email Address"
              width={50}
              style={{ objectFit: "contain", cursor: "pointer" }}
              loading="lazy"
            />
          </Link>
          <p>Mail</p>
        </div>
      </div>

      <div
        className="text-center dark:text-white text-neutral-800 text-[2.5rem] mt-24 font-bold"
        id="coding-platform"
      >
        🥇 Coding Platform 👽
      </div>

      {/* Flex Container for Coding Platform Links */}
      <div className="flex justify-center gap-14 mt-16">
        <div className="flex flex-col items-center">
          <Link href="https://leetcode.com/">
            <Image
              src={leetcodeLogo}
              alt="Leetcode"
              width={50}
              style={{ objectFit: "contain", cursor: "pointer" }}
              loading="lazy"
            />
          </Link>
          <p>Leetcode</p>
        </div>
      </div>

      <div className="absolute z-[0] w-[40%] h-[35%] top-0 left-0 blue__gradient" />
      <div className="absolute z-[0] w-[40%] h-[35%] bottom-0 right-0 blue__gradient" />

      <div className="w-full flex justify-center items-center my-24" id="about">
        <Image
          src={art5}
          alt="about"
          width={800}
          style={{ objectFit: "cover" }}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ContactPage;
