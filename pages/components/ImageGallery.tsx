import Spline from '@splinetool/react-spline';
import { Stack, Grid, Image, Overlay, Group, Button, Container, Center, Space, Flex } from '@mantine/core';
import BodyTextLeft from './formattedText/BodyTextLeft';
import HeaderTextLeft from './formattedText/HeaderTextLeft';
import { Carousel } from '@mantine/carousel';


interface ModelAndTextProps {
    header: string;
    body: string;

    images: string[];
}

export default function ImageGallery({header, body, images}: ModelAndTextProps ) {
  return (

//     <Group>

// <Container>
//     <Grid gutter="sm">
//       <Grid.Col span={1}></Grid.Col>
//       <Grid.Col span="auto" >

//       <Stack align="flex-start" justify="flex-start" h={300}>

//         <Image
//             radius="md"
//             fit="scale-down"
//             height={150}
//             src="https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80"
//             alt="Random unsplash image"
//             caption="1"
//         />
//       </Stack>


//       </Grid.Col>

//       <Grid.Col span="auto">

//       <Stack align="flex-end" justify="flex-end" h={300}>

//         <Image
//             radius="md"
//             fit="scale-down"
//             height={200}
//             src="https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80"
//             alt="Random unsplash image"
//             caption="2"
//         />
//         </Stack>

//       </Grid.Col>
//       <Grid.Col span={1}></Grid.Col>

//       {/* next row! */}

//       <Grid.Col span={1}></Grid.Col>
//       <Grid.Col span="auto" >
//       <Stack align="flex-end" justify="flex-end" h={300}>

// <Image
//     radius="md"
//     fit="scale-down"
//     height={150}
//     src="https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80"
//     alt="Random unsplash image"
//     caption="3"
// />
// </Stack>
//       </Grid.Col>

//       <Grid.Col span="auto">

//       <Stack align="flex-start" justify="flex-start" h={300}>

//         <Image
//             radius="md"
//             fit="scale-down"
//             height={150}
//             src="https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80"
//             alt="Random unsplash image"
//             caption="4"
//         />
//       </Stack>

//       </Grid.Col>
//       <Grid.Col span={2}></Grid.Col>


//     </Grid>
//     </Container>

//     {/* <Overlay center>
//         <BodyText text="Ants are miraculous creatures" />
//     </Overlay> */}

//     </Group>

<>
{/* <Space h="md" />


    <Grid gutter="md">

    <Center inline>
        <Grid.Col span={1}></Grid.Col>
        <Grid.Col span={6}>
        <Carousel height={400} withIndicators mx="auto">

            {images.map((image) => (
                <Carousel.Slide>
                    <Image
                    // radius="lg"
                    fit="fill"
                    // height="auto"
                    src={image}
                    alt="Random unsplash image"
                    // caption="1"
                />
                </Carousel.Slide>
            ))}

        </Carousel>
        </Grid.Col>
        <Grid.Col span={4}>

            <Stack >
             <HeaderTextLeft text={header} />
             <BodyTextLeft text={body} />
            </Stack>

        </Grid.Col>
        <Grid.Col span={1}></Grid.Col>

        </Center>

    </Grid>
    <Space h="md" /> */}


    <Space h="md" />

        <Flex  mih={50}
        gap="xl"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
        >
        
        <Carousel height={400} w={600} withIndicators mx="auto">

            {images.map((image) => (
                <Carousel.Slide>
                    <Image
                    // radius="lg"
                    fit="fill"
                    // height="auto"
                    src={image}
                    alt="Random unsplash image"
                    // caption="1"
                />
                </Carousel.Slide>
            ))}

        </Carousel>

        <Space w="xl" />

        <Stack align="flex-start" justify="flex-start" miw={300}> 
            {header !== "" && <HeaderTextLeft text={header} />}
            <BodyTextLeft text={body} />

        </Stack>

        </Flex>

        <Space h="md" />

    </>

   
  );
}
