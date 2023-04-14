import { Text, Title, Space } from '@mantine/core';


interface HeaderTextProps {
  text: string;
  color1: string;
  color2: string;
}


export default function HeaderTextCentered({text, color1, color2}: HeaderTextProps) {
  return (
    <>

    <Space h="md" />

        <Title order={1}
            variant="gradient"
            gradient={{ from: color1 === "" ? 'red' : color1, to: color2 === "" ? 'white' : color2, deg: 60 }}
            ta="center"
        >
        {text}
        </Title>
        
      <Space h="md" />

    </>
  );
}