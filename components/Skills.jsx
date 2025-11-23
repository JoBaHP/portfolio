import Image from "next/image";
import React from "react";
import Html from "../public/assets/skills/html.png";
import Mongo from "../public/assets/skills/mongo.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Node from "../public/assets/skills/node.png";
import Github from "../public/assets/skills/github1.png";
import Firebase from "../public/assets/skills/firebase.png";
import NextJS from "../public/assets/skills/nextjs.png";
import AWS from "../public/assets/skills/aws.png";
import ServiceNowIcon from "../public/assets/skills/servicenow.svg";
import TailwindImg from "../public/assets/skills/tailwind.png";
import AngularIcon from "../public/assets/skills/angularjs.svg";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full lg:min-h-screen p-2 dark:bg-[#050505] transition-colors duration-300"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <p className="py-2 text-gray-600 max-w-3xl">
          ServiceNow: ITSM, Flow Designer, Script Includes, Business Rules,
          Client Scripts, UI Policies/Actions, Catalog, IntegrationHub,
          REST/SOAP, Glide APIs.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl bg-white dark:bg-[#111827] border-2 border-transparent hover:border-[#5651e5] hover:shadow-[#5651e5]/40 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-gray-100">
                <Image
                  src={ServiceNowIcon}
                  width={64}
                  height={64}
                  alt="ServiceNow"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>ServiceNow</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl bg-white dark:bg-[#111827] border-2 border-transparent hover:border-[#5651e5] hover:shadow-[#5651e5]/40 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-gray-100">
                <Image
                  src={AngularIcon}
                  width={64}
                  height={64}
                  alt="AngularJS Service Portal"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>AngularJS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl bg-white dark:bg-[#111827] border-2 border-transparent hover:border-[#5651e5] hover:shadow-[#5651e5]/40 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-gray-100">
                <Image src={Html} width={64} height={64} alt="HTML and CSS" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML&CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl bg-white dark:bg-[#111827] border-2 border-transparent hover:border-[#5651e5] hover:shadow-[#5651e5]/40 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-gray-100">
                <Image src={Javascript} width={64} height={64} alt="JavaScript" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl bg-white dark:bg-[#111827] border-2 border-transparent hover:border-[#5651e5] hover:shadow-[#5651e5]/40 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-gray-100">
                <Image src={ReactImg} width={64} height={64} alt="React" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl bg-white dark:bg-[#111827] border-2 border-transparent hover:border-[#5651e5] hover:shadow-[#5651e5]/40 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-gray-100">
                <Image src={Github} width={64} height={64} alt="GitHub" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl bg-white dark:bg-[#111827] border-2 border-transparent hover:border-[#5651e5] hover:shadow-[#5651e5]/40 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-gray-100">
                <Image src={Node} width={64} height={64} alt="Node.js" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NodeJS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl bg-white dark:bg-[#111827] border-2 border-transparent hover:border-[#5651e5] hover:shadow-[#5651e5]/40 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-gray-100">
                <Image src={Firebase} width={64} height={64} alt="Firebase" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl bg-white dark:bg-[#111827] border-2 border-transparent hover:border-[#5651e5] hover:shadow-[#5651e5]/40 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-gray-100">
                <Image src={Mongo} width={64} height={64} alt="MongoDB" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl bg-white dark:bg-[#111827] border-2 border-transparent hover:border-[#5651e5] hover:shadow-[#5651e5]/40 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-gray-100">
                <Image src={TailwindImg} width={64} height={64} alt="Tailwind CSS" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl bg-white dark:bg-[#111827] border-2 border-transparent hover:border-[#5651e5] hover:shadow-[#5651e5]/40 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-gray-100">
                <Image src={AWS} width={64} height={64} alt="AWS" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>AWS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl bg-white dark:bg-[#111827] border-2 border-transparent hover:border-[#5651e5] hover:shadow-[#5651e5]/40 hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto flex h-16 w-16 items-center justify-center rounded-full bg-white dark:bg-gray-100">
                <Image src={NextJS} width={64} height={64} alt="Next.js" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
