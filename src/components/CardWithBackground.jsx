import React, { useState } from "react";

function CardWithBackground(props) {
  const { title, image } = props;
  const [isHovered, setIsHovered] = useState(false);
  const styles = {
    backgroundImage: `url(${image})`,
  };
  // Event handler for when the mouse enters the div
  const handleMouseEnter = () => {
    setIsHovered(true);
    const shineElement = document.getElementById("shine2");
    shineElement.style["left"] = "200%";
  };

  // Event handler for when the mouse leaves the div
  const handleMouseLeave = () => {
    setIsHovered(false);
    const shineElement = document.getElementById("shine2");
    shineElement.style["left"] = "-100%";
  };
  return (
    <>
      <div
        style={styles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden w-64 h-36 m-6 flex justify-center items-center rounded-md drop-shadow-md bg-cover bg-center transition duration-150 ease-out hover:ease-in hover:scale-105 hover:cursor-pointer"
      >
        <div
          className={
            isHovered
              ? "opacity-40 absolute inset-0 bg-slate-950 transition duration-150 rounded-md"
              : "opacity-60 absolute inset-0 bg-slate-950 transition duration-150 rounded-md"
          }
        ></div>
        <div className="title tracking-wide text-xl brightness-100 text-slate-100 font-bold">{title}</div>
        <div
          id="shine2"
          className="absolute rotate-[30deg]  -top-full -left-full w-1/4 h-[300%] bg-gradient-to-r from-white/0 via-white/30  transition-all duration-700"
        ></div>
      </div>
    </>
  );
}

export default CardWithBackground;
