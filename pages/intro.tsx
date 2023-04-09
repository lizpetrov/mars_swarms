import { MantineProvider, Stepper, Button, Group, AppShell, Navbar, Text, Header, Stack } from '@mantine/core';
import HeaderText from './components/HeaderTextCentered';
import PageTitle from "./components/PageTitle";
import ParaCentered from "./components/ParaCentered";
import CenteredModel from "./components/CenteredModel";
import ModelAndText from './components/ModelAndText';
import GradientTextButton from './components/GradientTextButton';
import ImageGallery from './components/ImageGallery';
import StatisticsText from './components/StatisticsText';
import ResearchPaperView from './components/ResearchPaperView';
import PaperCategory from './components/ResearchPaperView';
import NetLogoView from './components/NetLogoView';


export default function Intro() {
  return (
    <>
    <Stack justify="flex-start" align="center" sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] })}>
      
      <PageTitle text="Welcome to Mars" />


  <CenteredModel splineLink="https://prod.spline.design/dppESLW0qgQCfHYv/scene.splinecode" />

    <StatisticsText stats={[
  "Diameter: 6,779 km",
  "Mass: 6.39 x 10^23 kg",
  "Distance from the sun: 227.9 million km",
  "Length of day: 24.6 hours",
  "Length of year: 687 Earth days",
  "Average surface temperature: -80°F (-62°C)",
  "Number of moons: 2 (Phobos and Deimos)",
  "Surface features: largest volcano (Olympus Mons), deepest canyon (Valles Marineris)",
  "Atmosphere: mainly carbon dioxide (95.32%), nitrogen (2.7%), argon (1.6%), and trace amounts of other gases.",
]
}></StatisticsText>


  <HeaderText text="Nature has..." />

  <NetLogoView htmlSrc="AntsFoodNetLogo.html" header="Ant Foraging" body="This is a NetLogo model. It is a simulation of a simple ant colony. The ants are programmed to find food and bring it back to the nest. Play around with the settings." />

  <ImageGallery header="Ants" body="Ants have prospecting behavior ...." images={["https://www.researchgate.net/publication/289212539/figure/fig1/AS:472121781559297@1489574012432/Possible-rover-formation-for-Martian-swarm-exploration.png"]} />


    <ParaCentered text="Swarm robotics, or the use of multiple robots working together in a coordinated manner, could prove to be incredibly helpful on Mars. The harsh and unpredictable environment on the red planet makes it difficult for humans to carry out tasks that are necessary for long-term exploration and colonization. Swarm robotics could help overcome these challenges by allowing for distributed and parallelized tasks to be carried out by multiple robots at the same time. This could include tasks such as mapping, sample collection, and even construction. Additionally, swarm robotics allows for a degree of fault tolerance, where the loss of one or even multiple robots would not necessarily result in mission failure. By leveraging swarm robotics, we can increase the efficiency, safety, and robustness of missions to Mars, ultimately helping to pave the way for sustainable human presence on the planet." />

    <ModelAndText splineLink="https://prod.spline.design/iTOKe7E0UaZdPNYi/scene.splinecode" header="hello there!" body="Swarm robotics, or the use of multiple robots working together in a coordinated manner, could prove to be incredibly helpful on Mars. The harsh and unpredictable environment on the red planet makes it difficult for humans to carry out tasks that are necessary for long-term exploration and colonization. Swarm robotics could help overcome these challenges by allowing for distributed and parallelized tasks to be carried out by multiple robots at the same time. This could include tasks such as mapping, sample collection, and even construction. Additionally, swarm robotics allows for a degree of fault tolerance, where the loss of one or even multiple robots would not necessarily result in mission failure. By leveraging swarm robotics, we can increase the efficiency, safety, and robustness of missions to Mars, ultimately helping to pave the way for sustainable human presence on the planet." />

 
    <GradientTextButton text="Finding" href="/finding" />

    <ResearchPaperView paperCategory="finding" />

    </Stack>
    </>
  )
}
