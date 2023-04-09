import { Grid, Stack, Image, Space, HoverCard, Text, Title, Group } from '@mantine/core';
import CurrentResearchHeaderText from './CurrentResearchHeaderText';
import BodyTextLeft from './formattedText/BodyTextLeft';
import ResearchPaperHoverCard from './ResearchPaperHoverCard';


enum PaperCategory {
    Finding,
    Getting,
    Building,
    Maintaining,
}

export interface ResearchPaper {
    title: string;
    authors: string[];
    abstract: string;
    tags: string[];
    category: string;
    image: string;
    link: string;

    // casual explanations
    casualHeader: string;
    casualBody: string;

}

const researchPapers: ResearchPaper[] = [
    {
        title: "Marsbee - Swarm of Flapping Wing Flyers for Enhanced Mars Exploration",
        authors: ["Chang-kwon Kang et al"],
        abstract: "Mars exploration has received significant interest from academia, industry, government, and the general public. Despite continued interest, flying on Mars remains challenging, mainly due to the ultra-thin Martian atmospheric density. Although the gravitational acceleration on Mars is 38 percent of Earth's 9.8 meters per second squared, the Martian atmospheric density is only 1.3 percent of the air density on Earth. The aerodynamic forces are proportional to the ambient fluid density. Therefore, flying near the surface of Mars has been considered nearly impossible. The proposed mission architecture (Fig. 1) consists of a Mars rover (already existing) that serves as a mobile base for Marsbees - a deployable swarm of small bio-inspired flapping wing vehicles. In one ConOps scenario, each Marsbee would carry an integrated stereographic video camera and the swarm could construct a 3D topographic map of the local surface for rover path planning. These flying scouts would provide a \"third-dimension\" to the rover capabilities. In other scenarios, each part of the swarm of Marsbees could carry pressure and temperature sensors for atmospheric sampling, or small spectral analyzers for identification of mineral outcroppings. In each scenario, the rover acts as a recharging and deployment/return station and data and communication hub. Human exploration of Mars is one of the major objectives of NASA and commercial entities such as SpaceX and Boeing. The identified innovations unique to the bio-inspired flapping Marsbee provide viable multi-mode flying mobility for Martian atmospheric and terrain exploration. A swarm of Marsbees provides an enhanced reconfigurable Mars exploration system that is resilient to individual component failures. These Marsbees can carry sensors and wireless communication devices in combination with a Mars rover and helicopters. These enhanced sensing and information gathering abilities can contribute to the following NASA Mars mission objectives: i) \"Determine the habitability of an environment\", ii) \"Obtain surface weather measurements to validate global atmospheric models\", and iii) \"Prepare for human exploration on Mars.\" Various commercial entities, e.g. SpaceX and Boeing, are investing in technologies to transport humans to Mars.",
        category: "finding",
        image: "https://lh6.googleusercontent.com/5GBi-pzL9CyoZNyDEMUsxIBbKVd-tcHegrP7blTM-ChM3Yjok649MaW5mOsl9AUgrGwqVTvCCsBa_LAC-ZBnB2Bq9cfTrHF9UcnpAG8RVD1fQKHM=w1280",
        tags: ["NASA", "NASA Innovative Advanced Concepts", "University of Alabama", "flying", "bioinspired"],

        casualHeader: "Marsbee - Swarm of Flapping Wing Flyers for Enhanced Mars Exploration",
        casualBody: "Flying bees on Mars?! This is a NASA project that aims to create a swarm of flying robots that can fly around Mars and collect data. The project is still in the early stages, but it is a very exciting project that could lead to a new way of exploring Mars using the mechanisms of swarm flight.",

        link: "https://kanglab.uah.edu/marsbees",
    },
    {
        title: "Marsbee - Swarm of Flapping Wing Flyers for Enhanced Mars Exploration",
        authors: ["Chang-kwon Kang et al"],
        abstract: "Mars exploration has received significant interest from academia, industry, government, and the general public. Despite continued interest, flying on Mars remains challenging, mainly due to the ultra-thin Martian atmospheric density. Although the gravitational acceleration on Mars is 38 percent of Earth's 9.8 meters per second squared, the Martian atmospheric density is only 1.3 percent of the air density on Earth. The aerodynamic forces are proportional to the ambient fluid density. Therefore, flying near the surface of Mars has been considered nearly impossible. The proposed mission architecture (Fig. 1) consists of a Mars rover (already existing) that serves as a mobile base for Marsbees - a deployable swarm of small bio-inspired flapping wing vehicles. In one ConOps scenario, each Marsbee would carry an integrated stereographic video camera and the swarm could construct a 3D topographic map of the local surface for rover path planning. These flying scouts would provide a \"third-dimension\" to the rover capabilities. In other scenarios, each part of the swarm of Marsbees could carry pressure and temperature sensors for atmospheric sampling, or small spectral analyzers for identification of mineral outcroppings. In each scenario, the rover acts as a recharging and deployment/return station and data and communication hub. Human exploration of Mars is one of the major objectives of NASA and commercial entities such as SpaceX and Boeing. The identified innovations unique to the bio-inspired flapping Marsbee provide viable multi-mode flying mobility for Martian atmospheric and terrain exploration. A swarm of Marsbees provides an enhanced reconfigurable Mars exploration system that is resilient to individual component failures. These Marsbees can carry sensors and wireless communication devices in combination with a Mars rover and helicopters. These enhanced sensing and information gathering abilities can contribute to the following NASA Mars mission objectives: i) \"Determine the habitability of an environment\", ii) \"Obtain surface weather measurements to validate global atmospheric models\", and iii) \"Prepare for human exploration on Mars.\" Various commercial entities, e.g. SpaceX and Boeing, are investing in technologies to transport humans to Mars.",
        category: "finding",
        image: "https://lh6.googleusercontent.com/5GBi-pzL9CyoZNyDEMUsxIBbKVd-tcHegrP7blTM-ChM3Yjok649MaW5mOsl9AUgrGwqVTvCCsBa_LAC-ZBnB2Bq9cfTrHF9UcnpAG8RVD1fQKHM=w1280",
        tags: ["NASA", "NASA Innovative Advanced Concepts", "University of Alabama", "flying", "bioinspired"],

        casualHeader: "Marsbee - Swarm of Flapping Wing Flyers for Enhanced Mars Exploration",
        casualBody: "Flying bees on Mars?! This is a NASA project that aims to create a swarm of flying robots that can fly around Mars and collect data. The project is still in the early stages, but it is a very exciting project that could lead to a new way of exploring Mars using the mechanisms of swarm flight.",

        link: "https://kanglab.uah.edu/marsbees",
    }

]

interface ResearchPaperProps {
    paperCategory: string
}


export default function ResearchPaperView({ paperCategory }: ResearchPaperProps) {

    return (
        <>

            <CurrentResearchHeaderText text="Current Research" />

            {researchPapers.filter(paper => paper.category === paperCategory).map(paper => (

                <>
                    {/* <Group> */}

                    <Space h="md" />

                    <Grid gutter="xl">

                        <Grid.Col span={1}></Grid.Col>



                        <Grid.Col span={5} >

                            <Image
                                radius="lg"
                                fit="fill"
                                // height="auto"
                                src={paper.image}
                                alt="Random unsplash image"
                            // caption="1"
                            />

                        </Grid.Col>

                        <Grid.Col span={5}>

                            <HoverCard width={700} shadow="md" openDelay={200} closeDelay={400}>

                                <HoverCard.Target>

                                    <Stack align="flex-start" justify="flex-start">
                                        <Title order={3}
                                            // variant="gradient"
                                            // gradient={{ from: 'darkRed', to: 'yellow', deg: 60 }}
                                            ta="left"
                                        >
                                            {paper.casualHeader}
                                        </Title>
                                        <BodyTextLeft text={paper.casualBody} />
                                    </Stack>
                                </HoverCard.Target>

                                <HoverCard.Dropdown>

                                    <ResearchPaperHoverCard researchPaper={paper} />


                                </HoverCard.Dropdown>
                            </HoverCard>


                        </Grid.Col>



                        <Grid.Col span={1}></Grid.Col>

                    </Grid>



                    <Space h="md" />

                    {/* </Group> */}

                </>

            ))}


        </>
    )

}
