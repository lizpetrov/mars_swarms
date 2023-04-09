import { Text, Space } from '@mantine/core';


interface PageTitleProps {
  text: string;
}

export default function PageTitle({text}: PageTitleProps) {
  return (
    <>
    <Space h="md" />

      <Text
        variant="gradient"
        gradient={{ from: 'darkRed', to: 'yellow', deg: 60 }}
        sx={{ fontFamily: 'SpaceAge, sans-serif' }}
       ta="center"
        size={100}
        // fw={1000}
    >
      {text}
    </Text>
    <Space h="md" />


    </>
  );
}