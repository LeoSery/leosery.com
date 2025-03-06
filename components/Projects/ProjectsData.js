import { ProjectTypes } from "../../utils/ProjectTypes";
import { ProjectRoles } from "../../utils/ProjectRoles";
import { ProjectCollaborators } from "../../utils/ProjectCollaborators";

export const projectsData = [
  {
    Id: 14,
    Title: "Procedura Terrain Generation",
    Type: ProjectTypes.SCHOOL,
    Period: {
      start: "2024-12",
      end: "2025-01"
    },
    Technologies: ["Unreal Engine 5", "C++", "Blueprint"],
    MyRoles: [ProjectRoles.DEVELOPER],
    Collaborators: [
      {
          ...ProjectCollaborators.THIBAUT_LE_PERF,
          roles: [ProjectRoles.DEVELOPER]
      },
    ],
    Keywords: [
      "procedural",
      "terrain",
      "3D",
      "student project",
      "master degree",
      "game development",
      "perlin",
      "noise"
    ],
    Description: "This project is a student project implementing Procedural Terrain Generation with chunk system, realized in C++ with Unreal Engine 5 for our Master's 2 degree in game development. It generates an infinite terrain using Perlin noise, with dynamic chunk loading/unloading based on player position, and features a triplanar material system for realistic terrain texturing.",
    CardImage: "/assets/images/projects/ProceduralTerrainGeneration_2.webp",
    BannerImage: "/assets/images/projects/ProceduralTerrainGeneration.webp",
    Url: "/projects/procedural-terrain-generation",
    Actions: [
      {
        label: "View on GitHub",
        url: "https://github.com/LeoSery/ProceduralTerrainGeneration--UnrealEngine5-2024"
      },
      {
        label: "Download",
        url: "https://github.com/LeoSery/ProceduralTerrainGeneration--UnrealEngine5-2024/releases/download/V1.0/v1.0_win64.zip"
      }
    ]
  },
  {
    Id: 13,
    Title: "Poladroïd",
    Type: ProjectTypes.SCHOOL,
    Period: {
      start: "2024-03",
      end: "2024-05"
    },
    Technologies: ["Unreal Engine 5", "C++", "Blueprint"],
    MyRoles: [ProjectRoles.DEVELOPER],
    Collaborators: [
      {
          ...ProjectCollaborators.SACHA_PESSIN,
          roles: [ProjectRoles.DESIGNER, ProjectRoles.PROJECT_LEAD]
      },
      {
          ...ProjectCollaborators.LOUIS_MERLDAUD,
          roles: [ProjectRoles.DEVELOPER]
      },
      {
        ...ProjectCollaborators.MATHIEU_OUTIN,
        roles: [ProjectRoles.LEAD_DEV]
      },
      {
        ...ProjectCollaborators.MATHIEU_GOMES,
        roles: [ProjectRoles.ARTIST]
      },
      {
        ...ProjectCollaborators.QUENTIN_DAVID_DE_VIGNERTE,
        roles: [ProjectRoles.LEAD_ARTIST]
      },
      {
        ...ProjectCollaborators.DORIAN_BIJAYE,
        roles: [ProjectRoles.ARTIST]
      },
      {
        ...ProjectCollaborators.REMI_ANDREZ,
        roles: [ProjectRoles.ARTIST]
      },
      {
        ...ProjectCollaborators.LOIC_DUBAR,
        roles: [ProjectRoles.ARTIST]
      },
    ],
    Keywords: [
      "game",
      "TPS",
      "3D",
      "student project",
      "master degree",
      "game development"
    ],
    Description: "This game is a student project representing a 20-minute slice concept of a game made to validate a master's degree in game development. Poladroid is a TPS-camera traversal/stealth game in which the player takes on the role of a small robot. The action takes place in a near-future, dystopian Futurism, in a world seeking to break away from its roots. The character is one of the last of his kind, embodying the old world, but rejected and hunted. The action takes place in a factory-like building, and the aim of the game is to escape without being caught by the various robot guards/workers.",
    CardImage: "/assets/images/projects/PoladroidGame.webp",
    BannerImage: "/assets/images/projects/PoladroidGame.webp",
    Url: "/projects/poladroid",
    Actions: [
      {
        label: "View on GitHub",
        url: "https://github.com/LeoSery/Project-Poladroide--UnrealEngine5-2024"
      },
      {
        label: "See game on itch.io",
        url: "https://leosery.itch.io/poladroid"
      }
    ]
  },
  {
    Id: 12,
    Title: "Frost Engine",
    Type: ProjectTypes.SCHOOL,
    Period: {
      start: "2024-02",
      end: "2024-04"
    },
    Technologies: ["C++", "OpenGL", "GLFW", "glm"],
    MyRoles: [ProjectRoles.LEAD_DEV],
    Collaborators: [
      {
          ...ProjectCollaborators.MATHIEU_OUTIN,
          roles: [ProjectRoles.DEVELOPER]
      },
      {
          ...ProjectCollaborators.IDRYSS_JUDEAUX,
          roles: [ProjectRoles.DEVELOPER]
      }
    ],
    Keywords: [
      "engine",
      "game engine",
      "graphics",
      "rendering",
      "ECS",
      "entity component system",
      "2D",
      "student project",
      "master degree"
    ],
    Description: "Frost Engine is a game engine written in C++. It is based on the Entity Component System approach. It uses OpenGL for graphics rendering and Dear ImGui for the editor. This project was carried out as part of a school project for my Master 1 year.",
    CardImage: "/assets/images/projects/FrostEngineProject.webp",
    BannerImage: "/assets/images/projects/FrostEngineProject.webp",
    Url: "/projects/frost-engine",
    Actions: [
      {
        label: "View on GitHub",
        url: "https://github.com/LeoSery/FrostEngine--OpenGL-2024"
      },
      {
        label: "View engine documentation",
        url: "https://leosery.github.io/FrostEngine--OpenGL-2024/"
      }
    ]
  },
  {
    Id: 11,
    Title: "Game of Life 3D",
    Type: ProjectTypes.PERSONAL,
    Period: {
      start: "2024-08",
      end: "2024-10"
    },
    Technologies: ["Unity3D", "C#"],
    MyRoles: [ProjectRoles.DEVELOPER],
    Collaborators: [],
    Keywords: [
      "demo",
      "simulation",
      "cellular automaton",
      "3D",
      "optimization",
      "interactive",
    ],
    Description: "This project is a 3D implementation of Conway's Game of Life, realized in C# with Unity 6. It's a cellular automaton simulation where cells evolve in a 3D space according to simple rules, generating patterns over the course of iterations. The user can interact with the grid in real time, adding or deleting cells, adjusting simulation speed and exploring 3D space with a free-form camera. The project focuses on performance and optimization.",
    CardImage: "/assets/images/projects/GameOfLife3D.webp",
    BannerImage: "/assets/images/projects/GameOfLife3D.webp",
    Url: "/projects/game-of-life-3d",
    Actions: [
      {
        label: "View on GitHub",
        url: "https://github.com/LeoSery/Conway-s-Game-of-Life-3D--Unity6-2024"
      },
      {
        label: "Download",
        url: "https://github.com/LeoSery/Conway-s-Game-of-Life-3D--Unity6-2024/releases/download/v1.30/GameOfLife3D_v1.30_win64.zip"
      }
    ]
  },
  {
    Id: 10,
    Title: "A-star Pathfinding",
    Type: ProjectTypes.SCHOOL,
    Period: {
      start: "2024-10",
      end: "2024-11"
    },
    Technologies: ["Unreal Engine 5", "C++", "Blueprint"],
    MyRoles: [ProjectRoles.DEVELOPER],
    Collaborators: [],
    Keywords: [
      "demo",
      "pathfinding",
      "algorithm",
      "3D",
      "A*",
      "interactive",
      "student project",
      "master degree"
    ],
    Description: "This project is a student project implementing the A Pathfinding Algorithm*, realized in C++ with Unreal Engine 5 for my Master's 2 degree in game development. It's an interactive visualization where users can create obstacles, place start and end points, and observe the algorithm finding the optimal path in real-time. The project focuses on core A* implementation and basic visualization.",
    CardImage: "/assets/images/projects/AStarPathFinding.webp",
    BannerImage: "/assets/images/projects/AStarPathFinding.webp",
    Url: "/projects/a-star-pathfinding",
    Actions: [
      {
        label: "View on GitHub",
        url: "https://github.com/LeoSery/AStar-PathFinding--UnrealEngine5-2024"
      }
    ]
  },
  {
    Id: 9,
    Title: "ArLab",
    Type: ProjectTypes.PROFESSIONAL,
    Period: {
      start: "2023-01",
      end: "2023-09"
    },
    Technologies: ["Unity3D", "C#", "Vuforia"],
    MyRoles: [ProjectRoles.DEVELOPER],
    Collaborators: [
      {
          ...ProjectCollaborators.ADRIEN_CLUZEL,
          roles: [ProjectRoles.LEAD_DEV]
      },
      {
          ...ProjectCollaborators.MAXENCE_ROUILLET,
          roles: [ProjectRoles.LEAD_ARTIST]
      }
    ],
    Keywords: [
      "AR",
      "augmented reality",
      "professional",
      "work study",
      "mobile",
      "iOS",
      "3D",
      "Android",
      "Application",
      "bachlor degree"
    ],
    Description: "AR Lab is an augmented reality application that I developed during my 3rd year work-study program at YZAR. It enables sales professionals, technical staff and trainers to visualize products and concepts interactively.",
    CardImage: "/assets/images/projects/ArLabProject.webp",
    BannerImage: "/assets/images/projects/ArLabProject.webp",
    Url: "/projects/arlab",
    Actions: [
      {
        label: "See on Apple App Store",
        url: "https://apps.apple.com/fr/app/ar-lab/id1663786351"
      },
      {
        label: "See on Google Play Store",
        url: "https://play.google.com/store/apps/details?id=com.arlab.android"
      }
    ]
  },
  {
    Id: 8,
    Title: "The Probably Enchanted Cavern",
    Type: ProjectTypes.SCHOOL,
    Period: {
      start: "2023-03",
      end: "2023-03"
    },
    Technologies: ["Unreal Engine 5", "C++", "C#", "SQL", "Blueprint"],
    MyRoles: [ProjectRoles.DEVELOPER],
    Collaborators: [
      {
          ...ProjectCollaborators.TITOUAN_MATHIS,
          roles: [ProjectRoles.LEAD_DEV]
      },
      {
          ...ProjectCollaborators.LUCAS_MILH,
          roles: [ProjectRoles.DEVELOPER]
      },
      {
        ...ProjectCollaborators.ARTHUR_FERNANDEZ,
        roles: [ProjectRoles.ARTIST]
      },
      {
        ...ProjectCollaborators.LEA_SIGNORET,
        roles: [ProjectRoles.ARTIST]
      },
      {
        ...ProjectCollaborators.MATHIS_DESAGE,
        roles: [ProjectRoles.LEAD_ARTIST]
      },
      {
        ...ProjectCollaborators. ANDREA_MARIGNALE,
        roles: [ProjectRoles.ARTIST]
      }
    ],
    Keywords: [
      "game",
      "platformer",
      "API",
      "2D",
      "game jam",
      "student project",
      "bachelor degree"
    ],
    Description: "You play as a spirit named Goutie whose goal is to cross an probably enchanted cave. To help her in her quest, she will be able to use different power orbs: the Fire, Ice and Poison orb. Each of these orbs gives her a specific power to continue progressing through the level. But be careful, each power orb brings its counterpart. Make the best use of the available powers to reach the end of the level as quickly as possible. Find the power orbs to acquire new skills and allow Goutie to overcome the obstacles to reach the end of the level.",
    CardImage: "/assets/images/projects/TheProbablyEnchantedCavern.webp",
    BannerImage: "/assets/images/projects/TheProbablyEnchantedCavern.webp",
    Url: "/projects/the-probably-enchanted-cavern",
    Actions: [
      {
        label: "View on GitHub",
        url: "https://github.com/LeoSery/TheProbablyEnchantedCavern--UnrealEngine5-2023"
      },
      {
        label: "Download",
        url: "https://github.com/LeoSery/TheProbablyEnchantedCavern--UnrealEngine5-2023/releases/download/V0.1/TheProbablyEnchantedCavern.rar"
      }
    ]
  },
  {
    Id: 7,
    Title: "AR Control Tool",
    Type: ProjectTypes.PROFESSIONAL,
    Period: {
      start: "2022-12",
      end: "2023-02"
    },
    Technologies: ["Unity3D", "C#"],
    MyRoles: [ProjectRoles.DEVELOPER],
    Collaborators: [],
    Keywords: [
      "AR",
      "tool",
      "3D",
      "Unity package",
      "augmented reality",
      "bachelor degree"
    ],
    Description: "The AR-Object-Control-Tool is a tool for Unity3D that allows you to easily control your objects in your Unity3D projects. Just add the necessary scripts to your code, configure them following the documentation provided on the repository and you will be able to move, rotate and resize your objects in real time. This tool is easy to use and scalable, it supports touch devices and augmented reality.",
    CardImage: "/assets/images/projects/ARControlTool.webp",
    BannerImage: "/assets/images/projects/ARControlTool.webp",
    Url: "/projects/ar-control-tool",
    Actions: [
      {
        label: "View on GitHub",
        url: "https://github.com/LeoSery/AR-Object-Control-Tool--Unity3DTool"
      },
      {
        label: "Download",
        url: "https://github.com/LeoSery/AR-Object-Control-Tool--Unity3DTool/releases/download/V3.0/AR-Object-Control-Tool-V3.rar"
      }
    ]
  },
  {
    Id: 8,
    Title: "Sokoban",
    Type: ProjectTypes.SCHOOL,
    Period: {
      start: "2022-09",
      end: "2022-12"
    },
    Technologies: ["Unity3D", "C#"],
    MyRoles: [ProjectRoles.DEVELOPER],
    Collaborators: [],
    Keywords: [
      "game",
      "puzzle",
      "sokoban",
      "2D",
      "student project",
      "bachelor degree"
    ],
    Description: "Game made during my bachelor 3 year (2022/2023) for a Unity3D module at Ynov Bordeaux. In this sokoban type game, your goal is to move your character to push the crates to reach the markers on the ground. Once all the crates are placed on the ground, you have won.",
    CardImage: "/assets/images/projects/SokobanGame.webp",
    BannerImage: "/assets/images/projects/SokobanGame.webp",
    Url: "/projects/sokoban",
    Actions: [
      {
        label: "View on GitHub",
        url: "https://github.com/LeoSery/Sokoban--Unity3D-2022"
      }
    ]
  },
  {
    Id: 8,
    Title: "AR Target Indicator",
    Type: ProjectTypes.PROFESSIONAL,
    Period: {
      start: "2022-10",
      end: "2022-12"
    },
    Technologies: ["C#", "Unity3D"],
    MyRoles: [ProjectRoles.DEVELOPER],
    Collaborators: [],
    Keywords: [
      "AR",
      "tool",
      "Unity package",
      "augmented reality",
      "UI",
      "3D",
      "indicator",
      "personal project",
      "bachelor degree"
    ],
    Description: "The AR-Target-Indicator-Tool for Unity3D allows you to display a marker on your UI to indicate where a predefined target is located.",
    CardImage: "/assets/images/projects/ARTargetIndicator.webp",
    BannerImage: "/assets/images/projects/ARTargetIndicator.webp",
    Url: "/projects/ar-target-indicator",
    Actions: [
      {
        label: "View on GitHub",
        url: "https://github.com/LeoSery/AR-Target-Indicator-Tool--Unity3DTool"
      }
    ]
  },
  {
    Id: 7,
    Title: "Flappy Bird",
    Type: ProjectTypes.SCHOOL,
    Period: {
      start: "2022-10",
      end: "2023-01"
    },
    Technologies: ["Unity3D", "C#"],
    MyRoles: [ProjectRoles.DEVELOPER],
    Collaborators: [],
    Keywords: [
      "game",
      "flappy bird",
      "2D",
      "student project",
      "bachelor degree"
    ],
    Description: "Game made during my bachelor 3 year (2022/2023) for a Unity3D module at Ynov Bordeaux. In this flappy bird realized under unity, you will have to dodge the pipes which arrives not your right while pressing on the space key. The pipes can arrive with different heights. You score points when you manage to cross pipes without colliding with one, if you collide with one, you lose.",
    CardImage: "/assets/images/projects/FlappyBirdGame.webp",
    BannerImage: "/assets/images/projects/FlappyBirdGame.webp",
    Url: "/projects/flappy-bird",
    Actions: [
      {
        label: "View on GitHub",
        url: "https://github.com/LeoSery/FlappyBird--Unity3D-2022"
      },
      {
        label: "Download",
        url: "https://github.com/LeoSery/FlappyBird--Unity3D-2022/releases/download/v1.0/FlappyBird_V1.0.rar"
      }
    ]
  },
  {
    Id: 6,
    Title: "Flight Simulator",
    Type: ProjectTypes.SCHOOL,
    Period: {
      start: "2022-03",
      end: "2022-05"
    },
    Technologies: ["Unity3D", "C#", "SQL"],
    MyRoles: [ProjectRoles.DEVELOPER],
    Collaborators: [
      {
          ...ProjectCollaborators.FABIAN_INGREMEAU,
          roles: [ProjectRoles.LEAD_DEV]
      },
      {
          ...ProjectCollaborators. MATHIAS_FLAMENT,
          roles: [ProjectRoles.DEVELOPER]
      }
    ],
    Keywords: [
      "game",
      "simulator",
      "multiplayer",
      "API",
      "3D",
      "local multiplayer",
      "physics",
      "student project",
      "bachelor degree"
    ],
    Description: "Game made for the end of year project during the bachelor year 2 (2021/2022). The Dev project was to develop a project in a limited time, so we decided to make a flight simulator under Unity3D. In this project, you can take off your plane and control it on 3 different axes. control the flaps, brake and pull and play with your friends in local multiplayer.",
    CardImage: "/assets/images/projects/FlightSimulator.webp",
    BannerImage: "/assets/images/projects/FlightSimulator.webp",
    Url: "/projects/flight-simulator",
    Actions: [
      {
        label: "View on GitHub",
        url: "https://github.com/LeoSery/Flight-Simulator-Unity3D"
      }
    ]
  },
  {
    Id: 5,
    Title: "Earth Saver Game",
    Type: ProjectTypes.PERSONAL,
    Period: {
      start: "2019-03",
      end: "2019-07"
    },
    Technologies: ["Unity3D", "C#"],
    MyRoles: [ProjectRoles.DEVELOPER],
    Collaborators: [],
    Keywords: [
      "game",
      "low poly",
      "3D",
      "personal project",
      "first game"
    ],
    Description: "Game made during the year 2019 to have fun and learn Unity3D. Small low poly game, where the goal is to dodge meteorites to prevent them from hitting the planet earth. In this project, you can drag the planet with your mouse to move it. You have to make the meteorites fall into the water. If meteorites fall on continents, humanity loses life. If the life of humanity reaches 0%, you lose.",
    CardImage: "/assets/images/projects/EarthSaver.webp",
    BannerImage: "/assets/images/projects/EarthSaver.webp",
    Url: "/projects/earth-saver",
    Actions: [
      {
        label: "View on GitHub",
        url: "https://github.com/LeoSery/EarthSaver--Unity3D-2019"
      }
    ]
  },
  {
    Id: 4,
    Title: "Snake Game",
    Type: ProjectTypes.SCHOOL,
    Period: {
      start: "2022-02",
      end: "2022-04"
    },
    Technologies: ["C++", "Qt"],
    MyRoles: [ProjectRoles.DEVELOPER],
    Collaborators: [],
    Keywords: [
      "game",
      "snake",
      "Qt",
      "2D",
      "desktop",
      "student project",
      "bachelor degree"
    ],
    Description: "Game made during the YDAYS Ynov of 2021-2022. This game was made for my end-of-year project to show what I was able to learn in C++ during this course. it was made with the help of Qt. You can move the snake to eat the fruits that will appear randomly on the game grid, if you eat a fruit, the counter increases but if you eat yourself you lose.",
    CardImage: "/assets/images/projects/SnakeGame.webp",
    BannerImage: "/assets/images/projects/SnakeGame.webp",
    Url: "/projects/snake",
    Actions: [
      {
        label: "View on GitHub",
        url: "https://github.com/LeoSery/SnakeGame--Qt-2022"
      },
      {
        label: "Download",
        url: "https://github.com/LeoSery/SnakeGame--Qt-2022/releases/download/v1.0/SnakeGameQt_V0.1.rar"
      }
    ]
  },
  {
    Id: 3,
    Title: "Overcooked",
    Type: ProjectTypes.SCHOOL,
    Period: {
      start: "2022-10",
      end: "2022-12"
    },
    Technologies: ["Unity3D", "C#"],
    MyRoles: [ProjectRoles.DEVELOPER],
    Collaborators: [],
    Keywords: [
      "game",
      "overcooked",
      "3D",
      "student project",
      "bachelor degree"
    ],
    Description: "Game made during my bachelor 3 year (2022/2023) for a Unity3D module at Ynov Bordeaux. You play as a character who can use the ingredients at his disposal to make the recipes that arrive. You need to get the vegetables from a vending machine and then cut them. Then if the vegetable can be cooked, you need to put it in a pan and then put the pan on the stovetop to cook the ingredient. Once your ingredient is cooked, you can put it on a plate, so you can combine it with other foods. Once your plate contains all the ingredients called for in the recipe, you can take the dish to the delivery counter.",
    CardImage: "/assets/images/projects/OverCoockedGame.webp",
    BannerImage: "/assets/images/projects/OverCoockedGame.webp",
    Url: "/projects/overcooked",
    Actions: [
      {
        label: "View on GitHub",
        url: "https://github.com/LeoSery/Overcooked--Unity3D-2022"
      },
      {
        label: "Download",
        url: "https://github.com/LeoSery/Overcooked--Unity3D-2022/releases/download/Builds/Overcooked_V1.0.rar"
      }
    ]
  },
  {
    Id: 2,
    Title: "Pong on an STM32",
    Type: ProjectTypes.SCHOOL,
    Period: {
      start: "2022-03",
      end: "2022-03"
    },
    Technologies: ["Unity3D", "C#", "C", "STM32 Card", "CubeMX"],
    MyRoles: [ProjectRoles.LEAD_DEV],
    Collaborators: [
      {
          ...ProjectCollaborators.MATHIAS_FLAMENT,
          roles: [ProjectRoles.DEVELOPER]
      }
    ],
    Keywords: [
      "game",
      "pong",
      "embedded",
      "IOT",
      "2D",
      "hardware",
      "STM32",
      "student project",
      "bachelor degree"
    ],
    Description: "Game made during my bachelor year 2 (2021/2022) for an IOT course at Ynov. The goal of the project was to create an application that could be controlled from an STM32 programmable card. So I decided to make a Pong game, controllable with 2 joysticks. on the card a script written in C makes it possible to recover the values returned by the joysticks and the game is made under Unity3D with C# which reads the values of the joysticks to move the paddles",
    CardImage: "/assets/images/projects/PongGame.webp",
    BannerImage: "/assets/images/projects/PongGame.webp",
    Url: "/projects/pong",
    Actions: [
      {
        label: "View on GitHub",
        url: "https://github.com/LeoSery/Pong-Game-on-an-STM32"
      }
    ]
  },
  {
    Id: 1,
    Title: "Robot Game",
    Type: ProjectTypes.SCHOOL,
    Period: {
      start: "2021-04",
      end: "2022-03"
    },
    Technologies: ["Unity3D", "C#"],
    MyRoles: [ProjectRoles.DEVELOPER],
    Collaborators: [],
    Keywords: [
      "game",
      "3D",
      "third person",
      "student project",
      "bachelor degree"
    ],
    Description: "Game made during my year of bachelor 1 (2020/2021) for the YDAYS Ynov. The project includes A third person type camera system controllable with the mouse. Character movement via the W,A,S,D keys. Jumping and breathing animation are available. And a pause menu to quit or resume the game.",
    CardImage: "/assets/images/projects/RobotGame.webp",
    BannerImage: "/assets/images/projects/RobotGame.webp",
    Url: "/projects/robot",
    Actions: [
      {
        label: "View on GitHub", 
        url: "https://github.com/LeoSery/RobotGame--Unity3D-2020"
      },
      {
        label: "Download", 
        url: "https://github.com/LeoSery/RobotGame--Unity3D-2020/releases/download/Executable/Bob.s.Adventure.zip"
      }
    ]
  }
];