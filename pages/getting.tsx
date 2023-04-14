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
import CenteredBoldText from './components/formattedText/CenteredBoldText';
import NetLogoView from './components/NetLogoView';

export default function Getting() {
  return (
    <>
    <Stack justify="flex-start" align="center" sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] })}>
      
    <ImageCentered caption="AI Generated Swarm Gathering" src="./images/dalle-gathering.png" />


    <ParaCentered text="We found the location of our settlement, our source of water, and our source of regolith. How do we excavate our materials and bring them to our build site? We need robots to scoop up regolith and ice and truck it across the Martian surface." />

    <ImageCentered caption="Martian Ice right on the surface, seen evaporating" src="https://skyandtelescope.org/wp-content/uploads/PhoenixLanderIce-604x600.jpg" />

    {/* <StatisticsText stats={[
        "Density of Regolith",
        "Grain Size",
        "...",
        ]} /> */}

      <ImageWithBlurb header="Robots for Excavating" body="Small robots such as NASA's Regolith Advanced Surface Systems Operations Robot (RASSOR) Excavator are amazing at collecting sandy regolith and delivering it to other locations. We can imagine hundreds of these robots working around the clock to collect materials." caption='NASA RASSOR Excavator' image="https://www.nasa.gov/sites/default/files/thumbnails/image/medium_1_0.png" color1='white' color2='gray' learnMoreLink='https://technology.nasa.gov/patent/KSC-TOPS-7' />


      <ParaCentered text="If we have hundreds of these robots, what algorithms will make them all work together? With potentially inconsistent connection, we would want these robots to opperate on their own, leading us back to the idea of swarms - each robot working on its own, with the swarm of robots as a whole completing a task. We can look to nature to help inspire us." />

      {/* NATURE THINGS */}
      <NatureHeaderText text="Nature has Showed us Ways to Gather Materials" />

      <ParaCentered text="In nature, we see examples of small creatures going into environments they are not familiar with and finding resources, then excavating and carrying back these resources to their home base. As in Finding, each animal follows a simple set of rules, creating emerging behaviors that allow for the survival of their swarm." />

      {/* ANTS */}

      <ImageCentered src='./images/antsGathering.png' caption='' />

      <ParaCentered text="In addition to being excellent at finding sources of food, Ants are then capable of distributing themselves in a way that gathers the food in their home nest. " />

      <CenteredBoldText text="How do ants organize themselves to collect resources?" color="#808080" />

      <ParaCentered text="As for finding, it turns out that each ant follows a simple set of rules. In fact, we will use the same example as we did before, but now with a focus on gathering materials. An ant would randomly wander, and if it finds food it would head back to the nest and lay a trail of pheromone. Other ants will be excited by this, and head out along the trail. For already wandering ants, if they run into a trail of pheromones they follow it if it is strong. Overtime, ants bring the entire food source to the nest." />

      <NetLogoView htmlSrc="AntsFoodNetLogo.html" header="Ants Gathering Food" body="Press SETUP and then GO. Notice that this is the same model as we saw before! But now focus on how the ants hone in on sources of food and then bring the entire food source back to the nest. How do the ants know when the food source runs out? Do you notice ants coming to a food source, only to discover it already empty? " />
  

      <ImageWithBlurb header="NASA Swarmies" body="Let's look at the NASA swarmies project again. After finding their sources of materials, in the form of blocks with QR codes, the robots need to bring the blocks to a central location. This is similar to ants gathering food! We can see how a swarm finding process connects to a swarm gathering process. And in the future, Swarmies will be updated with prototypes of the NASA RASSOR robots, hightlighted above." caption="NASA Swarmie Robots" image="https://www.nasa.gov/sites/default/files/styles/side_image/public/thumbnails/image/2-41700441281_7dffd249cc_o.jpg?itok=yU3cyRCU" color1='white' color2='blue' learnMoreLink='https://www.nasa.gov/content/meet-the-swarmies-robotics-answer-to-bugs' />


      {/* DIGGING LEAF CUTTER ANTS */}

      {/* FORAGING ANTS */}


      <CurrentResearchHeaderText  text='Researchers have Started to Look into Using Robotic Swarms for Gathering Materials' />

      <ParaCentered text="This research, still in progress, shows us a future where robots go off like ants to excavate and carry materials from around Mars to the place of our future human settlement." />

      <ResearchPaperView paperCategory={PaperCategory.Gathering} />

      <HeaderText text='We have now gathered our Martian materials.' color1='white' color2='white' />

      <ParaCentered text="Now that we have our settlement location, sources of water, and gathered our building material we can finally start building. How can swarms help us in building structures that are human-inhabitable?" />

      <GradientTextButton text='> BUILDING >' href="/building" />

      <Space h="xl" />
      
    </Stack>
    </>
  )
}
