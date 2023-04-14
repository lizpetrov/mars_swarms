import { Grid, Stack, Image, Space, HoverCard, Text, Title, Group, Flex } from '@mantine/core';
import CurrentResearchHeaderText from './CurrentResearchHeaderText';
import BodyTextLeft from './formattedText/BodyTextLeft';
import ResearchPaperHoverCard from './ResearchPaperHoverCard';
import Hover from 'react-3d-hover';
import { PaperCategory, researchPapers } from '../ResearchPapers';

interface ResearchPaperProps {
    paperCategory: PaperCategory
}


export default function ResearchPaperView({ paperCategory }: ResearchPaperProps) {

    return (
        <>

            <Stack align="center" >

            {researchPapers.filter(paper => paper.category === paperCategory).map(paper => (

                <>

                    <Space h="md" />

                    <Flex  mih={50}
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

                        <HoverCard width={700} shadow="md" openDelay={200} closeDelay={400}>

                            <HoverCard.Target>

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

                                    <Text ta="left"
                                        fw={700}
                                        fz="15px"
                                        color='grey'
                                        fs="italic"
                                        >
                                        Hover for more info.
                                    </Text>

                                </Stack>
                            </HoverCard.Target>

                            <HoverCard.Dropdown>

                                {/* <Hover> */}
                                    <ResearchPaperHoverCard researchPaper={paper} />
                                {/* </Hover> */}

                            </HoverCard.Dropdown>
                        </HoverCard>


                    </Flex>


                    <Space h="md" />


                </>

            ))}

            </Stack>


        </>
    )

}
