import me from "../assets/me.png";

const MainComponent = ({ show }: { show: boolean }) => {
  return (
    show && (
      <div className="zoom-element scene w-xl max-w-screen scene flex flex-col justify-center items-center">
        <img src={me} className="w-[60%] min-w-xs layer"></img>
      </div>
    )
  );
};

export { MainComponent };
