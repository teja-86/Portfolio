'use client';
import React, {useState} from "react";
import linkedinLogo from "../../public/assets/linkedin_logo.png";
import leetcodeLogo from "../../public/assets/leetcode.png";
import gmailLogo from "../../public/assets/gmail_logo.png";
import githubLogo from "../../public/assets/github.png";
import art5 from "../../public/assets/art-5.webp";
import Image from "next/image";
import Link from "next/link";
import emailjs from "@emailjs/browser";

const ContactPage = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
  }

  interface ChangeEvent {
    target: {
      name: string;
      value: string;
    };
  }

  const handleChange = (e: ChangeEvent) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  interface EmailJSResponseStatus {
    text: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result: EmailJSResponseStatus = await emailjs.send(
        "service_jvxxf3g", // Replace with your EmailJS service ID
        "template_tpwgqoj", // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "-6BqiRLoMVf-PQJ3n" // Replace with your EmailJS public key
      );
      console.log(result.text);
      setStatus("Email sent successfully!");
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus("Failed to send email. Please try again.");
    }
  };

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

      {/* Contact Form */}
      <div
        className="relative z-10 max-w-4xl mx-auto mt-24 p-8 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg"
        style={{
        position: "relative", // Ensures it positions itself within the context
        zIndex: 10, // Higher index to appear above the background
        }}
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
          Get in Touch  
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="text-black w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="text-black w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="text-black w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className=" text-black w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your message here"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="py-3 bg-black text-white border border-[#413d3d] hover:bg-[#7B93FE] text-[14px] hover:text-black hover:duration-100 ease-in transition-all p-1 px-2 rounded-lg cursor-default"
            >
              Send Message
            </button>
          </div>
        </form>
        {status && <p className="text-center mt-4 text-green-600">{status}</p>}
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
