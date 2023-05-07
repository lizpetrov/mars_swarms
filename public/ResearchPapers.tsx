export enum PaperCategory {
    Finding,
    Gathering,
    Building,
    Maintaining,
}

export interface ResearchPaper {
    title: string;
    authors: string[];
    abstract: string;
    tags: string[];
    category: PaperCategory;
    image: string;
    link: string;

    // casual explanations
    casualHeader: string;
    casualBody: string;
}

// our source of truth for all the research papers :)
export const researchPapers: ResearchPaper[] = [

    // FINDING
    {
        title: "Marsbee - Swarm of Flapping Wing Flyers for Enhanced Mars Exploration",
        authors: ["Chang-kwon Kang et al"],
        abstract: "Mars exploration has received significant interest from academia, industry, government, and the general public. Despite continued interest, flying on Mars remains challenging, mainly due to the ultra-thin Martian atmospheric density. Although the gravitational acceleration on Mars is 38 percent of Earth's 9.8 meters per second squared, the Martian atmospheric density is only 1.3 percent of the air density on Earth. The aerodynamic forces are proportional to the ambient fluid density. Therefore, flying near the surface of Mars has been considered nearly impossible. The proposed mission architecture (Fig. 1) consists of a Mars rover (already existing) that serves as a mobile base for Marsbees - a deployable swarm of small bio-inspired flapping wing vehicles. In one ConOps scenario, each Marsbee would carry an integrated stereographic video camera and the swarm could construct a 3D topographic map of the local surface for rover path planning. These flying scouts would provide a \"third-dimension\" to the rover capabilities. In other scenarios, each part of the swarm of Marsbees could carry pressure and temperature sensors for atmospheric sampling, or small spectral analyzers for identification of mineral outcroppings. In each scenario, the rover acts as a recharging and deployment/return station and data and communication hub. Human exploration of Mars is one of the major objectives of NASA and commercial entities such as SpaceX and Boeing. The identified innovations unique to the bio-inspired flapping Marsbee provide viable multi-mode flying mobility for Martian atmospheric and terrain exploration. A swarm of Marsbees provides an enhanced reconfigurable Mars exploration system that is resilient to individual component failures. These Marsbees can carry sensors and wireless communication devices in combination with a Mars rover and helicopters. These enhanced sensing and information gathering abilities can contribute to the following NASA Mars mission objectives: i) \"Determine the habitability of an environment\", ii) \"Obtain surface weather measurements to validate global atmospheric models\", and iii) \"Prepare for human exploration on Mars.\" Various commercial entities, e.g. SpaceX and Boeing, are investing in technologies to transport humans to Mars.",
        category: PaperCategory.Finding,
        image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/02/13/marsbee-mars.jpg",
        tags: ["NASA", "NASA Innovative Advanced Concepts", "University of Alabama", "flying", "bioinspired"],

        casualHeader: "Marsbee - Swarm of Flapping Wing Flyers for Enhanced Mars Exploration",
        casualBody: "Flying bees on Mars?! This is a NASA project that aims to create a swarm of flying robots that can fly around Mars and collect data. The project is still in the early stages, but it is a very exciting project that could lead to a new way of exploring Mars using the mechanisms of swarm flight.",

        link: "https://kanglab.uah.edu/marsbees",
    },
    {
        title: "NASA Swarmies",
        authors: ["Melanie Moses, Kurt Leucht, et al"],
        abstract: "Swarmies are small robotic vehicles equipped with sensors, a webcam, GPS system, and Wi-Fi antenna. They operate autonomously and can be programmed to communicate and interact as a collective swarm. Swarmies present the potential to dramatically improve the ability for robots to efficiently locate, identify and collect resources over large and previously unexplored territory. In addition to being the most effective way to scour large territories for resources, robotic swarms are more robust, flexible, and scalable than monolithic robots operating alone.",
        category: PaperCategory.Finding,
        image: "https://www.nasa.gov/sites/default/files/styles/side_image/public/thumbnails/image/2-41700441281_7dffd249cc_o.jpg?itok=yU3cyRCU",
        tags: ["NASA", "NASA Minority and Research Education Program", "University of New Mexico", "NASA Swamp Works", "terrestrial"],

        casualHeader: "NASA Swarmies - a Way to Get Students Involved",
        casualBody: "NASA Swarmies was a competition for college students that ran between 2015-2019, involving more than 40 colleges and having a big STEM outreach component. The goal of the competition was to create a swarm of robots that could work together to find resources in a setting with obstacles, \"designed to engage students in developing algorithms for robotic resource collection to support human space exploration\". Each robot was controlled independently, could leave digital trails for other robots, and were modeled on ant behavior. ",

        link: "https://swarmathon.cs.unm.edu/",
    },
    {
        title: "NASA Ants",
        authors: ["Giovanni Beltrame et al"],
        abstract: "The Making Innovative Space Technology (MIST) Lab is \"devoted to the advancement of computer and data handling technology for the space segment\". The lab is located at Polytechnique Montreal, and is a collaborates with the European Space Agency (ESA). The lab is currently working swarms for mapping extra-terrestrial surfaces. The lab has explored multiple robot types, from walking to more rover-like, and has tested on Martian-like geology with the ESA.",
        category: PaperCategory.Finding,
        image: "./images/MISTRobots.png",
        tags: ["Polytechnique Montreal", "ESA", "MIST", "terrestrial"],

        casualHeader: "Terrestrial Swarms for Surface and Cave Exploration",
        casualBody: "The MIST (Making Innovative Space Technology) lab in Montreal is looking into semi-autonomous swarms for the exploration of the surface and of subterranean cave systems, which may contain resources and be outposts for living. The lab has explored multiple robot types, from walking to more rover-like, and has tested on Martian-like geology with the ESA.",

        link: "https://www.polymtl.ca/carrefour-actualite/en/blogue/roaming-robot-swarms-set-explore-lunar-and-martian-caves",
    },
    // {
    //     title: "NASA Ants",
    //     authors: ["Chang-kwon Kang et al"],
    //     abstract: "About the Swarmies mission",
    //     category: PaperCategory.Finding,
    //     image: "https://www.researchgate.net/publication/289212539/figure/fig1/AS:472121781559297@1489574012432/Possible-rover-formation-for-Martian-swarm-exploration.png",
    //     tags: ["NASA", "NASA Innovative Advanced Concepts", "University of Alabama", "flying", "bioinspired"],

    //     casualHeader: "NASA Ants - reconfigurable robots",
    //     casualBody: "Started by NASA...",

    //     link: "https://kanglab.uah.edu/marsbees",
    // },
    {
        title: "JPL Swimming Robots",
        authors: ["Ethan Schaler et al"],
        abstract: "Someday, a swarm of cellphone-size robots could whisk through the water beneath the miles-thick icy shell of Jupiter’s moon Europa or Saturn’s moon Enceladus, looking for signs of alien life. Packed inside a narrow ice-melting probe that would tunnel through the frozen crust, the tiny robots would be released underwater, swimming far from their mothercraft to take the measure of a new world. Not yet part of any NASA mission, the early-stage SWIM concept envisions wedge-shaped robots, each about 5 inches (12 centimeters) long and about 3 to 5 cubic inches (60 to 75 cubic centimeters) in volume. About four dozen of them could fit in a 4-inch-long (10-centimeter-long) section of a cryobot 10 inches (25 centimeters) in diameter, taking up just about 15% of the science payload volume. That would leave plenty of room for more powerful but less mobile science instruments that could gather data during the long journey through the ice and provide stationary measurements in the ocean.",
        category: PaperCategory.Finding,
        image: "./images/jplSwimming.png",
        tags: ["JPL", "NASA Innovative Advanced Concepts", "swimming"],

        casualHeader: "JPL Swimming Robots",
        casualBody: "Started by JPL to explore the waters of far off moons, such as Jupiter's moon Europa, this conceptual project imagines the use of dozens of small robots that can swim through the water and collect data. In contrast to other plans of single large submarine explorers. these robots are redundant - if one breaks down, the mission will not end. And with a swarm of swimming robots, we will be able to explore a much larger area than a single robot. Though water-based, these robots may use similar swarm algorithms as Ants or Bees.",

        link: "https://www.jpl.nasa.gov/news/swarm-of-tiny-swimming-robots-could-look-for-life-on-distant-worlds",
    },


    // GATHERING
    {
        title: "Offworld",
        authors: ["Offworld Team"],
        abstract: "Offworld is a startup \"extracting critical minerals and materials on Earth and in Space using swarms of intelligent industrial robots\".",
        category: PaperCategory.Gathering,
        image: "https://static.wixstatic.com/media/2a3fd2_54989a9974344e4cbbae545aec38ebee~mv2.png/v1/fill/w_1772,h_822,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/2a3fd2_54989a9974344e4cbbae545aec38ebee~mv2.png",
        tags: ["Startup", "NSF", "Mining"],

        casualHeader: "Offworld - Startups Join the Research",
        casualBody: "As mining is becoming economically viable in space, startups are joining the research. Offworld is a startup \"extracting critical minerals and materials on Earth and in Space using swarms of intelligent industrial robots\", making small specialized robots that can work together to mine regolith. They have a grant from the National Science Foundation, and will potentially partner with space agencies in the future.",

        link: "https://www.offworld.ai/",
    },
    {
        title: "Sand Collecting Swarm Robots",
        authors: ["Jan Dierckx, Xavier De Kestelier et al"],
        abstract: "A Smart Geometry (architectural group) hackathon project, this project imagines a swarm of robots that move piles of sand from one location to another.",
        category: PaperCategory.Gathering,
        image: "./images/SmartGeometeryGathering.png",
        tags: ["Smart Geometry", "architecture", "gathering"],

        casualHeader: "Design Experiments - Robots to Collect Resources",
        casualBody: "Built at a hackathon for the design collective Smart Geometry, this project explores the use of robots with scoopers that work in a swarm to bring resources from one location to another. This could be used to gather resources from the surface of Mars and bring them to the build site.Through this project we also see architects joining in ideating about the future of habitat construction - Mars is not just a place for scientists, but also for designers.",

        link: "https://youtu.be/j_GzkjHtFiA?t=640",
    },


    // BUILDING
    {
        title: "HASSEL",
        authors: ["Chang-kwon Kang et al"],
        abstract: 'Implementation of Robotics and Automation has revolutionised the Manufacturing Industry, generating unprecedented levels of efficiency, boosted productivity and lower levels of risks. As automation begins to seamlessly integrate and embed in various home applications, uptake in the AEC (Architecture, Engineering, Construction) Industry has been slow, only limited to off site fabrication. With this in mind, the departure point of the research investigation then lies in the identification of opportunities for on-site applications of robotics in construction. The paper proposes a new method of construction based on concepts of reusability and reconfigurability, reenvisioning operational life cycles in conventional, industry practices. An evaluation of industry and academic precedents of robotic applications presented an opportunity to propose a new conceptual framework for a reconfigurable, modular robotic swarm system that is comprised of an interchangeable “toolkit of parts”. Application of the framework was first developed for NASA’s 3D Printing Habitat Centennial Challenge, which manifested as an ecosystem of robotic assemblies that dynamically adapts to complete a multitude of tasks in the construction of a 3D Printed Shell Structure. The case study application was selected due to the extreme operational requirements such as size and logistical challenges, multiple levels of redundancies and adoption of “In-Situ Resource utilisation” principles.',
        category: PaperCategory.Building,
        image: "https://parametric-architecture.com/wp-content/uploads/2020/08/PA_The_Innovation_Behind_Hassell_EOC_Settlement_Proposal_for_Mars-_07.jpg",
        tags: ["Hassel", "NASA Centennial Challenge", "modular robots"],

        casualHeader: "Modular Swarm Robots",
        casualBody: "Architects have become involved in NASA competitions to imagine future settlements on Mars. Hassel Studio imagines a swarm of robots that can build a habitat using 3D printing, where the robots themselves are modular and assemble into swarms of robots that can accomplish different tasks, such as digging, carrying, or printing.",

        link: "https://www.hassellstudio.com/uploads/A-Reconfigurable-Modular-Swarm-Robotic-System-for-ISRUIn-Situ-Resource-Utilisation-Autonomous-3D-Printing-in-Extreme-Environments.pdf" // "https://www.hassellstudio.com/project/nasa-3d-printed-habitat-challenge",
    },
    {
        title: "SEARCH Architects Mars House",
        authors: ["SEArch (Space Exploration Architecture)", "Clouds AO (Clouds Architecture Office)"],
        abstract: "SEArch+ (Space Exploration Architecture) and Clouds AO, an architecture and space research collective, were awarded the top prize in the NASA and America Makes sponsored competition for a 3D Printed Habitat Challenge for Mars. The competition asked teams to design a habitat for four crew members while highlighting 3D printing techniques and using material indigenous to Mars. Recognizing that water is the building block to life, the team used a ‘follow the water’ approach to conceptualize, site and construct their design. Mars Ice House was born from the imperative to bring light and a connection to the outdoors into the vocabulary of Martian architecture. The winning proposal stood out as one of the few entries not to bury the habitat beneath regolith, instead mining the anticipated abundance of subsurface ice in the northern regions to create a thin vertical ice shell capable of protecting the interior habitat from radiation while celebrating life above ground.",
        category: PaperCategory.Building,
        image: "https://images.squarespace-cdn.com/content/v1/56a6579ab204d52e0646b187/1483628975137-SJKSE9UV8IFSK6M51SMC/Mars-Ice-House_section_lr_2000.jpg?format=2500w",
        tags: ["NASA Centennial Challenge", "SEARCH Architects"],

        casualHeader: "Swarm Robots for Ice House",
        casualBody: "Another architectural concept, this concept explores the use of swarm robotics for 3d printing a habitat out of ice. Due to the pressure of the atmosphere, ice is in a solid state on Mars, and can be used to build structures. Small robots can spray out liquid water, that they get from the ice on the Martian surface, that then freezes and builds the structure.",

        link: "http://www.marsicehouse.com/",
    },
    {
        title: "Termite Building",
        authors: ["Justin Werfel", "Kirstin Petersen", "Radhika Nagpal"],
        abstract: "Complex systems are characterized by many independent components whose low-level actions produce collective high-level results. Predicting high-level results given low-level rules is a key open challenge; the inverse problem, finding low-level rules that give specific outcomes, is in general still less understood. We present a multi-agent construction system inspired by mound-building termites, solving such an inverse problem. A user specifies a desired structure, and the system automatically generates low-level rules for independent climbing robots that guarantee production of that structure. Robots use only local sensing and coordinate their activity via the shared environment. We demonstrate the approach via a physical realization with three autonomous climbing robots limited to onboard sensing. This work advances the aim of engineering complex systems that achieve specific human-designed goals.",
        category: PaperCategory.Building,
        image: "https://images.adsttc.com/media/images/530a/f6d0/c07a/80a2/7600/01eb/large_jpg/kali-isis-stair2white.jpg?1393227439",
        tags: ["Nagpal Lab"],

        casualHeader: "Termite Robots",
        casualBody: "Researchers have started looking into robots that can build structures in a similar way to termites. The robots are able to climb up a structure, and by each following a simple set of rules, without communicating to each other can build complex structures. Can something like this be adapted to Mars?",

        link: "https://pubmed.ncbi.nlm.nih.gov/24531967/",
    },
    // {
    //     title: "Stochastic Building",
    //     authors: ["Chang-kwon Kang et al"],
    //     abstract: "About the Swarmies mission",
    //     category: PaperCategory.Building,
    //     image: "https://www.researchgate.net/publication/289212539/figure/fig1/AS:472121781559297@1489574012432/Possible-rover-formation-for-Martian-swarm-exploration.png",
    //     tags: ["Hassel", "NASA Innovative Advanced Concepts", "University of Alabama", "flying", "bioinspired"],

    //     casualHeader: "Stochastic Outerspace",
    //     casualBody: "Though not on the surface on Mars, orbital habitats can be built through a stochastic self assembly process.",

    //     link: "https://kanglab.uah.edu/marsbees",
    // },

    // MAINTAINING
    // {
    //     title: "ISS Maintaining",
    //     authors: ["Chang-kwon Kang et al"],
    //     abstract: "About the Swarmies mission",
    //     category: PaperCategory.Maintaining,
    //     image: "https://www.researchgate.net/publication/289212539/figure/fig1/AS:472121781559297@1489574012432/Possible-rover-formation-for-Martian-swarm-exploration.png",
    //     tags: ["Hassel", "NASA Innovative Advanced Concepts", "University of Alabama", "flying", "bioinspired"],

    //     casualHeader: "Swarm Robots for Maintaining Habitation Surfaces",
    //     casualBody: "Maintaining the ISS.",

    //     link: "https://kanglab.uah.edu/marsbees",
    // },
    {
        title: "Tracking Satellites",
        authors: ["Privateer Space"],
        abstract: "Privateer is creating the data infrastructure that will enable sustainable growth for the new space economy. Their proprietary knowledge graph technology offers much-needed enhancements to how we collect and process information about space objects. Even as orbital highways become more congested, this data and the applications built on it will allow space operators to maneuver safely and effectively. The first of many apps to be built on Privateer’s data engine is Wayfinder: an open-access and near real-time visualization of satellites and debris in Earth orbit.",
        category: PaperCategory.Maintaining,
        image: "./images/privateer.png",
        tags: ["Privateer", "Satellite Tracking", "Startup"],

        casualHeader: "Privateer",
        casualBody: "Privateer is making a system that tracks satellites and debris and makes it public for everyone to see. With accurate, shared data of our orbital environment, we can better maintain our satellites, avoid collisions, and work on ways to clean up Earth's surroundings for the benefit of all humanity.",

        link: "https://www.privateer.com/",
    },

]