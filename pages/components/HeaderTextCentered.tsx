import { Text, Title, Space } from '@mantine/core';


interface HeaderTextProps {
  text: string;
}


export default function HeaderText({text}: HeaderTextProps) {
  return (
    <>

<Space h="md" />

    <Title order={1}
        variant="gradient"
        gradient={{ from: 'red', to: 'green', deg: 60 }}
        ta="center"

    >
        {text}
        </Title>
        <Space h="md" />

    </>
  );
}