import React from 'react';
import { Box, ChakraProvider, Container, Grid, theme } from '@chakra-ui/react';
import { TopMenu } from './components/TopMenu';
import { Routes, Route } from "react-router-dom"
import { Work } from "./pages/Work"
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"

function App({...rest}) {
  return (
    <ChakraProvider theme={theme}>
      <Container px={8} mb={16} maxW="1400" {...rest}>
        <Grid minH="100vh" p={3}>
          
          <Box>
            <TopMenu name='David Lee'/>
          </Box>
          <Box>
            <Routes>
              <Route path="/" element={ <Home/> }/>
              <Route path="/my-work" element={ <Work/> }/>
              <Route path="/my-projects" element={ <Projects/> }>
              </Route>
            </Routes>
          </Box>

        </Grid>
      </Container>
    </ChakraProvider>
  );
}

export default App;
