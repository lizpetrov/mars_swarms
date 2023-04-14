import { MantineProvider, Stepper, Button, Group, AppShell, Navbar, Text, Header, Stack, Space, Title } from '@mantine/core';
import CenteredModel from './components/CenteredModel';
import CurrentResearchHeaderText from './components/CurrentResearchHeaderText';
import GradientTextButton from './components/GradientTextButton';
import HeaderText from './components/HeaderTextCentered';
import ImageCentered from './components/ImageCentered';
import ImageWithBlurb from './components/ImageWithBlurb';
import NatureHeaderText from './components/NatureHeaderText';
import NetLogoView from './components/NetLogoView';
import PageTitle from "./components/PageTitle"
import ParaCentered from './components/ParaCentered';
import ResearchPaperView from './components/ResearchPaperView';
import StatisticsText from './components/StatisticsText';
import { PaperCategory } from './ResearchPapers';
import ReactPlayer from 'react-player'
import CenteredBoldText from './components/formattedText/CenteredBoldText';
import Hover from 'react-3d-hover';

export default function Finding() {
  return (
    <>
    <Stack justify="flex-start" align="center" sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] })}>
      
      <PageTitle text="FINDING" />

      <ImageCentered caption="AI Generated Swarm Finding" src="./images/finding-dalle.png" />

      <ParaCentered text="Before we even start to construct a habitat, we need to find an ideal location for the settlement and materials that will support it. Mars is a planet, and like we selectively choose locations on Earth to build our cities, such as making settlements along rivers, we will need to find the ideal location for a Martian city. We want to build a habitat near sources of water, as water is required for agriculture, rocket fuel, and life-support. We need a way to explore our environment." />


      <CenteredModel splineLink="https://prod.spline.design/dppESLW0qgQCfHYv/scene.splinecode" caption="Where should we settle? Notice the ice caps at the poles." />

      <ImageCentered src="./images/marsGeoMap.jpeg" caption='Precise topographic maps, reconstructed from the Mars Global Surveyor mission' />

      <StatisticsText stats={[
        "Heavily Cratered Highland Terrain: ~half the planet",
        "Lightly Cratered Volcanic Lowland Planes: ~half the planet",
        "Largest Volcano: Mount Olympus, larger than the state of Missouri",
        "Water: Found at the Poles in the form of Ice",
        "Largest Canyon System: Valles Marineris, 4,000 km long, 7 km deep, 300 km wide",

        ]} />

      <ParaCentered text="The Martian landscape has been made through millenia of weathering. The thin atmosphere enables massive sand storms. A robot must be able to survive these environmental forces, and to survive humans will need to find ways to live in these conditions." />

      <ImageWithBlurb header="Water" body="When it had a denser atmosphere, Mars used to be covered by a huge ocean. Most of this water has been locked into geological material. Mars now has 5 million cubic km of ice near its surface, most of it in huge ice sheets at the poles. The poles, however, are harder to land on and are much colder than the equator region. Around the equator ice may be found buried less than a meter below the surface, but will need to be found through digging or scanning." caption="Map of Water on Mars" image="./images/waterMars.png" color1='white' color2='blue' learnMoreLink='https://www.visualcapitalist.com/a-new-water-map-of-mars/' />

      <ImageCentered src='https://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/pia23514.jpg?itok=JuCKSZK1' caption='Map shows underground water ice on Mars. Cool colors are closer to the surface than warm colors; black zones indicate areas where a spacecraft would sink into fine dust; the outlined box represents the ideal region to send astronauts for them to dig up water ice. From JPL.' />


      <ParaCentered text="With ice, we can create water. And from water we can grow food, have something to drink, and make rocket fuel. And with regolith we can build structures that would protect us from the Martian elements. We can use orbital satellites to let us choose a location for our habitat, but when we get to the surface we need to somehow find all the materials we need to sustain human life." />

      <CenteredBoldText text="So, how do we find the resources we need?" color="#ADD8E6" />

      <ParaCentered text="We can imagine a group of small swarm robots wandering out over the Martian surface, searching for water and good places to mine regolith. They would then communicate their findings to their peers." />

      {/* NATURE THINGS */}
      <NatureHeaderText text="Nature has Showed us Ways to Find Things" />

      <ParaCentered text="In nature, we see examples of small creatures going into environments they are not familiar with and finding sources of life - from shelter, to food, to pathways around obstacles. Each animal follows a simple set of rules, creating emerging behaviors that allow for the survival of their swarm." />

      {/* ANTS */}

      <ImageCentered src='./images/antsFinding.png' caption='' />

      <ParaCentered text="To forage for food sources, ants need to travel away from their nest and find food. Certain types of ants, such as the Argentine ants, leave behind a chemical trail of pheromones. Other ants can sense this trail. " />

      <CenteredBoldText text="How do ants find and then share their find with their fellow ants?" color="#808080" />

      <ParaCentered text="Turns out, each ant follows a simple set of rules. There is no leader ant. An ant would randomly wander, and if it finds food it would head back to the nest and lay a trail of pheromone. Other ants will be excited by this, and head out along the trail. For already wandering ants, if they run into a trail of pheromones they follow it if it is strong. Overtime, ants corroborate on the food source." />

      <NetLogoView htmlSrc="AntsFoodNetLogo.html" header="Ant Foraging" body="Press SETUP and then GO. Notice how the ants first randomly travel to find food sources. When they find food, they head back to the nest while leaving a chemical trail. Other ants start following this trail, and overtime all the food is found. Now try playing with the sliders. How does this change the behavior of the ants? Can you find a time when the ants don't know of a food source? " />

      <ImageWithBlurb header="NASA Swarmies" body="One project inspired by ants is NASA Swarmies. Dozens of small robots with GPS, cameras, and some communication ability are each controlled independently. Each robot can leave digital trails for its peers to follow, similar to ants using pheromones. NASA Swarmies is in the form of a competition for college students, maybe you can take part!" caption="NASA Swarmie Robots" image="https://www.nasa.gov/sites/default/files/styles/ubernode_alt_horiz/public/thumbnails/image/2015-1417.jpg" color1='white' color2='blue' learnMoreLink='https://www.nasa.gov/content/swarmies-shuffle-through-field-tests' />

      <CenteredBoldText text="We're trying to prove that there's more efficient ways of searching than some other more common ways. It works really well for ants and we think it could work just as well for robots." color="white" />

      <ParaCentered text='- Kurt Leucht, NASA Swarmies project ' />


      {/* BEES */}

      <ImageCentered src='./images/honeyBeesImageFinding.png' caption='' />

      <ParaCentered text="To find nectar and pollen, each bee colony dispatches thousands of bees to distances of up to 10 km from the hive. Biologists have noticed that over time the bees end up concentrating onto the most promising nectar source nearby. Similarly, when bees look for hives they follow a similar process, finding and then all settling on the best hive." />

      <CenteredBoldText text="How do bees find and then share their find with their fellow bees?" color="#FFFF00" />

      <ParaCentered text="Turns out, each bee follows a simple set of rules. There is no leader bee. A scout bee (a small percent of the colony) would go out and through some randomness find a source of nectar, then fly back with her stomach full of nectar. She would then perform a waggle-dance, showing her colony the direction of her find. The longer the dance, the better the find. The bees in the hive will then decide to follow the bee to the source or not. Overtime, bees end up coordinating to the best finds." />

      <Hover>
        <ReactPlayer url='https://www.youtube.com/watch?v=-7ijI-g4jHg' />
        <Space h="xl" />
      </Hover>

      <NetLogoView htmlSrc="BeeHiveFinding.html" header="Bees Finding Hives" body="Press SETUP and then GO. Notice how the bees first randomly travel to find hives. The higher the score of the hive, the better it is. The bee investigates the hive, then comes back home. If they love their find, they dance and other bees may join them. Notice how over time, the bees decide on the single best hive. Now try playing with the sliders. How does this change the behavior of the bees? " />

      <Space h="xl" />
      
      <CurrentResearchHeaderText  text='Inspired by Nature, Researchers have Started to Look into Using Swarms for Mapping Mars' />

      <ParaCentered text="This research, still in progress, shows us a future where robots go off like ants and bees to explore the extra-terrestrial environment in a way that outmatches the ability of orbital satellites or even humans." />

      <ResearchPaperView paperCategory={PaperCategory.Finding} />

      <HeaderText text='We now have a location and found our materials.' color1='white' color2='white' />

      <ParaCentered text="Now that we have a good place to establish a settlement and found our source of regolith and water, we need to gather the materials we need to start building. How can swarms help us in gathering these materials?" />

      <GradientTextButton text='> GATHERING >' href="/getting" />

      <Space h="xl" />
     
      
    </Stack>
    </>
  )
}
