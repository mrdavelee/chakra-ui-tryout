import { extendTheme } from '@chakra-ui/react'

const theme = {
  colors: {
    myTheme: {
      bg: '#bada55',
      text: '#00A19B'
    }
  }
}

// const config = {
//   initialColorMode: 'dark',
//   useSystemColorMode: false,
// }


//  extendTheme({ config })

export default extendTheme(theme)