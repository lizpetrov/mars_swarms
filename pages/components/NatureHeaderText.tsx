import { Text, Title, Space } from '@mantine/core';


interface NatureHeaderTextProps {
  text: string;
}


export default function NatureHeaderText({text}: NatureHeaderTextProps) {
  return (
    <>

<Space h="md" />

    <Title order={1}
        variant="gradient"
        gradient={{ from: 'red', to: 'lime', deg: 60 }}
        ta="center"
    >
        {text}
        </Title>
        <Space h="md" />

    </>
  );
}