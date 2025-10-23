import React from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaAmazon } from "react-icons/fa";
const Skill = () => {
  return (
    <div id="skill" className="p-10 md:P-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Skill</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572b6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaFigma color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRedis color="#FF4438" size={50} />
          </span>
        </div>
      <div>
          <div className="flex gap-10 bg-slate-950 bg-opacity-50 mt-4 rounded-lg p-4 items-center">
          <FaGoogle color="#4285F4" size={50} />
          <span className="text-white">
            <h2 className="leading-tight"> Software Engineer, Googel</h2>
            <p className="text-sm leading-tight font-thin">sep 2023 to present</p>
            <ul className="text-sm p-2">
                <li>-work as software Developer</li>
                <li> -SEO</li>
                 </ul>
          </span>
        </div>
        <div className="flex gap-10 bg-slate-950 bg-opacity-50 mt-4 rounded-lg p-4 items-center">
          <FaAmazon color="#FF9900" size={50} />
          <span className="text-white">
            <h2 className="leading-tight"> Software Engineer, Googel</h2>
            <p className="text-sm leading-tight font-thin">sep 2023 to present</p>
            <ul className="text-sm p-2">
                <li>-work as software Developer</li>
                <li> -SEO</li>
                 </ul>
          </span>
        </div>
        <div className="flex gap-10 bg-slate-950 bg-opacity-50 mt-4 rounded-lg p-4 items-center">
          <SiMongodb color="#47A248" size={50} />
          <span className="text-white">
            <h2 className="leading-tight"> Software Engineer, Googel</h2>
            <p className="text-sm leading-tight font-thin">sep 2023 to present</p>
            <ul className="text-sm p-2">
                <li>-work as software Developer</li>
                <li> -SEO</li>
                 </ul>
          </span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Skill;
