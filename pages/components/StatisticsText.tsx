import { Text, Container, Stack, Space } from '@mantine/core';


interface StatisticsTextProps {
  stats: string[];
}

/// Centered text block
export default function StatisticsText({stats}: StatisticsTextProps) {
  return (
    <>
      <Space h="md" />

    <Stack>
            {stats?.map((stat, index) => (
        <Text
            key={index}
            variant="gradient"
            gradient={{ from: '#FFAA33', to: 'white', deg: 45 }}
            sx={{ fontFamily: 'Digit, SpaceAge, Abstract, monospace' }}
            ta="center"
            fz="20px"
        >
            {stat}
        </Text>
        ))}

    </Stack>
    <Space h="md" />


    </>
  );
}