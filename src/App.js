import React from 'react';
import { Box, ChakraProvider, Container, Grid, theme } from '@chakra-ui/react';
import { TopMenu } from './components/TopMenu'
import { router } from './utils/Router'
import { RouterProvider } from "react-router-dom"
import './theme.js'


<RouterProvider router={router} />

function App({...rest}) {
  return (
    <ChakraProvider theme={theme} >
      <Container px={{sm: 4, md:8}} mb={16} maxW="1400" {...rest}>
        <Grid minH="100vh" p={3}>

          <Box mb={5}>
            <TopMenu name='David Lee'/>
          </Box>
          <Box>
          <RouterProvider router={router} />
          </Box>

        </Grid>
      </Container>
    </ChakraProvider>
  );
}

export default App;
