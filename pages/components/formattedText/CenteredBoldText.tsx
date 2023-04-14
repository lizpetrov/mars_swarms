import { Text, Title, Space } from '@mantine/core';
import Hover from 'react-3d-hover';

interface CenteredBoldTextProps {
  text: string;
  color: string;
}


export default function CenteredBoldText({text, color}: CenteredBoldTextProps) {
  return (
    <>

    <Space h="md" />
    <Hover>


        <Title order={2}
             color={color}
            ta="center"
            maw={500}
        >
        {text}
        </Title>
        
      <Space h="md" />
</Hover>
    </>
  );
}