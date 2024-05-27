import React from "react";

import Loader from "./Loader";

const bananaPositions = [
  { top: "20%", left: "-10%" },
  { top: "50%", left: "-30%" },
  { top: "70%", left: "100%" },
  { top: "0%", left: "40%" },
  { top: "40%", left: "115%" },
  { top: "80%", left: "-10%" },
  { top: "20%", left: "100%" },
];

const GameComplete = ({ setScreen }) => {
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <Loader bananas={6} />
      <div className="relative">
        <img
          className="w-[500px]"
          src="https://res.cloudinary.com/djysychfq/image/upload/v1716782752/q3wmijlfjmu20ophh36d.svg"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/djysychfq/image/upload/v1716693360/t9zr3amolddnyzdwiodq.png"
          alt="monkey"
          className=" w-[300px] -translate-y-12 -translate-x-32 absolute top-1/2 left-1/2 transform"
        ></img>
        {bananaPositions.map((position, index) => (
          <img
            key={index}
            src="https://res.cloudinary.com/djysychfq/image/upload/v1716772749/sjva6djsoexxvio7kmt0.png"
            alt={`banana-${index}`}
            className="w-[100px] absolute"
            style={{
              top: position.top,
              left: position.left,
            }}
          ></img>
        ))}
      </div>
      <button
        onClick={() => setScreen("instructions")}
        className="absolute bottom-8 w-[370px] h-[130px]"
      ></button>
    </div>
  );
};

export default GameComplete;
