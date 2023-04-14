import { Text, Title } from '@mantine/core';

interface HeaderTextLeftProps {
  text: string;
  color1: string;
  color2: string;
}

export default function HeaderTextLeft({text, color1, color2}: HeaderTextLeftProps) {
  return (
    <>
      {/* <Text
      variant="gradient"
      gradient={{ from: 'red', to: 'green', deg: 45 }}
      sx={{ fontFamily: 'Helvetica, sans-serif' }}

      ta="left"
      fz="xl"
      fw={700}
    >
      {text}
    </Text> */}

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