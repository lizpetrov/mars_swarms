import { MantineProvider, Stepper, Button, Group, AppShell, Navbar, Text, Header, Stack } from '@mantine/core';
import HeaderText from './components/HeaderTextCentered';
import PageTitle from "./components/PageTitle"

export default function Building() {
  return (
    <>
    <Stack justify="flex-start" align="center" sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] })}>
      
      <PageTitle text="BUILDING" />
      <HeaderText text="Nature has..." />
     

      
    </Stack>
    </>
  )
}
