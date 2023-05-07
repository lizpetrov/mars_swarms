import { Text, Title, Space } from '@mantine/core';
import Hover from '../../hover.js';

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
            maw={550}
        >
        {text}
        </Title>
        
      <Space h="md" />
</Hover>
    </>
  );
}