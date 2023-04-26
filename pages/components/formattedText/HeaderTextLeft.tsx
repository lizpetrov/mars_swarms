import { Text, Title } from '@mantine/core';

interface HeaderTextLeftProps {
  text: string;
  color1: string;
  color2: string;
}

export default function HeaderTextLeft({text, color1, color2}: HeaderTextLeftProps) {
  return (
    <>

    <Title order={2}
        variant="gradient"
        gradient={{ from: color1 === "" ? 'red' : color1, to: color2 === "" ? 'white' : color2, deg: 60 }}
        ta="left"

    >
        {text}
        </Title>

    </>
  );
}