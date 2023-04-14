import { Text, Container, Space } from '@mantine/core';


interface ParaCenteredProps {
  text: string;
}

/// Centered text block
export default function ParaCentered({text}: ParaCenteredProps) {
  return (
    <>

<Space h="md" />
    <Container size="xs" px="xs">
        <Text
        ta="center"
        fz="20px" // og 22
        fw="80%" // regular
        >
        {text}
        </Text>
    </Container>

<Space h="md" />
    </>
  );
}