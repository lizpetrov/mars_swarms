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
        fz="22px"
        fw={300} // regular
        >
        {text}
        </Text>
    </Container>

<Space h="md" />
    </>
  );
}