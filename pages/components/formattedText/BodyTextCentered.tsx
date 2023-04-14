import { Text } from '@mantine/core';

interface BodyTextLeftProps {
  text: string;
}

export default function BodyTextCentered({ text }: BodyTextLeftProps) {
  return (
    <Text
      ta="center"
      size="md"
      fw={400}
      fz="17px"
      maw={600}
    >
      {text}
    </Text>
  );
}
