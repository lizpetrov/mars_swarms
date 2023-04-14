import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
// import { MantineProvider } from '@mantine/core';
import { MantineProvider, Stepper, Button, Group, AppShell, Navbar, Text, Header, Stack, Title, Center, Box } from '@mantine/core';
import { useState } from 'react';

import { useRouter } from 'next/router';
import { useEffect } from 'react'

import { CustomFonts } from '../CustomFonts';



export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const [active, setActive] = useState(0);

  const router = useRouter();

  function setActivePage(page: number) {
    console.log("setActivePage: ", page)
    setActive(page);

    switch (page) {
      case 0:
        router.push('/intro');
        break;
      case 1:
        router.push('/finding');
        break;
      case 2:
        router.push('/getting');
        break;
      case 3:
        router.push('/building');
        break;
      case 4:
        router.push('/maintaining');
        break;
      case 5:
        router.push('/whatsnext');
        break;
    }
  }

  useEffect(() => {
    const handleRouteChange = (url: string) => {

      switch (url) {
        case '/intro':
          setActive(0);
          break;
        case '/finding':
          setActive(1);
          break;
        case '/getting':
          setActive(2);
          break;
        case '/building':
          setActive(3);
          break;
        case '/maintaining':
          setActive(4);
          break;
        case '/whatsnext':
          setActive(5);
          break;
      }

    }

    router.events.on('routeChangeStart', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [router])

  return (
    <>
      <Head>
        <title>Swarms on Mars</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'dark',
          primaryColor: "red",
          primaryShade: { light: 6, dark: 8 },

          colors: {
            // override dark colors to change them for all components

            dark: [
                           '#FFFFFF',
              '#A6A7AB',
              '#909296',
              '#5C5F66',
              '#373A40',
              // '#2C2E33',
              '#25262B',
              '#1A1B1E',
              '#141517',
              '#000000',
              '#101113',

              // '#000000',
            ],
          },

          components: { 'HoverCard': { styles: { dropdown: { backgroundColor: '#660000', border: '#FFFFFF' } }, }, },

          // fonts
          fontFamily: 'Source Sans Pro, Open Sans, sans-serif',
          fontFamilyMonospace: 'Monaco, Courier, monospace',
          headings: { 
              // properties for all headings
            fontWeight: 700,
            fontFamily: 'Helvetica, Roboto, sans-serif', 

            sizes: {
              h1: { fontWeight: 700, fontSize: '44px', lineHeight: '1.2em' },
              h2: { fontWeight: 700, fontSize: '34px', lineHeight: '1.2em' },
              h3: { fontWeight: 700, fontSize: '24px', lineHeight: '1.2em' },
              h4: { fontWeight: 700, fontSize: '19px', lineHeight: '1.2em' },
              h5: { fontWeight: 700, fontSize: '16px', lineHeight: '1.2em' },
              h6: { fontWeight: 400, fontSize: '13px', lineHeight: '1.2em' },
            },

          },

        }}
      >
        <AppShell
      // padding="md"

      header={

        <Box
        sx={(theme) => ({
          backgroundColor: theme.colors.dark[8],
          textAlign: 'center',
          padding: theme.spacing.xl,
          borderRadius: theme.radius.lg,
          cursor: 'pointer',

          border: `2px solid ${theme.colors.red[7]}`,
          margin: theme.spacing.xl,
  
          // '&:hover': {
          //   backgroundColor:
          //    theme.colors.dark[8]
          // },
        })}
      >
          
          <Stack  spacing="xs" >

          <Stack align="center" spacing="xs" >

          <Text
             color="white"
              sx={{ fontFamily: 'Abstract, monospace' }}
             ta="center"
              size={7}
              // fw={1000}
          >
            Mission Briefing in Progress
          </Text>

            <Text
              variant="gradient"
              gradient={{ from: 'darkRed', to: 'yellow', deg: 60 }}
              sx={{ fontFamily: 'SpaceAge, sans-serif' }}
             ta="center"
              size={30}
              // fw={1000}
          >
            Utilizing Swarm Robotics for Martian Habitation Construction
          </Text>

          </Stack>

          <Stepper active={active} onStepClick={setActivePage } breakpoint="sm" sx={{ fontFamily: 'Abstract, monospace' }}  >
        <Stepper.Step label="INTRO" description="">
         {/* Step 1 content: Create an account */}
        </Stepper.Step>
        <Stepper.Step label="FINDING" description="">
          {/* Step 2 content: Verify email */}
        </Stepper.Step>
        <Stepper.Step label="GATHERING" description="">
          {/* Step 3 content: Get full access */}
        </Stepper.Step>
        <Stepper.Step label="BUILDING" description="">
          {/* Step 3 content: Get full access */}
        </Stepper.Step>
        <Stepper.Step label="MAINTAINING" description="">
          {/* Step 3 content: Get full access */}
        </Stepper.Step>
        <Stepper.Step label="WHAT'S NEXT?" description="">
          {/* Step 3 content: Get full access */}
        </Stepper.Step>
        <Stepper.Completed>
          {/* Completed, click back button to get to previous step */}
        </Stepper.Completed>
      </Stepper>


      </Stack>


         </Box>

         
        }

      styles={(theme) => ({
        main: { backgroundColor: theme.colors.dark[8] },
        root: { backgroundColor: theme.colors.dark[8] },
        body: { backgroundColor: theme.colors.dark[8] },
      })}
    >


<Component {...pageProps} />

      </AppShell>



      </MantineProvider>
    </>
  );
}