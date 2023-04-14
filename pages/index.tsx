// import { MantineProvider, Stepper, Button, Group, AppShell, Navbar, Text, Header, Stack } from '@mantine/core';

import { Center, Stack } from "@mantine/core";
import CenteredModel from "./components/CenteredModel";
import CurrentResearchHeaderText from "./components/CurrentResearchHeaderText";
import ImageGallery from "./components/ImageGallery";
import ModelAndText from "./components/ModelAndText";
import NatureHeaderText from "./components/NatureHeaderText";
import NetLogoView from "./components/NetLogoView";
import PageTitle from "./components/PageTitle";
import ParaCentered from "./components/ParaCentered";
import ResearchPaperView from "./components/ResearchPaperView";
import StatisticsText from "./components/StatisticsText";
import Intro from "./intro";
import { PaperCategory } from "./ResearchPapers";


export default function Home() {
  return (
    <>
      <Stack align="center">
        <PageTitle text="Page Title" />

        <CenteredModel splineLink="https://prod.spline.design/dppESLW0qgQCfHYv/scene.splinecode" caption="Centered Model" />

        <StatisticsText stats={["Stat 1: Value 1", "State 2: Value 2", "Stat 3: Value 3" ]} />

        <ParaCentered text="This is a paragraph centered." />

        <ModelAndText splineLink="https://prod.spline.design/iTOKe7E0UaZdPNYi/scene.splinecode" header="Header for Model" body="Talk about the model to the left..." />

        <NatureHeaderText text="Nature has..." />

        <ImageGallery header="Image Gallery" body="Info about the images" images={["https://www.researchgate.net/publication/289212539/figure/fig1/AS:472121781559297@1489574012432/Possible-rover-formation-for-Martian-swarm-exploration.png", "https://www.researchgate.net/publication/289212539/figure/fig1/AS:472121781559297@1489574012432/Possible-rover-formation-for-Martian-swarm-exploration.png"]} />

        <NetLogoView htmlSrc="AntsFoodNetLogo.html" header="Netlogo!" body="Play around with this - notice how things change when you edit the...." />

        <CurrentResearchHeaderText text="Current Research" />

        <ResearchPaperView paperCategory={PaperCategory.Finding} />



      </Stack>

    </>
  )
}
