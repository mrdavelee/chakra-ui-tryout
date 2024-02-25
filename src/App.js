import theme from './theme'
import React from 'react';
import { Box, ChakraProvider, Container } from '@chakra-ui/react';
import { TopMenu } from './components/TopMenu'
import { router } from './utils/Router'
import { RouterProvider } from "react-router-dom"
import '@fontsource/raleway/400.css'
import '@fontsource/quicksand/700.css'


<RouterProvider router={router} />

function App({...rest}) {
  return (
    <ChakraProvider theme={theme} >
      <Container p={{sm: 4, md:8}} mb={16} maxW="1400" {...rest}>

          <Box mb={5}>
            <TopMenu name='David Lee'/>
          </Box>
          <Box>
            <RouterProvider router={router} />
          </Box>

      </Container>
    </ChakraProvider>
  );
}

export default App;
