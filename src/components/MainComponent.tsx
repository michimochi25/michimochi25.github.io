import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import me from "../assets/me.png";

const MainComponent = ({ show }: { show: boolean }) => {
  const [render, setRender] = useState(false);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setRender(true);
        console.log("RENDER!");
      }, 1000);
    }
  }, [show]);

  return (
    show && (
      <div className="zoom-element scene w-xl max-w-screen scene flex flex-col justify-center items-center">
        <img
          onLoad={() => setRender(true)}
          src={me}
          className="w-[60%] min-w-xs layer"
        ></img>
      </div>
    )
  );
};

export { MainComponent };
