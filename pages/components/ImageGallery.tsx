import Spline from '@splinetool/react-spline';
import { Stack, Grid, Image, Overlay, Group, Button, Container, Center, Space, Flex } from '@mantine/core';
import BodyTextLeft from './formattedText/BodyTextLeft';
import HeaderTextLeft from './formattedText/HeaderTextLeft';
import { Carousel } from '@mantine/carousel';
import Hover from '../hover.js';


interface ModelAndTextProps {
    header: string;
    body: string;

    images: string[];
}

export default function ImageGallery({header, body, images}: ModelAndTextProps ) {
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
        
        <Carousel height={400} w={600} withIndicators mx="auto">

        {images.map((image, index) => (
                <Carousel.Slide key={index}>

                    <Hover>
                    <Image
                    // radius="lg"
                    fit="fill"
                    // height="auto"
                    src={image}
                    alt="Random unsplash image"
                    // caption="1"
                />
                </Hover>
                </Carousel.Slide>
            ))}

        </Carousel>

        <Space w="xl" />

        <Stack align="flex-start" justify="flex-start" miw={300} maw={500}> 
            {header !== "" && <HeaderTextLeft text={header} color1='white' color2='white' />}
            <BodyTextLeft text={body} />

        </Stack>

        </Flex>

        <Space h="md" />

    </>

   
  );
}
