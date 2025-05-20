import me from "../assets/me.png";

const MainComponent = ({ show }: { show: boolean }) => {
  return (
    show && (
      <div className="flex justify-center relative">
        <div className="mt-15 typewriter absolute w-fit">
          <p className="anim-typewriter">Howdy, I'm Giselle</p>
          <p className="anim-typewriter delay-400">Computer Science @ UNSW</p>
          <p className="anim-typewriter delay-800">Winter Exchange @ UBC</p>
        </div>
        <div className="zoom-element scene w-xl max-w-screen scene flex flex-col justify-center items-center">
          <img src={me} className="w-[60%] min-w-xs layer z-2"></img>
        </div>
      </div>
    )
  );
};

export { MainComponent };
