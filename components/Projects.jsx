import Image from "next/image";
import Link from "next/link";
import React from "react";
import livornoImg from "../public/assets/projects/livorno-restaurant.png";
import cryptoImg from "../public/assets/projects/crypto.png";
import agencyImg from "../public/assets/projects/agency.png";
import blogImg from "../public/assets/projects/blogmart.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full dark:bg-[#050505] transition-colors duration-300">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="ServiceNow Portal"
            backgroundImg={agencyImg}
            projectUrl="/servicenow-portal"
            tech="ServiceNow / Service Portal"
          />
          <ProjectItem
            title="ServiceNow Integrations"
            backgroundImg={cryptoImg}
            projectUrl="/servicenow-integration"
            tech="ServiceNow / REST & IntegrationHub"
          />
          <ProjectItem
            title="Restaurant"
            backgroundImg={livornoImg}
            projectUrl="/restaurant"
            tech="React JS"
          />

          <ProjectItem
            title="Agency Website"
            backgroundImg={agencyImg}
            projectUrl="/agency"
            tech="React JS"
          />
          <ProjectItem
            title="Personal Blog"
            backgroundImg={blogImg}
            projectUrl="/blog"
            tech="Next JS"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImg={cryptoImg}
            projectUrl="/crypto"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
