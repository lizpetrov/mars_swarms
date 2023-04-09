import Spline from '@splinetool/react-spline';
import { Stack, Text } from '@mantine/core';

interface ModelProps {
    splineLink: string;
    caption: string;
}

export default function CenteredModel({splineLink, caption = ""}: ModelProps ) {
  return (

    <Stack h={500} w={600} align="center"> 

    <Spline scene={splineLink} />

    {caption !== "" && 
      <Text
      ta="center"
      size="md"
      fw={400}
      fz="15px"
    >
      {caption}
    </Text>
    }

    </Stack>
  );
}
