import { useState } from "react";
import { twMerge } from "tailwind-merge";

const HomeComponent = () => {
  const [visible, setVisible] = useState(true);
  const [zoomed, setZoomed] = useState(false);

  const handleClick = () => {
    setVisible(false);
    setTimeout(() => {
      setZoomed(true);
    }, 1500);
  };

  return (
    <div
      className={twMerge(
        "w-xl max-w-screen scene flex flex-col justify-center items-center",
        visible ? "" : "zoomed",
        zoomed ? "hidden" : ""
      )}
    >
      {visible && (
        <h1
          id="start"
          className="layer z-3 cursor-pointer bg-[#000000]"
          onClick={handleClick}
        >
          Press Start
        </h1>
      )}
      <div className="layer midground"></div>
      <div className="layer background"></div>
    </div>
  );
};

export { HomeComponent };
