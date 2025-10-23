import React from "react";
import Avtar from "../../assets/1.png"
import TextChanger from "../../TextChanger";

export default function Home() {
  return (
    <div id="home" className="text-white flex justify-between w-full items-start p-10 md:p20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChanger />
        </h1>
        <p className="text-sm md:text-2xl  tracking-tighter">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button className="mt-5 md:md-10 text-white py-0 px-3 text-sm  md:text-lg md:py-2
         md:px-4 hover:opacity-85 duration-300
          hover-scale-105 font-semibold rounded-3xl bg-[#465697]">Contact Me</button>
      </div>
      <div><img className="w-2/5" src={Avtar} alt="" /></div>
    </div>
  );
}
