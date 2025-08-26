import { ProjectTypes } from "../../utils/ProjectTypes";
import { ProjectRoles } from "../../utils/ProjectRoles";
import { ProjectCollaborators } from "../../utils/ProjectCollaborators";

export const projectsData = [
  {
      Id: 23,
      Title: "Collection Infirmière",
      Type: ProjectTypes.PROFESSIONAL,
      Period: {
        start: "2025-01",
        end: "2025-08"
      },
      Technologies: ["Unity3D", "C#", "Unity Gaming Services"],
      MyRoles: [ProjectRoles.DEVELOPER],
      Collaborators: [
        {
          ...ProjectCollaborators.KEVIN_BLANC,
          roles: [ProjectRoles.LEAD_DEV]
        },
        {
          ...ProjectCollaborators.EMERIC_LABBE,
          roles: [ProjectRoles.DEVELOPER]
        },
        {
          ...ProjectCollaborators.REMY_CARIVENC,
          roles: [ProjectRoles.DEVELOPER]
        },
        {
          ...ProjectCollaborators.LUCAS_POUJARDIEU,
          roles: [ProjectRoles.WEB_DEVELOPER]
        },
        {
          ...ProjectCollaborators.KEVIN_BONNEAU,
          roles: [ProjectRoles.ARTIST]
        },
        {
          ...ProjectCollaborators.SEBASTIEN_KHAI,
          roles: [ProjectRoles.ARTIST]
        },
        {
          ...ProjectCollaborators.ERIC_MERESSE,
          roles: [ProjectRoles.UX_DESIGNER, ProjectRoles.PRODUCT_DESIGNER]
        },
        {
          ...ProjectCollaborators.EMMANUELLE_GOUOT,
          roles: [ProjectRoles.LEAD_PROJECT]
        },
        {
          ...ProjectCollaborators.LOAN_COURCOUL,
          roles: [ProjectRoles.LEAD_PROJECT]
        },
        {
          ...ProjectCollaborators.FLORIAN_BLONDEAU,
          roles: [ProjectRoles.CTO]
        },
      ],
      Keywords: [
        "web app",
        "healthcare", 
        "educational",
        "serious game",
        "simulation",
        "professional",
        "WebGL",
        "nursing training",
        "medical education",
        "Unity WebGL",
      ],
      Description: "Collection Infirmière is a WebGL educational application I developed as part of a multidisciplinary team at SimforHealth, featuring 10 interactive nursing training simulators built with Unity3D. Working alongside other developers, I contributed to implementing the core simulation systems using our internal OPI framework based on Unity Scriptable Objects and Addressable Assets. The project involved developing WebGL functionality for deployment on our training platform, creating interactive patient dialogue systems, and implementing various game mechanics including clinical assessment quizzes, object selection exercises, and procedural task simulations. I also worked on custom editor tools to streamline content integration and automate build processes for the different nursing training scenarios. Each simulator recreates specific professional environments (hospitals, patient rooms, care units, rehabilitation centers) with animated virtual patients, allowing nursing students to practice clinical decision-making through interactive storylines and immediate feedback systems aligned with the 10 core competencies of the French nursing curriculum.",
      CardImage: "/assets/images/projects/CollectionInfirmiereProject.webp",
      BannerImage: "/assets/images/projects/CollectionInfirmiereProject.webp",
      Url: "/projects/collection-infirmiere",
      Actions: [
        {
          label: "Use the app",
          url: "https://sso-my.simforhealth.com/authentication/login"
        },
        {
          label: "See the app website",
          url: "https://www.simforhealth.com/produits/collection-infirmiere/"
        }
      ],
      PDFDocuments: []
  },
  {
    Id: 22,
    Title: "Collection Aide-Soignante",
    Type: ProjectTypes.PROFESSIONAL,
    Period: {
      start: "2023-10",
      end: "2024-12"
    },
    Technologies: ["Unity3D", "C#", "Unity Gaming Services"],
    MyRoles: [ProjectRoles.DEVELOPER],
    Collaborators: [
      {
        ...ProjectCollaborators.KEVIN_BLANC,
        roles: [ProjectRoles.LEAD_DEV]
      },
      {
        ...ProjectCollaborators.EMERIC_LABBE,
        roles: [ProjectRoles.DEVELOPER]
      },
      {
        ...ProjectCollaborators.REMY_CARIVENC,
        roles: [ProjectRoles.DEVELOPER]
      },
      {
        ...ProjectCollaborators.LUCAS_POUJARDIEU,
        roles: [ProjectRoles.WEB_DEVELOPER]
      },
      {
        ...ProjectCollaborators.KEVIN_BONNEAU,
        roles: [ProjectRoles.ARTIST]
      },
      {
        ...ProjectCollaborators.SEBASTIEN_KHAI,
        roles: [ProjectRoles.ARTIST]
      },
      {
        ...ProjectCollaborators.ERIC_MERESSE,
        roles: [ProjectRoles.UX_DESIGNER, ProjectRoles.PRODUCT_DESIGNER]
      },
      {
        ...ProjectCollaborators.EMMANUELLE_GOUOT,
        roles: [ProjectRoles.LEAD_PROJECT]
      },
      {
        ...ProjectCollaborators.LOAN_COURCOUL,
        roles: [ProjectRoles.LEAD_PROJECT]
      },
      {
        ...ProjectCollaborators.FLORIAN_BLONDEAU,
        roles: [ProjectRoles.CTO]
      },
    ],
      Keywords: [
      "mobile app",
      "healthcare",
      "educational",
      "serious game",
      "simulation", 
      "iOS",
      "Android",
      "WebGL",
      "medical training",
      "Unity WebGL"
    ],
    Description: "Collection Aide-Soignante is a mobile educational application I developed as part of a 10-person team at SimforHealth, featuring 8 interactive healthcare training simulators built with Unity3D. Working alongside 3 other developers, I contributed to implementing the core simulation systems using our internal OPI framework based on Unity Scriptable Objects and Addressable Assets. The project involved developing cross-platform functionality for WebGL, iOS, and Android deployment, creating interactive patient dialogue systems, and implementing various game mechanics including clinical assessment quizzes, object selection exercises, and procedural task simulations. I also worked on custom editor tools to streamline content integration and automate build processes for the different healthcare training scenarios. Each simulator recreates specific professional environments (hospitals, care homes, patient residences) with animated virtual patients, allowing nursing students to practice clinical decision-making through interactive storylines and immediate feedback systems.",
    CardImage: "/assets/images/projects/CollectionAideSoignanteProject.webp",
    BannerImage: "/assets/images/projects/CollectionAideSoignanteProject.webp",
    Url: "/projects/collection-aide-soignante",
    Actions: [
      {
        label: "MultiLink",
        platforms: {
          ios: {
            label: "Download on App Store",
            url: "https://apps.apple.com/fr/app/collection-aide-soignante/id6449744960"
          },
          android: {
            label: "Get it on Google Play", 
            url: "https://play.google.com/store/apps/details?id=com.simforhealth.collectionas"
          },
          default: "ios"
        }
      },
      {
        label: "See the app website",
        url: "https://www.simforhealth.com/produits/collection-aide-soignante"
      }
    ],
    PDFDocuments: []
  },
  {
    Id: 21,
    Title: "Oakfolks",
    Type: ProjectTypes.SCHOOL,
    Period: {
      start: "2024-09",
      end: "2025-07"
    },
    Technologies: ["Unreal Engine 5", "C++", "Blueprint"],
    MyRoles: [ProjectRoles.LEAD_DEV],
    Collaborators: [
      {
        ...ProjectCollaborators.THIBAUT_LE_PERF,
        roles: [ProjectRoles.DEVELOPER]
      },
      {
        ...ProjectCollaborators.LOUIS_MERLDAUD,
        roles: [ProjectRoles.DEVELOPER]
      },
      {
        ...ProjectCollaborators.MATHIS_DESWARTE,
        roles: [ProjectRoles.DEVELOPER]
      },
      {
        ...ProjectCollaborators.SACHA_PESSIN,
        roles: [ProjectRoles.LEAD_GAME_DESIGNER, ProjectRoles.LEAD_PROJECT]
      },
      {
        ...ProjectCollaborators. JENNIFER_DESSELIER,
        roles: [ProjectRoles.GAME_DESIGNER]
      },
      {
        ...ProjectCollaborators.MATHIS_DESAGE,
        roles: [ProjectRoles.LEAD_ARTIST]
      },
      {
        ...ProjectCollaborators.MACELIE_FOUCHIER,
        roles: [ProjectRoles.ARTIST]
      },
      {
        ...ProjectCollaborators.THOMAS_BOUFRIOUA,
        roles: [ProjectRoles.ARTIST]
      },
      {
        ...ProjectCollaborators.LOIC_DUBAR,
        roles: [ProjectRoles.ARTIST]
      },
      {
        ...ProjectCollaborators.ARTHUR_FERNANDEZ,
        roles: [ProjectRoles.ARTIST]
      },
      {
        ...ProjectCollaborators.YVAN_ALVAREZ,
        roles: [ProjectRoles.ARTIST]
      },
      {
        ...ProjectCollaborators.ELIOTT_FIENGO,
        roles: [ProjectRoles.CONCEPT_ARTIST]
      },
      {
        ...ProjectCollaborators.LOLA_PIMENTEL,
        roles: [ProjectRoles.CONCEPT_ARTIST]
      },
      {
        ...ProjectCollaborators.DORIANE_DESSEVRE,
        roles: [ProjectRoles.CONCEPT_ARTIST]
      },
      {
        ...ProjectCollaborators.SARAH_FALLOUS,
        roles: [ProjectRoles.CONCEPT_ARTIST]
      },
      {
        ...ProjectCollaborators.TUHANA_PEA,
        roles: [ProjectRoles.CONCEPT_ARTIST]
      },
      {
        ...ProjectCollaborators.ARTHUR,
        roles: [ProjectRoles.SOUND_DESIGNER]
      },
      {
        ...ProjectCollaborators.PABLITO,
        roles: [ProjectRoles.SOUND_DESIGNER]
      },
      {
        ...ProjectCollaborators.VICTOR,
        roles: [ProjectRoles.SOUND_DESIGNER]
      }
    ],
    Keywords: [
      "cozy game",
      "cooperative",
      "crafting",
      "master degree",
      "nature",
      "mini-games",
      "miniature world",
      "3D",
      "game development",
      "student project",
    ],
    Description: "Oakfolks is our master's degree final project, led by a team of 19 people. This innovative local cooperative game makes collaboration technically mandatory: impossible to play solo, it requires constant synchronization between two players. In this miniature universe inspired by the photographic creations of David M. Bird, players embody small forest creatures made entirely of vegetation. In this macro world where every leaf becomes a blanket and every twig a precious tool, they work together to run a craft workshop serving a village of Becorns. Cooperation is expressed through unique synchronized mini-games: rhythmic tree sawing, collaborative log transport, and machines that require four hands to operate. Players explore to gather resources, transform them using specialized machines, and then assemble the creations requested by the inhabitants. Progress gradually unlocks new resources, machines, and recipes in a relaxing and positive atmosphere. Developed with Unreal Engine 5, this project features a unique art direction with a tilt-shift effect creating the illusion of a living model, where photographic realism meets the wonder of a miniature world. A cooperative experience where every small victory is shared and where unity literally makes strength.",
    CardImage: "/assets/images/projects/OakfolksGame.webp",
    BannerImage: "/assets/images/projects/OakfolksGame.webp",
    Url: "/projects/oakfolks-project",
    Actions: [
      {
        label: "View on GitHub",
        url: "https://github.com/LeoSery/Project-Becorn--UnrealEngine5-2024",
        showReadme: true
      },
      {
        label: "Download latest build (Gold)",
        url: "https://github.com/LeoSery/Project-Becorn--UnrealEngine5-2024/releases/download/BCR_Gold_1.14/BCR_Gold_1.14_2025-07-03_win64.zip"
      },
      {
        label: "See the project inspiration",
        url: "https://www.instagram.com/davidmbird/"
      },
      {
        label: "View project documentation",
        url: "https://leosery.github.io/Project-Becorn--UnrealEngine5-2024/"
      },
      {
        label: "View on Instagram",
        url: "https://www.instagram.com/oakfolks_game/"
      }
    ],
    PDFDocuments: [
    {
      title: "Final thesis - Designing and developing software applications",
      filename: "/assets/documents/projects/oakfolks/Rapport_RNCP_Bloc_2_Léo_Séry.pdf",
      description: "Thesis for my Level 7 RNCP qualification on how we designed the Oakfolks project, our master's degree final project.",
      visible: false
    },
    {
      title: "final thesis - Keeping the software application in operational condition",
      filename: "/assets/documents/projects/oakfolks/Rapport_RNCP_Bloc_4_Léo_Séry.pdf",
      description: "Thesis for my Level 7 RNCP qualification on how we managed and maintained our master's degree final project.",
      visible: false
    }
  ]
  },
  {
    Id: 20,
    Title: "Boids",
    Type: ProjectTypes.SCHOOL,
    Period: {
      start: "2025-02",
      end: "2025-04"
    },
    Technologies: ["Unreal Engine 5", "C++"],
    MyRoles: [ProjectRoles.DEVELOPER],
    Collaborators: [],
    Keywords: [
      "boids",
      "simulation",
      "flocking behavior",
      "swarm intelligence",
      "algorithm",
      "multithreading",
      "optimization",
      "3D",
      "AI",
      "student project",
      "master degree",
      "game development"
    ],
    Description: "A highly optimized flocking behavior simulation system implemented in Unreal Engine 5 using C++. This project recreates the classic Boids algorithm by Craig Reynolds with significant optimizations to support thousands of autonomous agents in real-time, built on principles from his paper: Steering Behaviors For Autonomous Characters.",
    References: [
      {
        text: "Steering Behaviors For Autonomous Characters",
        url: "https://www.red3d.com/cwr/steer/gdc99/"
      }
    ],
    CardImage: "/assets/images/projects/Boids.webp",
    BannerImage: "/assets/images/projects/Boids.webp",
    Url: "/projects/boids",
    Actions: [
      {
        label: "View on GitHub",
        url: "https://github.com/LeoSery/Boids--UnrealEngine5-2025",
        showReadme: true
      },
      {
        label: "Download",
        url: "https://github.com/LeoSery/Boids--UnrealEngine5-2025/releases/download/V1.0/Boids-V1.0_win64.rar"
      }
    ]
  },
  {
    Id: 19,
    Title: "GameDev Experiments",
    Type: ProjectTypes.SCHOOL,
    Period: {
      start: "2024-09",
      end: "2025-07"
    },
    Technologies: ["C++", "Vulkan", "GLSL"],
    MyRoles: [ProjectRoles.DEVELOPER],
    Collaborators: [],
    Keywords: [
      "Pool",
      "Multithreading",
      "Data-oriented design",
      "GLSL shaders",
      "Optimization",
      "Concurrent programming",
      "C++",
      "SIMD operations",
      "Game engine"
    ],
    Description: "This project gathers various small-scale game development experiments and tests that are too small to have their own dedicated repository but are valuable for learning purposes. It serves as a centralized space to collect my different C++ learning tests and technical discoveries made during the year 2024-2025.",
    CardImage: "/assets/images/projects/GameDevExperimentsProject.webp",
    BannerImage: "/assets/images/projects/GameDevExperimentsProject.webp",
    Url: "/projects/game-dev-experiments",
    Actions: [
      {
        label: "View on GitHub",
        url: "https://github.com/LeoSery/GameDev-Experiments--Cpp-2025",
        showReadme: true
      }
    ]
  },
  {
    Id: 18,
    Title: "Mario Galaxy Gravity",
    Type: ProjectTypes.SCHOOL,
    Period: {
      start: "2025-01",
      end: "2025-03"
    },
    Technologies: ["Unreal Engine 5", "C++"],
    MyRoles: [ProjectRoles.DEVELOPER],
    Collaborators: [
      {
          ...ProjectCollaborators.THIBAUT_LE_PERF,
          roles: [ProjectRoles.DEVELOPER]
      },
    ],
    Keywords: [
      "gravity system",
      "mario",
      "3D",
      "student project",
      "master degree",
      "game development",
      "Physics simulation"
    ],
    Description: "This project is an implementation of the gravity system from Super Mario Galaxy, created in C++ with Unreal Engine 5. It reproduces the specific gravity mechanism for each planet, allowing the player to walk on surfaces of different geometric shapes, with gravity always oriented perpendicular to the surface.",
    CardImage: "/assets/images/projects/MarioGalaxyGravity.webp",
    BannerImage: "/assets/images/projects/MarioGalaxyGravity.webp",
    Url: "/projects/mario-galaxy-gravity",
    Actions: [
      {
        label: "View on GitHub",
        url: "https://github.com/LeoSery/MarioGalaxyGravity--UnrealEngine5-2025",
        showReadme: true
      }
    ]
  },
  {
    Id: 17,
    Title: "Procedural Terrain Generation",
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
        url: "https://github.com/LeoSery/ProceduralTerrainGeneration--UnrealEngine5-2024",
        showReadme: true
      },
      {
        label: "Download",
        url: "https://github.com/LeoSery/ProceduralTerrainGeneration--UnrealEngine5-2024/releases/download/V1.0/v1.0_win64.zip"
      }
    ]
  },
  {
    Id: 16,
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
          roles: [ProjectRoles.GAME_DESIGNER, ProjectRoles.LEAD_PROJECT]
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
      }
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
        url: "https://github.com/LeoSery/Project-Poladroide--UnrealEngine5-2024",
        showReadme: true
      },
      {
        label: "See game on itch.io",
        url: "https://leosery.itch.io/poladroid"
      }
    ]
  },
  {
    Id: 15,
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
        url: "https://github.com/LeoSery/FrostEngine--OpenGL-2024",
        showReadme: true
      },
      {
        label: "View engine documentation",
        url: "https://leosery.github.io/FrostEngine--OpenGL-2024/"
      }
    ]
  },
  {
    Id: 14,
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
        url: "https://github.com/LeoSery/Conway-s-Game-of-Life-3D--Unity6-2024",
        showReadme: true
      },
      {
        label: "Download",
        url: "https://github.com/LeoSery/Conway-s-Game-of-Life-3D--Unity6-2024/releases/download/v1.30/GameOfLife3D_v1.30_win64.zip"
      }
    ]
  },
  {
    Id: 13,
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
        url: "https://github.com/LeoSery/AStar-PathFinding--UnrealEngine5-2024",
        showReadme: true
      }
    ]
  },
  {
    Id: 12,
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
    Id: 11,
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
        url: "https://github.com/LeoSery/TheProbablyEnchantedCavern--UnrealEngine5-2023",
        showReadme: true
      },
      {
        label: "Download",
        url: "https://github.com/LeoSery/TheProbablyEnchantedCavern--UnrealEngine5-2023/releases/download/V0.1/TheProbablyEnchantedCavern.rar"
      }
    ]
  },
  {
    Id: 10,
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
        url: "https://github.com/LeoSery/AR-Object-Control-Tool--Unity3DTool",
        showReadme: true
      },
      {
        label: "Download",
        url: "https://github.com/LeoSery/AR-Object-Control-Tool--Unity3DTool/releases/download/V3.0/AR-Object-Control-Tool-V3.rar"
      }
    ]
  },
  {
    Id: 9,
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
        url: "https://github.com/LeoSery/Sokoban--Unity3D-2022",
        showReadme: true
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
        url: "https://github.com/LeoSery/AR-Target-Indicator-Tool--Unity3DTool",
        showReadme: true
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
        url: "https://github.com/LeoSery/FlappyBird--Unity3D-2022",
        showReadme: true
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
        url: "https://github.com/LeoSery/Flight-Simulator-Unity3D",
        showReadme: true
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
        url: "https://github.com/LeoSery/EarthSaver--Unity3D-2019",
        showReadme: true
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
        url: "https://github.com/LeoSery/SnakeGame--Qt-2022",
        showReadme: true
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
        url: "https://github.com/LeoSery/Overcooked--Unity3D-2022",
        showReadme: true
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
        url: "https://github.com/LeoSery/Pong-Game-on-an-STM32",
        showReadme: true
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
        url: "https://github.com/LeoSery/RobotGame--Unity3D-2020",
        showReadme: true
      },
      {
        label: "Download", 
        url: "https://github.com/LeoSery/RobotGame--Unity3D-2020/releases/download/Executable/Bob.s.Adventure.zip"
      }
    ]
  }
];