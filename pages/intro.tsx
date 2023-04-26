import { MantineProvider, Stepper, Button, Group, AppShell, Navbar, Text, Header, Stack, Title, Paper, Space } from '@mantine/core';
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
import NatureHeaderText from './components/NatureHeaderText';
import CurrentResearchHeaderText from './components/CurrentResearchHeaderText';
import ImageCentered from './components/ImageCentered';
import HeaderTextCentered from './components/HeaderTextCentered';
import BodyTextCentered from './components/formattedText/BodyTextCentered';
import Hover from './hover.js';
import BodyTextLeft from './components/formattedText/BodyTextLeft';
import ImageWithBlurb from './components/ImageWithBlurb';
import CenteredBoldText from './components/formattedText/CenteredBoldText';


export default function Intro() {
  return (
    <>
    <Stack justify="flex-start" align="center" sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] })}>
      
      <PageTitle text="Welcome to Mars" />

      <CenteredModel splineLink="https://prod.spline.design/dppESLW0qgQCfHYv/scene.splinecode" caption="Mars" />

      <StatisticsText stats={[
        "Length of Year: 687 Earth days",
        "Length of day: 24 hours 37 minutes",
        "Low temperature: -284 degrees Fahrenheit",
        "High temperature: 86 degrees Fahrenheit",
        "Average temperature: -81 degrees Fahrenheit",
        "Diameter: 4,220 miles (half of Earth)",
        "Gravity: 0.375 that of Earth",
        "Atmosphere: 96% carbon dioxide",
        "Number Moons: 2",
        "Distance from Sun: 142 million miles",
        "Radiation: 40-50 that on Earth",
        "Communication lag to Earth: 7 min one way"
        ]} />

      <ParaCentered text="Mars has always been a source of fascination for humanity, and in the coming years, we may finally be able to establish permanent settlements on the red planet. However, this won't be an easy feat. Mars is an incredibly hostile environment compared to Earth. Its atmosphere is very thin, and it's extremely cold, with temperatures that can drop as low as -284 degrees Fahrenheit. Building a self-sustaining colony on Mars will require significant technological advances in areas like robotics and resource utilization. Despite the challenges, scientists and engineers around the world are actively working to overcome these obstacles and make human habitation on Mars a reality. " />

      <ImageCentered src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL21vdmluZ3RvbWFyczEuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo4Mjh9LCJ0b0Zvcm1hdCI6ImF2aWYifX0=" caption="Artist Rendition of Mars Settlement" />

      <ParaCentered text="Congratulations! You have been tasked with designing a settlement for the red planet, and particularly the robotic system to construct it. In this mission briefing, you will be introduced to the current research and concepts people have looked into as they have imagined ways to live on Mars, going step by step." />

      <HeaderTextCentered text="Ready, astronaut candidate? Let's launch." color1={'orange'} color2={'red'} />

      <ParaCentered text="As a first solution, we can imagine bringing up separate capsules from Earth and connecting them together. This may be the first step to establishing a settlement." />

      <ImageCentered src="https://media2.s-nbcnews.com/i/MSNBC/Components/Photo/_new/121025_MarsPhoto-1225p.files.jpg" caption="Mars One Conceptual Drawing" />

      <ParaCentered text="However, as more humans arrive on Mars, building up settlements in this way becomes costly and not scalable. It costs about $4,000 / kg to bring supplies to low earth orbit, and many times that to the surface of Mars. Though the cost is bound to decrease, the limits of the rocket equation will still make bringing up so much mass for a Martian base inefficient. Furthermore, radiation on the Martian surface can still penetrate capsules, impacting the well being of our astronauts.
        " />

      <ParaCentered text="What if we use Martian regolith, that beautiful red dust, to build our settlement? Researchers call this building in-situ, or utilizing the local materials available. That way we use it to protect ourselves form radiation, while only bringing the minimum life support systems we need from Earth.
        " />

      <ImageCentered src="https://parametric-architecture.com/wp-content/uploads/2020/08/PA_The_Innovation_Behind_Hassell_EOC_Settlement_Proposal_for_Mars-_12.jpg" caption="Conceptual Mars Settlement made of Martian Regolith, Hassell Architects" />

      <ParaCentered text="We can get our astronauts to build these structures, but the harsh planetary conditions, cost of sending up materials, and time it takes to build makes this process unsafe. This means we will need to create robots that can find, carry, build, and then maintain our buildings between our missions and before the first humans even land on Mars. 
        " />

      <HeaderTextCentered text="What robots should we use?" color1={'yellow'} color2={'orange'} />

      <ParaCentered text="We need a robot that satisfies a few goals. First, that won't break down in harsh conditions. Second, it has to operate autonomously as the communication lag between the Earth and Mars is 7 minutes, not allowing for the real time control by a human operator as it takes 15 min to recieve information from Mars and send back instructions. Third, it has to be capable of handling complex tasks over the Martian surface." />

      <ParaCentered text="We can potentially bring a single rover to Mars that is an allstar and does it all. All the rovers we have sent up to Mars so far have been single robots with multiple tools, tele-operated (with some lag) by operators on Earth. 
        " />

      <ModelAndText splineLink="https://prod.spline.design/iTOKe7E0UaZdPNYi/scene.splinecode" header="Perseverance Rover" body="This rover has been on Mars the past 2 years, seeking signs of ancient life and collecting rock samples. It has instruments for drilling, imaging, and even a helicopter. The science it is conducting is helping us understand Mars better, and has shown amazing findings such as it is possible to fly in the Martian atmosphere."/>

      <CenteredBoldText text="But how do we fit all the tools we need to build habitats onto one big rover?" color={'white'} />

      <ParaCentered text="This is a huge engineering challenge." />

      <CenteredBoldText text="And what if the rover maltfunctions?" color={'white'} />

      <ParaCentered text="We would need to send up another one." />

      <CenteredBoldText text="And how long will it take a single rover to build a settlement?" color={'white'} />

      <ParaCentered text="A long time." />


      <ParaCentered text="With a single rover, we run into some issues we need to think through. If it breaks down, we will need to send another rover to Mars, which may take a few years. And even if in the small chance it doesn't, it will take a single rover years to build a single habitat, even assuming we can make it function autonomysly to avoid the 20 min Earth-based control delay. Space is a tough place, and if we want to build a settlement we need to come up with another solution. " />

      <ParaCentered text="Humans on Earth always build in groups. It takes hundreds of people, each with their own job, to construct a Martian rover. It would take one person decades. If we look at nature, we see how animals, such as termites, work together to construct settlements many times their size." />

      <ImageGallery header="Swarms in Nature" body="These animals, who independently can do little, together do a lot. Can we learn from biology to allow life to flourish on Mars?" images={["https://static.longnow.org/2015/08/a-giraffe-walks-behand-a-termite-mound-in-the-bushland-of-the-okavango-delta-in-botswana-1600x1066-1024x682.jpg", "https://i0.wp.com/www.honeybeesuite.com/wp-content/uploads/2016/01/Feral-hive-Mike-Riter.jpg?ssl=1", "https://images.squarespace-cdn.com/content/v1/5ccb5508815512ee5a4cfb6d/1585107471038-CDHR9HPQ44CI9PU1XPW4/BD.jpeg?format=1500w"]} />


      <ParaCentered text="Can we have a lot of smaller robots, each doing their own thing, build up a Martian settlement together? We can imagine each robot being part of a swarm, doing it's own thing, contributing to a common goal." />

      <HeaderTextCentered color1="darkred" color2='yellow' text="Swarm Robotics May be Our Path to Mars!" />

      <ParaCentered text="Researchers, space-architects, space agencies, and biologists have started to ask this question and explore the possibilities of swarm robotics for building settlements on Mars. Taking inspiration from nature, their research hints at just the beginning of what is possible. Observing natural phenomenons on Earth may teach us how to bring life to other planets." />

      <HeaderTextCentered color1="white" color2='orange' text="Settling Mars" />

      <ParaCentered text="Once we have our swarm of robots, we can think about making a settlement in 4 main steps, each with its own mission objective." />

      <ImageWithBlurb header="1. Finding" body="We need to map the Martian surface to find places to build, regolith to mine, water to drink, and to conduct scientific experiments. We can imagine land based or flying swarms of robots exploring the planet." caption="AI Generated Swarm Finding" image="./images/finding-dalle.png" color1='darkred' color2='#FFCD9B' learnMoreLink='' />

      <ImageWithBlurb header="2. Gathering" body="Now that we found materials, we need to collect the regolith and bring it to where we are building our settlement. We can imagine special digger and carrier robots that work together." caption="AI Generated Swarm Gathering" image="./images/dalle-gathering.png" color1='#fadadd' color2='darkred' learnMoreLink='' />

      <ImageWithBlurb header="3. Building" body="With the regolith, we now need to build habitats in-situ. We can imagine special 3d printing robots working together to create human livable habitats." caption="AI Generated Swarm Building" image="./images/dalle-building.png"  color1='darkred' color2='#FFCD9B' learnMoreLink=''/>

      <ImageWithBlurb header="4. Maintaining" body="Now that we have a settlement, we need to make sure we maintain it for it to last for future generations of Martians. Swarms can help maintain the settlement, making it larger over time." caption="AI Generated Swarm Building" image="./images/dalle-maintaining.png"  color1='orange' color2='#FFCD9B' learnMoreLink='' />

      <Space h="xl" />


    <Hover>
      <Paper shadow="xl" p="xl">

      <HeaderTextCentered color1="orange" color2='red' text="Your Mission Briefing" />

      <BodyTextLeft text ="Your mission briefing will consist of looking into each of these stages, understanding the swarm robotics concepts and existing research for each of these mission objectives. Each page of this brief will focus on one stage. For each stage, you will be briefed on examples of natural phenomenon of swarms that may be adapted for that specific stage. You will then explore current research going on." />

      <BodyTextCentered text ="-------------------" />

      <BodyTextLeft text ="This briefing is meant to introduce you the fantastical world of swarms, robotics, architecture, and space habitation. Throughout, ask yourself: What can we learn from biology to help us bring life to Mars? " />

      </Paper>
      </Hover>

      <HeaderTextCentered color1="white" color2='white' text="Ready to get started with stage 1?" />

      <GradientTextButton text='> FINDING >' href="/finding" />

      <Space h="xl" />

    </Stack>
    </>
  )
}
