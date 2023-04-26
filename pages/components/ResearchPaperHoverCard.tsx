import { HoverCard, Avatar, Text, Group, Anchor, Stack, Title } from '@mantine/core';
import Link from 'next/link';
import { ResearchPaper } from '../../public/ResearchPapers';

interface ResearchPaperHoverCardProps {
    researchPaper: ResearchPaper;
}

export default function ResearchPaperHoverCard({researchPaper}: ResearchPaperHoverCardProps) {
  return (
      <Stack spacing="xs">

        <Title order={4}
        ta="left"
         >
        {researchPaper.title}
        </Title>    

        {/* AUTHORS  */}
        <Title order={6}
            >
            {researchPaper.authors.join('  |  ').toUpperCase()}
        </Title>

        {/* ABSTRACT */}

        <Text ta="left"
            fw={500}
            fz="14px"
            >
            {researchPaper.abstract}
        </Text>

         {/* TAGS  */}
         <Title order={6}
            >
            {researchPaper.tags.join('  |  ').toUpperCase()}
        </Title>

        {/* LINK TO PAPER  */}

        <a href={researchPaper.link} target="_blank" rel="noopener noreferrer">
        <Text ta="left"
                fw={700}
                fz="17px"
                color='#FFAE42'
                fs="italic"
                >
                See paper
            </Text>

        </a>


      </Stack>
  );
}