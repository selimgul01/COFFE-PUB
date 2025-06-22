import React from "react";
import { BiArrowToRight, BiChevronRight } from "react-icons/bi";
import { PiCoffee } from "react-icons/pi";

const HeroItem = ({ hero }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-center items-center pt-10 gap-5 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl">
          {hero.label1}{" "}
          <span className="font-pasifika bg-clip-text text-transparent bg-gradient-to-l from-light to-primary/75">
            {hero.label2}{" "}
          </span>
          {hero.label3}
        </h1>
        <div className="flex items-center justify-center space-x-2 px-4 py-3 rounded-full border bg-primary cursor-pointer  w-1/6">
          <span className="text-sm font-bold">VISIT</span>
          <BiChevronRight size={21} />
        </div>
      </div>{" "}
      <div className="md:min-h-[450px] min-h-[250px] flex justify-center relative">
        <img
          className="spin m-auto md:h-[400px] md:w-[400px] h-[250px] w-[250px] "
          src={hero.src}
        />
      </div>
    </div>
  );
};

export default HeroItem;
