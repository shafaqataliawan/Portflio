import React from "react";
import banerImg from "../../assets/3.webp";

const PrijectCard = ({ title, main }) => {
  return (
    <div class="group w-80 h-96 [perspective:1000px]">
  <div class="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

    
    <div class="absolute inset-0 bg-[#0c0e19] text-white flex flex-col items-center justify-center rounded-2xl shadow-xl [backface-visibility:hidden]">
       <img className="p-4" src={banerImg} alt="" />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
        {title}
      </h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
      </div>
    </div>

    
    <div class="absolute inset-0 bg-[#465697] text-white flex flex-col items-center justify-center rounded-2xl shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
      <h2 class="text-2xl font-bold">Back Side</h2>
      <p class="text-sm">Here’s the back content.</p>
    </div>

  </div>
</div>

   

    
  );
};

export default PrijectCard;

