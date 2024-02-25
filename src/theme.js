import { extendTheme } from '@chakra-ui/react'
import '@fontsource/quicksand';
import '@fontsource/raleway';

const theme = {
  
    fonts: {
      heading: `'Quicksand', sans-serif`,
      body: `'Raleway', sans-serif`,
    },

  colors: {
    myTheme: {
      bg: '#bada55',
      text: '#00A19B',
      dark: {
        light: 'gray.800',
        dark: 'red'
      }
    }
  }
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

export default extendTheme(theme, config)