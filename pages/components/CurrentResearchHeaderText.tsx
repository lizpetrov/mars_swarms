import { Text, Title, Space } from '@mantine/core';
import Hover from 'react-3d-hover';

interface CurrentResearchHeaderTextProps {
  text: string;
}

export default function CurrentResearchHeaderText({text}: CurrentResearchHeaderTextProps) {
  return (
    <>

<Space h="md" />

  <Hover>
    <Title order={1}
        variant="gradient"
        gradient={{ from: 'orange', to: 'silver', deg: 60 }}
        ta="center"
        maw={700}
    >
        {text}
        </Title>

        </Hover>
        <Space h="md" />

    </>
  );
}