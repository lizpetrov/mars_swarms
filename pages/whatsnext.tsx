import { MantineProvider, Stepper, Button, Group, AppShell, Navbar, Text, Header, Stack } from '@mantine/core';
import HeaderText from './components/HeaderTextCentered';
import PageTitle from "./components/PageTitle"

export default function WhatsNext() {
  return (
    <>
    <Stack justify="flex-start" align="center" sx={(theme) => ({ backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] })}>
      
      <PageTitle text="WHAT'S NEXT?" />
      <HeaderText text="Nature has..." />
      <Button variant="outline">1</Button>
      <Button variant="outline">2</Button>
      <Button variant="outline">3</Button>
      
    </Stack>
    </>
  )
}
