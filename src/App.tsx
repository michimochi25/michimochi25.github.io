import { useState } from "react";
import { HomeComponent } from "./components/HomeComponent";
import { MainComponent } from "./components/MainComponent";

function App() {
  const [showMain, setShowMain] = useState(false);

  const view = (e: any) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;

    const layers = document.querySelectorAll(".layer");
    layers.forEach((layer, index) => {
      const depth = (index + 1) * 45;
      layer.setAttribute(
        "style",
        `transform: translateX(${-x * depth}px) translateY(${-y * depth}px);`
      );
    });
  };

  return (
    <div
      className="bg-[#19002a] w-screen h-screen flex flex-col justify-center items-center overflow-hidden"
      onMouseMove={view}
    >
      <HomeComponent showMain={showMain} setShowMain={setShowMain} />
      <MainComponent show={showMain} />
    </div>
  );
}

export default App;
