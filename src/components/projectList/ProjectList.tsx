import React from "react";
import projectList from "@/constants/projectList";
import { PiFolderOpen } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";

const ProjectList = () => {
  return (
    <section id="projects" className="py-20 mx-auto max-w-screen-lg md:py-32">
      <h3 className="font-sans font-semibold text-xl text-center text-hawkes-blue">
        My Noteworthy Projects
      </h3>
      <div className="mt-12 grid grid-cols-auto-fill-250 gap-3 ">
        {projectList.map((project, index) => (
          <div key={index} className="py-8 px-6 bg-midnight rounded-sm">
            <div className="flex justify-between mb-6">
              <PiFolderOpen size="2.22em" fill="#64ffda" />
              <a href={project.github} target="_blank">
                <FaGithub
                  size="1.1em"
                  className="fill-echo-blue hover:fill-aquamarine"
                />
              </a>
            </div>
            <h4 className="mb-2 text-lg text-hawkes-blue font-semibold">
              {project.title}
            </h4>
            <p className="mb-3 text-sm text-echo-blue">{project.description}</p>
            <ul className="flex flex-wrap gap-x-3 gap-y-1 mt-4 font-mono text-aquamarine text-3xs">
              {project.technologies.map((technology, index) => (
                <li key={index}>{technology}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
