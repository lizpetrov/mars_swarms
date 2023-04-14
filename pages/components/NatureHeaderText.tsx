import { Text, Title, Space } from '@mantine/core';
import Hover from 'react-3d-hover';


interface NatureHeaderTextProps {
  text: string;
}


export default function NatureHeaderText({text}: NatureHeaderTextProps) {
  return (
    <>

<Space h="md" />

    <Hover>
    <Title order={1}
        variant="gradient"
        gradient={{ from: '#FFF01F', to: '#39ff14', deg: 45 }}
        ta="center"
    >
        {text}
        </Title>

        </Hover>
        <Space h="md" />

    </>
  );
}