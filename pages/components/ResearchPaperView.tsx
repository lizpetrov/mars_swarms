import { Grid, Stack, Image, Space, HoverCard, Text, Title, Group, Flex } from '@mantine/core';
import CurrentResearchHeaderText from './CurrentResearchHeaderText';
import BodyTextLeft from './formattedText/BodyTextLeft';
import ResearchPaperHoverCard from './ResearchPaperHoverCard';
import Hover from '../hover.js';
import { PaperCategory, researchPapers } from '../../public/ResearchPapers';

interface ResearchPaperProps {
    paperCategory: PaperCategory
}


export default function ResearchPaperView({ paperCategory }: ResearchPaperProps) {

    return (
        <>

            <Stack align="center" >

                {researchPapers.filter(paper => paper.category === paperCategory)?.map((paper, index) => (

                    <Stack align="center" key={index} >

                        <Space h="md" />

                        <Flex mih={50}
                            gap="xl"
                            justify="center"
                            align="center"
                            direction="row"
                            wrap="wrap"
                        >


                            <Hover>
                                <Image
                                    // radius="lg"
                                    fit="cover"
                                    // height="auto"
                                    height={300}
                                    width={500}
                                    src={paper.image}
                                    alt="Research Image"
                                // caption="1"
                                />
                            </Hover>

                            <Stack align="flex-start" justify="flex-start">
                                <Title order={3}
                                    // variant="gradient"
                                    // gradient={{ from: 'darkRed', to: 'yellow', deg: 60 }}
                                    ta="left"
                                    w={500}
                                >
                                    {paper.casualHeader}
                                </Title>
                                <BodyTextLeft text={paper.casualBody} />

                                <Space h="xl" />


                                <HoverCard width={700} shadow="md" openDelay={200} closeDelay={400} key={index} >

                                    <HoverCard.Target>

                                        <Text ta="left"
                                            fw={700}
                                            fz="15px"
                                            color='grey'
                                            fs="italic"
                                        >
                                            Hover here for more info.
                                        </Text>

                                    </HoverCard.Target>


                                    <HoverCard.Dropdown>

                                        {/* <Hover> */}

                                        {/* { paper && 
                                        <ResearchPaperHoverCard researchPaper={paper} /> } */}
                                        {/* </Hover> */}

                                        <Stack spacing="xs">

{ paper.title &&
    <Title order={4}
    ta="left"
    >
    {paper.title ?? ""}
    </Title>    
}

{ paper.authors &&
<Title order={6}
    >
    {paper.authors?.join('  |  ').toUpperCase() ?? ""}
</Title>
}

{ paper.abstract &&
<Text ta="left"
    fw={500}
    fz="14px"
    >
    {paper.abstract ?? ""}
</Text>
}

{ paper.tags &&
 <Title order={6}
    >
    {paper.tags?.join('  |  ').toUpperCase() ?? ""}
</Title>
}

{/* LINK TO PAPER  */}

{ paper.link &&
<a href={paper.link ?? ""} target="_blank" rel="noopener noreferrer">
<Text ta="left"
        fw={700}
        fz="17px"
        color='#FFAE42'
        fs="italic"
        >
        See paper
    </Text>

</a>
}


</Stack>

                                    </HoverCard.Dropdown>
                                </HoverCard>

                            </Stack>



                        </Flex>



                        <Space h="md" />


                    </Stack>

                ))}

            </Stack >


        </>
    )

}
