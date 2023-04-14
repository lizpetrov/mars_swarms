import { MantineProvider, Stepper, Button, Group, AppShell, Navbar, Text, Header, Stack, Space } from '@mantine/core';
import CurrentResearchHeaderText from './components/CurrentResearchHeaderText';
import GradientTextButton from './components/GradientTextButton';
import HeaderText from './components/HeaderTextCentered';
import ImageCentered from './components/ImageCentered';
import ImageWithBlurb from './components/ImageWithBlurb';
import NatureHeaderText from './components/NatureHeaderText';
import PageTitle from "./components/PageTitle"
import ParaCentered from './components/ParaCentered';
import ResearchPaperView from './components/ResearchPaperView';
import StatisticsText from './components/StatisticsText';
import { PaperCategory } from './ResearchPapers';
import NetLogoView from './components/NetLogoView';
import CenteredBoldText from './components/formattedText/CenteredBoldText';
import BodyTextCentered from './components/formattedText/BodyTextCentered';
import ReactPlayer from 'react-player';
import Hover from 'react-3d-hover';

export default function Building() {
  return (
    <>
      <Stack justify="flex-start" align="center" sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] })}>

        <PageTitle text="BUILDING" />
        <ImageCentered caption="AI Generated Swarm Building" src="./images/dalle-building.png" />

        <ParaCentered text="Now that we have our source of materials, a supply chain of sorts, how do we actually build a settlement on Mars?" />

        <ImageCentered caption="Concept of Martian Settlement, Hassell Architects" src="https://parametric-architecture.com/wp-content/uploads/2020/08/PA_The_Innovation_Behind_Hassell_EOC_Settlement_Proposal_for_Mars-_07.jpg" />

        <ImageWithBlurb header="A Habitat Must Survive the Martian Environment" body="Mars can be a harsh place to live. Sand storms with wind speeds of more than 70 miles per hour, micrometeroid impacts from the lack of atmosphere, and radiation all need to be protected against." caption='Martian Environment' image="https://mediaproxy.salon.com/width/1200/height/675/https://media.salon.com/2021/02/mars-martian-dust-storm-0218211.jpg" color1="darkred" color2="white" learnMoreLink='https://www.nasa.gov/feature/goddard/the-fact-and-fiction-of-martian-dust-storms' />


        <ParaCentered text="Turns out, Martian regolith is a useful building material that can protect us from the above - and we don't need to carry it up from Earth, saving on rocket fuel! Because of Mars being constantly bombarded with meterodes, the make up of regolith is pretty extraordinary." />

        <StatisticsText stats={[
          "Estimated Oxide Makeup for Martian Regolith (from Voyager missions):",
          "SiOz: 43%",
          "Fe2O3: 18%",
          "SO3: 7%",
          "Al2O3: 7%",
          "CaO: 6%",
          "MgO: 6%",
        ]} />

        <ParaCentered text="Marian regolith is around 18% iron oxide! This make the planet red: the iron in the rocks oxidizes! But iron has an even more miraculous property. It can be sintered, or in other words it can melt and solidify into a solid shape." />

        <ImageCentered caption="Conceptual stepwise process of constructing Martian habitat involving in-situ utilization, Lava Hive team for NASA centenial challenge " src="https://i1.wp.com/spacesettlementprogress.com/wp-content/uploads/2020/08/image-9.png?resize=525%2C231&ssl=1" />

        <ParaCentered text="Because of the iron oxide, we can melt regolith into molten rock by using microwave energy. When it solidifies, we get a strong building material. This is pretty amazing - just through the melting of Martian sand, we can make solid shell structures that act as protection from the elements. That means we just need to bring the bare necessicities for human life from Earth - such as inflatable pressure capsules and life-support systems - and use the Martian sand itself to protect as an outer shell. This outer shell is so heavy that it would be impossible to bring it from Earth." />

        <ImageCentered caption="Conceptual settlement rendering, showing thickness of regolith shell, Hassell Architects" src="https://parametric-architecture.com/wp-content/uploads/2020/08/PA_The_Innovation_Behind_Hassell_EOC_Settlement_Proposal_for_Mars-_12-1.jpg" />


        <ParaCentered text="With this shell of regolith, we would need around a 1 m deep shell to protect from the elements, particularly radiation." />

        <HeaderText text="How to Print on Mars" color1='white' color2='white' />

        <ParaCentered text="One way we can make a habititat is by using a single large 3d printing arm. This is the traditional way of 3d printing buildings out of concrete on Earth, because its easier to engineer." />

        <ImageWithBlurb header="3d Printing Extra-Terrestrially" body="AI Spacefactory, the winner of the 3d printing NASA centenial challenge, imagines a single robot printing a regolith shell. They have demonstrated the feasibility of printing, but a lot of questions still need to be solved. For example, what if the robot breaks down? This is where swarms may yield a solution." caption='AI Spacefactory' image="./images/marsha.jpeg" color1='darkred' color2='purple' learnMoreLink='https://www.aispacefactory.com/marsha' />

        <ParaCentered text="Though more complicated, using swarm robots to print structures allows for redundancy. If one robot breaks down, another will just take its place. If using a single robot arm, if it breaks down then the habitat will remain unbuilt. With swarms, the habitat will get built eventually." />

        <ImageCentered caption="Conceptual settlement rendering, showing swarm of robots printing shell, Hassell Architects" src="https://parametric-architecture.com/wp-content/uploads/2020/08/PA_The_Innovation_Behind_Hassell_EOC_Settlement_Proposal_for_Mars-_12.jpg" />

        <ParaCentered text="Architects and researchers have started to imagine ways of using swarms of robots for building structures, all inspired by nature." />

        <Hover>
          <Stack align="center" justify="center">
          <ReactPlayer url='https://youtu.be/AIrH01N9AsE' />
          <BodyTextCentered text="Can the swarm robots themselves be modular? This is just one of the ideas being explored right now in the field of space architecture. This concept video, by Hassel architects, gives an overview of how we may one day build on Mars." />
          <Space h="xl" />
          </Stack>
        </Hover>

        <NatureHeaderText text="Nature has Showed us Ways of Building with Swarms" />
        {/* NATURE THINGS */}

        {/* TERMITES  termitesBuilding.png */}
        <ImageCentered src='./images/termitesBuilding.png' caption='' />

        <ParaCentered text="Termites are tiny creatures, yet they create mounds that are meters tall. Each termite mound is unique and complex, being made through the individual actions of thousands of termites. The nests are made out of tiny pellets of soil, which come together into functional components. Initially, termites start making nests in multiple locations that over time through swarm behavior consolodate into the structures we see in nature." />

        <Hover>
          <Stack align="center" justify="center">
          <ReactPlayer url='https://youtu.be/ngSLWpckhks' />
          <BodyTextCentered text="Termites are miraculous creatures, so tiny yet build huge structures that last beyond their lifespans." />
          <Space h="xl" />
          </Stack>
        </Hover>

        <NetLogoView htmlSrc="TermitesWoodChips.html" header="Termites" body="Press SETUP and then GO. This model shows how termites, each working on their own, assemble the materials around them into a single pile. If we imagine this in 3d, we can imagine this pile as a towering nest. Play with the sliders. How long does it take for the termites to decide on a single nest location?" />


        {/* BEES + HONEY COMBS */}
        <ImageCentered src='./images/HoneyBeesBuilding.png' caption='' />

        <ParaCentered text="To build their hive, bees turn honey into wax that they then deposit into a hexagonal web structure. The hive acts as a place of shelter, to keep honey, and store larvae. Each worker bee contributes a miniscule amount of wax at a time, but together thousands of bees can build immensely complicated structures that adapt to their environment." />

        <CenteredBoldText text="How do bees build such miraculous structures, each adapting to the specific environment?" color="#FFFF00" />

        <ParaCentered text="Humans build houses with a blueprint in mind. Bees do no. It turns out that each bee follows a simple set of rules, which together combine into complex organic structures. There is no leader bee. A hypothesis for the hexagonal shape is that the each bee adds wax in a circular motion with a set radius, but they add more to where there is already some wax. Over time, hexagonal shapes form in respect to this radius. " />

        <NetLogoView htmlSrc="Honeycombs.html" header="The Structure of a Hive" body="Press SETUP and then GO. This model looks into bees travelling along circular paths, leaving a pheromone in its path that other bees would be inclined to travel on. Over time, notice how the bees start to travel in hexagonal patterns. We can imagine this differently when we think of hive building: each bee deposits some wax in a certain radial path, and other bees are inclined to build on top of those existing patterns. Play around with the sliders, do you notice times when a set hexagonal pattern is not created?" />

        {/* CURRENT RESEARCH */}

        <CurrentResearchHeaderText text='Researchers have Started to Look into Using Robotic Swarms for Building Structures' />

        <ParaCentered text="This research is mainly in the conceptual phase, exploring how robots may be used. 3d printing research is ongoing as well, helping make these concepts a reality." />

        <Hover>
          <Stack align="center" justify="center">
          <ReactPlayer url='https://www.youtube.com/watch?v=j_GzkjHtFiA&ab_channel=TED' />
          <BodyTextCentered text="A lot of this works is currently being done by architects, such as Xavier de Kestelier, who bring a human-centered design element to this work. The story of the process sheds light onto how these projects originate and evolve over time." />
          <Space h="xl" />
          </Stack>
        </Hover>

        <ResearchPaperView paperCategory={PaperCategory.Building} />

        <HeaderText text='We have now built our Martian Settlement.' color1='white' color2='white' />

        <ParaCentered text="Now that we have built our settlement, we can now have humans settle on Mars! Wow! But we need to make sure our habitat lasts for many generations. How can swarms help us in maintaining our built structures?" />

        <GradientTextButton text='> MAINTAINING >' href="/maintaining" />

        <Space h="xl" />

      </Stack>
    </>
  )
}
