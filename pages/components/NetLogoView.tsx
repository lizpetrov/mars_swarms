// var perf =require('../NetLogoModels/AntsFoodNetLogo.html');

import { Button, Center, Space, Stack, Title } from "@mantine/core";
import BodyTextLeft from "./formattedText/BodyTextLeft";

interface NetLogoViewProps {
    htmlSrc: string;
    header: string;
    body: string;
}

export default function NetLogoView({htmlSrc, header, body}: NetLogoViewProps ) {

    return (
        <Center inline>

        <Stack w={300} justify="center">

            <Title order={3}>{header}</Title>

            <BodyTextLeft text={body} />

            {/* <Button variant="outline" color="red" onClick={() => console.log(htmlSrc, header, body) }>print props</Button> */}

        </Stack>

          <Space w="md" />

            <iframe width="800px" height="800px" src={htmlSrc} ></iframe>


        </Center>
    );
   
}
