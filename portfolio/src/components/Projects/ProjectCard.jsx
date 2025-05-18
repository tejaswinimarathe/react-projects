import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, main, src, demoLink, codeLink }) => {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-xl overflow-hidden w-full max-w-sm transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="w-full h-48 md:h-56 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src={src}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div className="p-4 text-white flex flex-col">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-4">{main}</p>
        <div className="flex gap-3 flex-wrap mt-4">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-full transition duration-200"
            >
              <FaExternalLinkAlt />
              Demo
            </a>
          )}
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white text-sm px-4 py-2 rounded-full transition duration-200"
            >
              <FaGithub />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

