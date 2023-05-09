import React from 'react';
import { Box, ChakraProvider, Grid, theme } from '@chakra-ui/react';
import { TopMenu } from './components/TopMenu';
import { TabArea } from './components/sections/TabArea';
import { Routes, Route } from "react-router-dom"
import { Work } from "./pages/Work"
import { Home } from "./pages/Home"

function App() {
  return (
    <ChakraProvider theme={theme}>
      
        <Grid minH="100vh" p={3}>
          <Box>
            <TopMenu name='David Lee'/>
          </Box>

          <Routes>
            <Route path="/" element={ <Home/> }>
            </Route>
            <Route path="/my-work" element={<Work/>}>
            </Route>
          </Routes>

          <Box align="left">
            <TabArea/>
          </Box>

        </Grid>
    </ChakraProvider>
  );
}

export default App;
