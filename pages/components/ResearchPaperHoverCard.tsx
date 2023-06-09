import { HoverCard, Avatar, Text, Group, Anchor, Stack, Title } from '@mantine/core';
import Link from 'next/link';
import { ResearchPaper, researchPapers } from '../../public/ResearchPapers';
import ResearchPaperView from './ResearchPaperView';

interface ResearchPaperHoverCardProps {
    researchPaper: ResearchPaper;
}

export default function ResearchPaperHoverCard({researchPaper}: ResearchPaperHoverCardProps) {
  return (
      <Stack spacing="xs">
{/* 
        { researchPaper.title &&
            <Title order={4}
            ta="left"
            >
            {researchPaper.title ?? ""}
            </Title>    
        }

        { researchPaper.authors &&
        <Title order={6}
            >
            {researchPaper.authors?.join('  |  ').toUpperCase() ?? ""}
        </Title>
        }

{ researchPaper.abstract &&
        <Text ta="left"
            fw={500}
            fz="14px"
            >
            {researchPaper.abstract ?? ""}
        </Text>
}

{ researchPaper.tags &&
         <Title order={6}
            >
            {researchPaper.tags?.join('  |  ').toUpperCase() ?? ""}
        </Title>
}


        { researchPaper.link &&
        <a href={researchPaper.link ?? ""} target="_blank" rel="noopener noreferrer">
        <Text ta="left"
                fw={700}
                fz="17px"
                color='#FFAE42'
                fs="italic"
                >
                See paper
            </Text>

        </a>
} */}


      </Stack>
  );
}