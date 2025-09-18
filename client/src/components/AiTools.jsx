import React from "react";
import { AiToolsData } from "../assets/assets";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const AiTools = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <div className="px-4 sm:px-20 xl:px-32 my-24 ">
      <div className="text-center">
        <h1 className="font-semibold text-5xl text-gray-800">
          Powerful AI Tools
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto">
          Everything you need to create, enhance, and optimize your content with
          cutting-edge AI technology.
        </p>
      </div>

      <div className="flex flex-wrap mt-10 justify-center">
        {AiToolsData.map((tool, index) => (
          <div
            key={index}
            className="p-8 m-4 max-w-xs rounded-lg bg-[#FDFDFE] shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            onClick={() => user && navigate(tool.path)}
          >
            <tool.Icon
              className="w-12 h-12 p-3 text-white rounded-xl"
              style={{
                background: `linear-gradient(to bottom, ${tool.bg.from}, ${tool.bg.to})`,
              }}
            />
            <h3 className="nt-6 mb-3 text-lg font-semibold">{tool.title}</h3>
            <p>{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiTools;
