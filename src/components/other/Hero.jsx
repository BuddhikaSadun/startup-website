import React from "react";
import img from "../../assets/images/bg.jpg";

export default function Hero({ hero }) {
  return (
    <div className="relative px-20 py-20 shadow-md  overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm"
        style={{ backgroundImage: `url(${img})` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white min-h-[300px]">
        <h1 className="text-4xl font-bold mb-4">{hero.headline}</h1>
        <p className="text-lg max-w-2xl">{hero.subText}</p>
      </div>
    </div>
  );
}
