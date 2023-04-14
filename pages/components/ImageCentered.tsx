import Spline from '@splinetool/react-spline';
import { Stack, Grid, Image, Overlay, Group, Button, Container, Center, Space, Flex } from '@mantine/core';
import BodyTextLeft from './formattedText/BodyTextLeft';
import HeaderTextLeft from './formattedText/HeaderTextLeft';
import { Carousel } from '@mantine/carousel';
import Hover from 'react-3d-hover';


interface ImageProps {
    src: string;
    caption: string;
}

export default function ImageCentered({src, caption = ""}: ImageProps ) {
  return (
    <>
    <Space h="md" />

    <Hover>
        <Image
        // radius="lg"
        fit="scale-down"
        height={500}
        // mah={}
        src={src}
        alt="Mars"
        caption={caption}
    />
    </Hover>

        <Space h="md" />

    </>

   
  );
}
