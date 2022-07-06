import React from "react";
import Image from "next/image";
import Link from "next/link";
/* import profilePic from "../public/assets/personal.jpg"; */

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            / / A software engineer, lifelong learner, language enthusiast and
            sports fan
          </p>
          <p className="py-2 text-gray-600">
            I have spent the last 10 years as a sports professional working for
            international companies. I have always had a knack for technology
            and working with computers. In 2019 I started working with HTML and
            CSS to make some minor edits on a small business website that I was
            operating. What I thought was just a few small edits turned into a
            love for programming.
          </p>
          <p className="py-2 text-gray-600">
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning Java but later on I was even more
            enthused with making websites interactive so the Javascript was
            natural choice. I then started freelancing for differnt kind of
            company&apos;s. I am now spending my time building projects with
            React JS, Firebase, and learning new technologies.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/assets/personal.jpg"
            alt="Picture of the author"
            className="rounded-xl"
            width="400"
            height="400"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
