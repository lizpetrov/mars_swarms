import { Text, Title, Space } from '@mantine/core';

interface CurrentResearchHeaderTextProps {
  text: string;
}

export default function CurrentResearchHeaderText({text}: CurrentResearchHeaderTextProps) {
  return (
    <>

<Space h="md" />

    <Title order={1}
        variant="gradient"
        gradient={{ from: 'orange', to: 'silver', deg: 60 }}
        ta="center"
    >
        {text}
        </Title>
        <Space h="md" />

    </>
  );
}