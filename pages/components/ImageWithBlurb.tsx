import Spline from '@splinetool/react-spline';
import { Stack, Grid, Image, Overlay, Group, Button, Container, Center, Space, Flex, Text } from '@mantine/core';
import BodyTextLeft from './formattedText/BodyTextLeft';
import HeaderTextLeft from './formattedText/HeaderTextLeft';
import { Carousel } from '@mantine/carousel';
import Hover from '../hover.js';


interface ImageWithBlurbProps {
    header: string;
    body: string;
    caption: string;
    image: string;
    color1: string;
    color2: string;

    learnMoreLink: string;
}

export default function ImageWithBlurb({header, body, caption, image, color1, color2, learnMoreLink}: ImageWithBlurbProps ) {
  return (
    <>

    <Space h="md" />

        <Flex  mih={50}
        gap="xl"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
        >

        <Hover>
            <Image
            // radius="lg"
            fit="scale-down"
            // height="auto"
            height={400} // 
            width={500}
            src={image}
            alt="Random unsplash image"
            caption={caption}
        />
        </Hover>

        <Space w="xl" />

        <Stack align="flex-start" justify="flex-start" miw={300} maw={500}> 
            {header !== "" && <HeaderTextLeft text={header} color1={color1} color2={color2} />}
            <BodyTextLeft text={body} />


            {learnMoreLink !== "" && 

                <>
                <Space h="md" />
                
                <a href={learnMoreLink} target="_blank" rel="noopener noreferrer">
                          <Text ta="left"
                              fw={700}
                              fz="14px"
                              color='#FFAE42'
                              fs="italic"
                              td="underline"
                          >
                              Learn More
                          </Text>

                      </a>
                      </>
        
            
            }
        </Stack>

        </Flex>

        <Space h="md" />

    </>

   
  );
}
