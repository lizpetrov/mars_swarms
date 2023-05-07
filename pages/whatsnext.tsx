import { MantineProvider, Stepper, Button, Group, AppShell, Navbar, Text, Header, Stack } from '@mantine/core';
import HeaderText from './components/HeaderTextCentered';
import PageTitle from "./components/PageTitle"
import CenteredBoldText from './components/formattedText/CenteredBoldText';
import ParaCentered from './components/ParaCentered';
import ImageWithBlurb from './components/ImageWithBlurb';
import ImageCentered from './components/ImageCentered';
import NatureHeaderText from './components/NatureHeaderText';
import CenteredModel from './components/CenteredModel';

export default function WhatsNext() {
  return (
    <>
    <Stack justify="flex-start" align="center" sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] })}>
      
      <PageTitle text="What's next?" />

      <ImageCentered src='https://vwartclub.com/media/projects/5241/3.jpg' caption="Conteptual Rendering of Martian Habitat, Hassell Architects" />

      <CenteredBoldText text="We have built a settlement." color="white" />

      <ParaCentered text="Astronauts can now settle safely on the red planet, with the settlement lasting for generations through being maintained." />

      <CenteredBoldText text="Bio-Inspired Swarm Robotics Made this Possible" color="white" />

      <ImageWithBlurb header="1. Finding" body="Swarms of terrestrial and flying robots map the Martian surface to find places to build, regolith to mine, water to drink, and to conduct scientific experiments." caption="AI Generated Swarm Finding" image="./images/finding-dalle.png" color1='darkred' color2='#FFCD9B' learnMoreLink='./finding' />

      <ImageWithBlurb header="2. Gathering" body="Swarms of digging and carrying robots now go to the locations of the found materials. They collect the regolith and bring it to the settlement build site." caption="AI Generated Swarm Gathering" image="./images/dalle-gathering.png" color1='#fadadd' color2='darkred' learnMoreLink='./getting' />

      <ImageWithBlurb header="3. Building" body="A swarm of special 3d printing robots works together to create human livable habitats. They sinter, melt, and place regolith into locations to make arching shells and structures that protect from the elements, including radiation." caption="AI Generated Swarm Building" image="./images/dalle-building.png"  color1='darkred' color2='#FFCD9B' learnMoreLink='./building'/>

      <ImageWithBlurb header="4. Maintaining" body="Swarms of robots constantly monitor the settlement structures for decay, fix things as needed, and increase the size of the settlement as more astronauts move in. This makes sure the settlement lasts for countless generations of Martians." caption="AI Generated Swarm Building" image="./images/dalle-maintaining.png"  color1='orange' color2='#FFCD9B' learnMoreLink='./maintaining' />

      {/* NATURE */}


      <NatureHeaderText text="All of the Above was Inspired by Nature" />

      <ImageWithBlurb header="Ants" body="Ants are known for their ability to find food. Using simple behaviors, they can organize to find and bring back food to their nest." caption="" image="./images/ants.png" color1='yellow' color2='lime' learnMoreLink='' />

      <ImageWithBlurb header="Bees" body="Bees, each following simple rules, find sources of food and new nest locations, settling on the best location. They also build beautiful structures." caption="" image="./images/bees.png" color1='yellow' color2='orange' learnMoreLink='' />

      <ImageWithBlurb header="Termites" body="Termites, each following simple rules, build magnificant structures out of clay. These can last for thousands of years." caption="" image="./images/termitesBuilding.png" color1='white' color2='orange' learnMoreLink='' />

      <ImageWithBlurb header="Beavers" body="Beavers build dams that create ponds. As floods and currents wash out parts of the dam, beavers work actively to maintain their creation, making dams that are actively maintained last for hundreds of years." caption="" image="./images/beaverMaintaining.png" color1='brown' color2='white' learnMoreLink='' />

      <CenteredBoldText text="Applying these swarm behaviors to robotics allows us to out-of-this-world things. Researchers have already started to explore the possibilities!" color="white" />

      <ParaCentered text="However, all of this research is still in the early exploratory stage. This mission briefing showed you some of the current work occuring. But there is so much left to explore and discover!" />

      <CenteredModel splineLink="https://prod.spline.design/dppESLW0qgQCfHYv/scene.splinecode" caption="Mars" />

      <ParaCentered text="Astronaut candidate, that is where you come in! How can you build upon what you learned in this briefing to make Martian habitation a reality?" />



      {/* YOUR MISSION BRIEFING IS NOW COMPLETED */}

      <PageTitle text="Your Mission Briefing is now Complete." />

      
      <PageTitle text="Ad Astra!" />


    </Stack>
    </>
  )
}
