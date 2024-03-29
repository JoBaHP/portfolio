import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
    <div id="home" className=" dark:bg-black w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          {/* <p className="uppercase text-sm tracking-widest text-gray-600">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p> */}
          <h1 className="py-15 pt-8 text-gray-700">
            Hi, I&#39;m{" "}
            <span className="text-[#5651e5]">
              <Typewriter
                options={{
                  strings: ["Jovan <br> Full-Stack Web Developer"],
                  autoStart: true,
                  loop: true,
                  pauseFor: 2500,
                }}
              />
            </span>
            {/*    <span className="text-[#5651e5]"> Jovan</span> */}
          </h1>
          <h1 className="py-2 text-gray-700">
            {/*             <Typewriter
              options={{
                strings: ["A Full-Stack Web Developer"],
                autoStart: true,
                loop: true,
                pauseFor: 2500,
              }}
            /> */}
          </h1>
          {/* <h1 className="py-2 text-gray-700"></h1> */}
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            Full time ServiceNow developer. Building full-stack web applications
            and websites in my free time.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/jovan-raosavljevic/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/JoBaHP"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
