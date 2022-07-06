import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Jovan | Resume</title>
        <meta
          name="description"
          content="I’m a full-stack web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Jovan Raosavljevic</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/jovan-raosavljevic/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/JoBaHP"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Interpersonal <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Interpersonal</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical and motivated web development professional with experience
          in applications layers, presentation layers and databases. Code
          enthusiast and self-proclaimed designer who specializes in full-stack
          development. Consummate professional, with solid interpersonal
          abilities and complex problem-solving skills capable to make and
          consume REST or SOAP api. Effective and proven track record of
          critical thinking, idea generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End or Back-End
            <span className="px-2">|</span> MERN <span className="px-2">|</span>
            MEAN <span className="px-2">| Firebase</span>
            <span className="px-2">|</span> API
            <span className="px-2">|</span> CMS
          </p>
          <p className="py-2">
            <span className="font-bold">Java Web Development</span>
            <span className="px-2">|</span> FTN informatika Novi sad
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Web Development</span>
            <span className="px-2">|</span>Novi Sad, Serbia
          </p>
          <p className="py-1 italic">Freelance Work (2019 - Current)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Designed and build responsiv web applications. Using NodeJS to
              construct REST API end-points and user authentication.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Platform migration managing DNS servers as well as MX records and
              ensuring a smooth migration process.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Royal Caribbean int.</span>
            <span className="px-2">|</span>Miami, Florida
          </p>
          <p className="py-1 italic">Sports & Entertiment</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Responsible for organizing leisure activities for onboard
              passengers as a member of the sports team.
            </li>
            <li>
              Work surrounding departments organizing treatment protocols and
              facilitate hands on training operations.
            </li>
            <li>
              Manage high stress 911 situations such as medical emergencies,
              high risc activities, and water accidents.
            </li>
            <li>
              Awarded &quot;Employee of the month&quot; for consistently going
              above and beyond expectations to ensure the best customer
              experience.
            </li>
          </ul>
        </div>
        {/* Experience */}
        {/*  <div className="py-6">
          <p className="italic">
            <span className="font-bold">CITY OF SHERMAN, TX</span>
            <span className="px-2">|</span>Sherman, TX
          </p>
          <p className="py-1 italic">Paramedic / Firefighter (2010 – 2019)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured proper implementation of firefighting techniques and
              practices including controlling and extinguishing fires, operating
              hose lines, and fire ground operations, ventilation, and search
              and rescue.
            </li>
            <li>
              Oversaw comprehensive understanding, operation, and maintenance of
              fire engines, ladder trucks, technical rescue apparatus, and
              response trailers.
            </li>
            <li>
              Performed ALS techniques as needed within emergency situations
              including the use of an esophageal or dual lumen airway device and
              oral intubation using laryngoscopy.
            </li>
            <li>
              Collaborated with a talented and high performing team of
              firefighters in high pressure and stressful situations as needed.
            </li>
            <li>
              Utilized proven and demonstrated knowledge of multiple
              certifications including Pediatric Advanced Life Support,
              Prehospital Trauma Life Support, and Advanced Cardiac Life
              Support, among others.
            </li>
          </ul>
        </div> */}
        <a
          href="/assets/jovanRCV.pdf"
          alt="CV pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="w-full p-4 text-gray-100 mt-4">
            Download pdf
          </button>
        </a>
      </div>
    </>
  );
};

export default resume;
