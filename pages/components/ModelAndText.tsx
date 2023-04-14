import Spline from '@splinetool/react-spline';
import { Stack, Grid, Space, Flex } from '@mantine/core';
import BodyText from './formattedText/BodyTextLeft';
import HeaderTextLeft from './formattedText/HeaderTextLeft';

interface ModelAndTextProps {
    splineLink: string;
    header: string;
    body: string;
}

export default function ModelAndText({splineLink, header, body}: ModelAndTextProps ) {
  return (

    <>

    <Space h="md" />

    <Flex
      mih={50}
      bg="rgba(0, 0, 0, .3)"
      gap="xl"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >
      
      <Stack h={400} w={400}> 
          <Spline scene={splineLink} />
      </Stack>

    <Space w="xl" />

      <Stack align="flex-start" justify="flex-start" miw={300} maw={500}> 
      {header !== "" && <HeaderTextLeft text={header} />}
          {/* // <HeaderTextLeft text={header} /> */}
          <BodyText text={body} />
      </Stack>

    </Flex>

    <Space h="md" />

   </>
  );
}
