import React from "react";
import ProjectItem from "./ProjectItem";
import FlightSimulatorImg from "/public/assets/projects/FlightSimulator.png";
import EarthSaverGameImg from "/public/assets/projects/EarthSaver.png";
import PongGameImg from "/public/assets/projects/PongGame.png";
import RobotGameImg from "/public/assets/projects/RobotGame.png";
import SnakeGameImg from "/public/assets/projects/SnakeGame.png";

function Main() {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-12 py-16">
        <p className="text-xl tracking-widest uppercase text-[#ff9f1c]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Flight Simulator"
            backgroundImg={FlightSimulatorImg}
            technos={"Unity3D / C#"}
            projectUrl="/flightsimulator"
          />
          <ProjectItem
            title="Earth Saver Game"
            backgroundImg={EarthSaverGameImg}
            technos={"Unity3D / C#"}
            projectUrl="/earthsaver"
          />
          <ProjectItem
            title="Pong Game"
            backgroundImg={PongGameImg}
            technos={"Unity3D / C#"}
            projectUrl="/pong"
          />
          <ProjectItem
            title="Robot Game"
            backgroundImg={RobotGameImg}
            technos={"Unity3D / C#"}
            projectUrl="/robotgame"
          />
          <ProjectItem
            title="Snake Game"
            backgroundImg={SnakeGameImg}
            technos={"Qt / C++"}
            projectUrl="/snake"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
