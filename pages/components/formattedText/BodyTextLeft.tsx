import { Text } from '@mantine/core';

interface BodyTextLeftProps {
  text: string;
}

export default function BodyTextLeft({ text }: BodyTextLeftProps) {
  return (
    <Text
      ta="left"
      size="md"
      fw={400}
      fz="17px"
      maw={500}
    >
      {text}
    </Text>
  );
}
