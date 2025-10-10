import React from "react";
import Image from "next/image";
import Link from "next/link";
/* import profilePic from "../public/assets/personal.jpg"; */

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:min-h-screen p-2 flex items-center py-16 dark:bg-[#050505]"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600 dark:text-gray-300">
            / / Software engineer, lifelong learner, language enthusiast, and sports fan
          </p>
          <p className="py-2 text-gray-600 dark:text-gray-300">
            For the past 3+ years I’ve been a ServiceNow developer — building,
            customizing, and integrating solutions across ITSM and related
            modules. I work with GlideRecord, AngularJS Service Portal widgets,
            Flow Designer, IntegrationHub, Business Rules, Client Scripts, Script
            Includes, UI Policies/Actions, Catalog Items, and REST/SOAP
            integrations, keeping implementations aligned with platform best
            practices.
          </p>
          <p className="py-2 text-gray-600 dark:text-gray-300">
            I hold multiple ServiceNow certifications, including Certified System
            Administrator (CSA) and Certified Application Specialist credentials,
            and I stay current with release upgrades to deliver maintainable,
            secure solutions.
          </p>
          <p className="py-2 text-gray-600 dark:text-gray-300">
            I have spent the last 10 years as a sports professional working for
            international companies. I have always had a knack for technology
            and working with computers. In 2019 I started working with HTML and
            CSS to make some minor edits on a small business website that I was
            operating. What I thought was just a few small edits turned into a
            love for programming.
          </p>
          <p className="py-2 text-gray-600 dark:text-gray-300">
            Fascinated with how intricate programming can be, I was quickly drawn
            to learn more. I started with Java fundamentals, then gravitated
            toward building interactive interfaces with JavaScript. Freelance
            projects across different industries followed, and today I spend my
            time creating experiences with React, Next.js, Firebase, and the
            ServiceNow platform while always learning what’s next.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 dark:text-gray-300 underline cursor-pointer">
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
