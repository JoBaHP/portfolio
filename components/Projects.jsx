import { useState } from "react";
import livornoImg from "../public/assets/projects/livorno-restaurant.png";
import cryptoImg from "../public/assets/projects/crypto.png";
import agencyImg from "../public/assets/projects/agency.png";
import blogImg from "../public/assets/projects/blogmart.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "ServiceNow Portal",
      backgroundImg: agencyImg,
      projectUrl: "/servicenow-portal",
      tech: "ServiceNow / Service Portal",
      category: "ServiceNow",
    },
    {
      title: "ServiceNow Integrations",
      backgroundImg: cryptoImg,
      projectUrl: "/servicenow-integration",
      tech: "ServiceNow / REST & IntegrationHub",
      category: "ServiceNow",
    },
    {
      title: "Restaurant",
      backgroundImg: livornoImg,
      projectUrl: "/restaurant",
      tech: "React JS",
      category: "React",
    },
    {
      title: "Agency Website",
      backgroundImg: agencyImg,
      projectUrl: "/agency",
      tech: "React JS",
      category: "React",
    },
    {
      title: "Personal Blog",
      backgroundImg: blogImg,
      projectUrl: "/blog",
      tech: "Next JS",
      category: "Next",
    },
    {
      title: "Crypto App",
      backgroundImg: cryptoImg,
      projectUrl: "/crypto",
      tech: "React JS",
      category: "React",
    },
  ];

  const categories = ["All", "ServiceNow", "React", "Next"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div id="projects" className="w-full dark:bg-[#050505] transition-colors duration-300">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white shadow-lg"
                  : "bg-white dark:bg-[#111827] text-gray-700 dark:text-gray-200 shadow-md hover:shadow-lg"
              }`}
              aria-label={`Filter projects by ${category}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectItem
              key={index}
              title={project.title}
              backgroundImg={project.backgroundImg}
              projectUrl={project.projectUrl}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
