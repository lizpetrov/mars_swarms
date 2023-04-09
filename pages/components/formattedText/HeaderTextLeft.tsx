import { Text, Title } from '@mantine/core';

interface HeaderTextLeftProps {
  text: string;
}

export default function HeaderTextLeft({text}: HeaderTextLeftProps) {
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
        gradient={{ from: 'darkRed', to: 'yellow', deg: 60 }}
        ta="left"

    >
        {text}
        </Title>

    </>
  );
}