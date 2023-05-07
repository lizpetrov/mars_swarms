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
import { PaperCategory } from '../public/ResearchPapers';
import CenteredBoldText from './components/formattedText/CenteredBoldText';
import Hover from './hover';
import ReactPlayer from 'react-player';
import BodyTextCentered from './components/formattedText/BodyTextCentered';
import CenteredModel from './components/CenteredModel';

export default function Maintaining() {
  return (
    <>
      <Stack justify="flex-start" align="center" sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] })}>

        <PageTitle text="MAINTAINING" />
        <ImageCentered caption="AI Generated Swarm Maintaining" src="./images/dalle-maintaining.png" />

        <ParaCentered text="Now that we have a settlement, how do we maintain it for future generations? We need to think about upkeeping our environment, and not let it dilapidate as we have to many structures on Earth. We have to be concious of human impact throughout generations. " />

       <CenteredBoldText text="Satellites in space show us what may happen if we ignore the need of maintainance." color="#FFFFFF" />

       <ImageWithBlurb image="./images/privateer.png" caption="Tracking of active satellites (blue), inactive satellites (dark purple), and debris (pink) around Earth. From Privateer." header="Earth's Orbit is Full of Junk" body="Earth's orbit is getting cluttered with man-made objects. Multi-thousand satellite constellations such as Starlink, deactivated satellites that are now drifting pieces of space junk, thousands of pieces of debris from anti-satelite weapons testing, rocket debris, and more are cluttering space. We treat Earth's surroundings as a trash can, and we don't know how to clean everything up. As orbit gets more crowded, debris can hit other objects in space causing a chain reaction that leaves the space near Earth an unpassable swirl of deadly objects. This means GPS won't work, communicating technologies will break, and we will be stuck indefinetely on Earth. Scary, but not that far off! We need to take care of our environment, and that includes Space. Unfortunately there are no international rules that help us do this yet." color1="pink" color2="teal" learnMoreLink='https://wayfinder.privateer.com/' />

       <ParaCentered text="Our reliance on space is so intertwined with our own wellbeing. So what can we do to maintain space for generations to come? First, we need to start viewing space as an ecosystem subject to the same care and regulations as our oceans and atmosphere. We need to view space as an extension of our environment, and think about sustainability. With this frame we can start making more concrete actions that help us reach a point of sustainable practices in space." />

       <CenteredBoldText text="Space Environmentalism embodies these ideas." color="#FFFFFF" />


       <Hover>
          <Stack align="center" justify="center">
          <ReactPlayer url='https://www.youtube.com/watch?v=Ta8KBJ4BTNg&ab_channel=TED' />
          <BodyTextCentered text="Researchers such as Moriba Jah, who see themselves as space environmentalists, have started to develop tools for tracking space debris. By having this awareness of the facts, governments and other parties can now start to think about concrete actions they can take." />
          <Space h="xl" />
          </Stack>
        </Hover>


       <CenteredBoldText text="Space Environmentalism on Mars" color="#FFFFFF" />

        <ParaCentered text="We need to think about how we can apply these ideas to Mars. How do we keep Mars habitable? We need to think about how we can maintain our habitats, and how we can maintain the planet itself for generations to come. " />

        <CenteredModel splineLink="https://prod.spline.design/dppESLW0qgQCfHYv/scene.splinecode" caption="How do we keep Mars habitable?" />

        <ParaCentered text="By keeping our habitats healthy, we reduce the amount of supplies needed to be brought from Earth, keeping Mars self-sustaining. We also ensure Mars stays a safe place for humans to live. But more importantly, we develop a healthy relationship with the planet and our materials, one where care is prioritized and human presence grows with a balance to the embodied environment. Only then we can succeed in our dreams of settling and terraforming Mars." />

        <ImageCentered src='https://cdn.mos.cms.futurecdn.net/AQh73c64EohNEyuNhcqsQf.jpg' caption='Vision of future city on Mars, by Max Rymsha' />

        <ParaCentered text="How do we ensure our habitat does not decay? And if we don't want to use it anymore, how can we recycle the habitat, disassemble it, without leaving it abandoned?" />

        <NatureHeaderText text="Nature has Showed us Ways of Maintaining Structures with Swarms" />

        {/* NATURE THINGS */}

        {/* BEAVERS */}
        <ImageCentered src='./images/beaverMaintaining.png' caption='' />

        <ParaCentered text="Beavers create dams to create a pond that protects them from predators and holds their food during the winter. Rain and flooding constantly pushes away branches, requiring beavers to keep fixing their dams." />

        <CenteredBoldText text="How do beavers build and maintain dams?" color="#C4A484" />

        <ParaCentered text="Beavers keep their dams in good condition and will constantly enlarge the dams as the water level increases in the pond. Working together at night each beaver would get branches, stones, and mud to build the dam. Any damage is quickly fixed." />

        <Hover>
          <Stack align="center" justify="center">
          <ReactPlayer url='https://www.youtube.com/watch?v=82DiWd7KGt0&ab_channel=NatureonPBS' />
          <BodyTextCentered text="Beavers are miraculous builders. " />
          <Space h="xl" />
          </Stack>
        </Hover>

        <ParaCentered text="Beaver dams not only provide a home to beavers, they are also good for the entire ecosystem. Dams filter water, allow for bacterial processes that denitrate and decarbonize water, protect against drought, and support other animal ecosystems such as those of fish and frogs. The maintainance of dams supports the wellbeing of the environment as a whole. This shows that the act of maintainence is connected to the entire habitat." />

        {/* TERMITES */}
        <ImageCentered src='./images/termitesBuilding.png' caption='' />

        <ParaCentered text="Termites not only build structures, they also maintain their home. If left without maintainence, their homes would be washed out, holes would form, and one day the mound would be uninhabitable." />

        <ImageWithBlurb image="https://earthsky.org/upl/2018/11/termite-mounds-brazil-drone.jpg" caption="Drone image of 4,000 year old Termite Mounds" header="4,000 Year Old Termite Mounds" body="Termite mounds are built with a complex system of tunnels and chambers that allow for air circulation and temperature control, all made from termites digging and constructing. In Brazil, 4,000 year old still inhabited mounds were found. That means termites inhabited and maintained that mound since the time of the Egyptian pyramids! The difference: this habitat is still alive and buzzing." color1="red" color2="yellow" learnMoreLink='' />

        <CenteredBoldText text="How do termiles maintain their mounds for thousands of years?" color="#C4A484" />

        <ParaCentered text="Turns out, similarly to how they build. " />

        <Hover>
          <Stack align="center" justify="center">
          <ReactPlayer url='https://www.youtube.com/watch?v=uXlS48mptbM&t=4s&ab_channel=CellPress' />
          <BodyTextCentered text="Termites can maintain structures for thousands of years!" />
          <Space h="xl" />
          </Stack>
        </Hover>

        <ParaCentered text="Termites actively build upon their existing structures, making their home more vast and suitable for themselves as time goes on. It's a slow process, but one of growth. Can we imaging habitats on Mars as constantly being changed and grown upon, versus being abandoned or replaced?" />


        <CurrentResearchHeaderText text='Researchers have Started to Look into Using Robotic Swarms for Maintaining Structures' />

        <ParaCentered text="However, this research is not as explored as the other phases of habitat building. How do we start to think about researching maintainance for space habitats?" />

        <ResearchPaperView paperCategory={PaperCategory.Maintaining} />

        <HeaderText text='We Now Have a Sustaining Martian Settlement!' color1='white' color2='white' />

        <ParaCentered text="We now have a settlement on Mars, maintained by a swarm of robots. Humans can settle and live there for generations." />

        <GradientTextButton text="> WHAT'S NEXT >" href="/whatsnext" />

        <Space h="xl" />

      </Stack>
    </>
  )
}
