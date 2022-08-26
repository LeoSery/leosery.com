import FlightSimulatorImg from "/public/assets/images/projects/FlightSimulator.png";
import EarthSaverGameImg from "/public/assets/images/projects/EarthSaver.png";
import RobotGameImg from "/public/assets/images/projects/RobotGame.png";
import SnakeGameImg from "/public/assets/images/projects/SnakeGame.png";
import PongGameImg from "/public/assets/images/projects/PongGame.png";
import ProjectItem from "./ProjectItem";
import React from "react";

export default function Main() {
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
            projectUrl="/Projects/flight-simulator"
          />
          <ProjectItem
            title="Earth Saver Game"
            backgroundImg={EarthSaverGameImg}
            technos={"Unity3D / C#"}
            projectUrl="/Projects/earth-saver"
          />
          <ProjectItem
            title="Pong on an STM32"
            backgroundImg={PongGameImg}
            technos={"Unity3D / C#"}
            projectUrl="Projects/pong"
          />
          <ProjectItem
            title="Robot Game"
            backgroundImg={RobotGameImg}
            technos={"Unity3D / C#"}
            projectUrl="Projects/robot"
          />
          <ProjectItem
            title="Snake Game"
            backgroundImg={SnakeGameImg}
            technos={"Qt / C++"}
            projectUrl="Projects/snake"
          />
        </div>
      </div>
    </div>
  );
}
