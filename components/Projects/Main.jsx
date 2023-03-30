import FlightSimulatorImg from "/public/assets/images/projects/FlightSimulator.png";
import EarthSaverGameImg from "/public/assets/images/projects/EarthSaver.png";
import FlappyBirdImg from "/public/assets/images/projects/FlappyBirdGame.png";
import OvercookedImg from "/public/assets/images/projects/OverCoockedGame.png";
import SokobanImg from "/public/assets/images/projects/SokobanGame.png";
import RobotGameImg from "/public/assets/images/projects/RobotGame.png";
import SnakeGameImg from "/public/assets/images/projects/SnakeGame.png";
import PongGameImg from "/public/assets/images/projects/PongGame.png";
import ARControlToolImg from "/public/assets/images/projects/ARControlTool.png";
import ARTargetIndicatorImg from "/public/assets/images/projects/ARTargetIndicator.png";
import TheProbablyEnchantedCavernImg from "/public/assets/images/projects/TheProbablyEnchantedCavern.png";
import ProjectItem from "./ProjectItem";
import React from "react";

export default function Main() {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-12 py-16">
        <p className="text-xl tracking-widest uppercase text-[#ff9f1c]">
          Projects
        </p>
        <h2 className="py-4 text-gray-700 dark:text-[#BDB7AF]">
          What I&apos;ve Built
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="The Probably Enchanted Cavern"
            backgroundImg={TheProbablyEnchantedCavernImg}
            technos={"Unreal Engine 5 / C++"}
            projectUrl="/Projects/the-probably-enchanted-cavern"
          />
          <ProjectItem
            title="AR Control Tool"
            backgroundImg={ARControlToolImg}
            technos={"Unity3D / C#"}
            projectUrl="/Projects/ar-control-tool"
          />
          <ProjectItem
            title="Sokoban"
            backgroundImg={SokobanImg}
            technos={"Unity3D / C#"}
            projectUrl="/Projects/sokoban"
          />
          <ProjectItem
            title="AR Target Indicator"
            backgroundImg={ARTargetIndicatorImg}
            technos={"Unity3D / C#"}
            projectUrl="/Projects/ar-target-indicator"
          />
          <ProjectItem
            title="Flappy Bird"
            backgroundImg={FlappyBirdImg}
            technos={"Unity3D / C#"}
            projectUrl="/Projects/flappy-bird"
          />
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
          <ProjectItem
            title="Overcooked"
            backgroundImg={OvercookedImg}
            technos={"Unity3D / C#"}
            projectUrl="Projects/overcooked"
          />
        </div>
      </div>
    </div>
  );
}
