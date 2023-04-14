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

export default function Maintaining() {
  return (
    <>
    <Stack justify="flex-start" align="center" sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] })}>
      
      <PageTitle text="MAINTAINING" />
      <ImageCentered caption="AI Generated Swarm Maintaining" src="./images/dalle-maintaining.png" />

      <ParaCentered text="Now that we have a settlement, how do we maintain it for future generations? We need to think about upkeeping our environment, and not let it dilapidate as we have to many structures on Earth. We have to be concious of human impact throughout generations. " />

      <PageTitle text="WORK IN PROGRESS..." />



<ParaCentered text="Architects and researchers have started to imagine ways of useing swarms of robots for building structures, all inspired by nature." />
  

<NatureHeaderText text="Nature has Showed us Ways of Maintaining Structures with Swarms" />

{/* NATURE THINGS */}

{/* BEAVERS */}
<ImageCentered src='./images/beaversMaintaining.png' caption='' />


<CurrentResearchHeaderText  text='Researchers have Started to Look into Using Robotic Swarms for Building Structures' />

<ParaCentered text="This research is mainly in the conceptual phase, exploring how robots may be used. 3d printing research is ongoing as well, helping make these concepts a reality." />

  <ResearchPaperView paperCategory={PaperCategory.Maintaining} />

      <HeaderText text='We Now Have a Sustaining Martian Settlement!' color1='white' color2='white' />

      <ParaCentered text="We now have a settlement on Mars, maintained by a swarm of robots. Humans can settle and live there for generations. " />

      <GradientTextButton text="> WHAT'S NEXT >" href="/whatsnext" />

      <Space h="xl" />
      
    </Stack>
    </>
  )
}
