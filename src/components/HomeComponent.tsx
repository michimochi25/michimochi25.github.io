import { useState } from "react";
import { twMerge } from "tailwind-merge";

type HomeComponentProps = {
  showMain: boolean;
  setShowMain: React.Dispatch<React.SetStateAction<boolean>>;
};

const HomeComponent = (props: HomeComponentProps) => {
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    setVisible(false);
    setTimeout(() => {
      props.setShowMain(true);
    }, 1000);
  };

  return (
    <div
      className={twMerge(
        "w-xl max-w-screen scene flex flex-col justify-center items-center",
        visible ? "" : "zoomed",
        props.showMain ? "hidden" : ""
      )}
    >
      {visible && (
        <h1
          id="start"
          className="layer z-3 cursor-pointer bg-[#000000] hover:scale-120"
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
