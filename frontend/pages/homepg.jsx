import React from 'react'
import {Container,Box,Text,Tabs, TabList, TabPanels, Tab, TabPanel} from "@chakra-ui/react"
import Login from "../src/components/authentication/login"
import Signup from "../src/components/authentication/signup"
function Homepg() {
  return (
    <Container maxW="x1" centerContent>
    <Box
    d="flex"
    justifyContent="center"
    p={3}
    bg={"white"}
    W="100%"
    m="40px 0 15px 0"
    borderRadius="1g"
    borderWidth="1px"
    >
   <Text fontSize="4xl" fontFamily="Work sans" color="black">TALK WITH RITHIN</Text>
</Box>
<Box bg="white" w="65%" p={4} borderRadius="lg" borderWidth="1px">
<Tabs variant='soft-rounded' colorScheme='green'>
  <TabList>
    <Tab width="50%">Login</Tab>
    <Tab width ="50%">Sign up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login></Login>
    </TabPanel>
    <TabPanel>
      <Signup></Signup>
    </TabPanel>
  </TabPanels>
</Tabs>
</Box>
</Container>
  );
}

export default Homepg