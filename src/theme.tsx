import { extendTheme, theme as base } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false, //TODO: change to 'true' once I have light and dark mode ironed out
  },
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    space_cadet: '#22223B',
    ultra_violet: '#4A4E69',
    rose_quartz: '#9A8C98',
    pale_dogwood: '#C9ADA7',
    isabelline: '#F2E9E4',
  },
  layerStyles: {
    header_component: {
      bg: 'transparent',
      color: 'space_cadet',
      verticalAlign: 'center' as const,
    }
  },
  textStyles: {
    h1: {
      textAlign: 'center' as const,
      fontSize: 72,
      letterSpacing: '3px',
      pt: '8px',
      fontFamily: 'Clicker Script, sans-serif'
    },
    h2: {
      fontSize: 40,
      textAlign: 'left' as const,
      letterSpacing: '4px',
      ml: '-4px',
      pt: '40px',
      fontFamily: 'Charmonman, sans-serif'
    },
    navbar: {
      textAlign: 'center' as const,
      fontSize: 28,
      fontWeight: 200,
      color: 'ultra_violet',
      fontFamily: 'Edu NSW ACT Foundation, sans-serif'
    }
  },
  fonts: {
    edu: 'Edu NSW ACT Foundation, sans-serif',
    h1: 'Clicker Script, sans-serif',
    h2: 'Charmonman, sans-serif'
  }
}
)

export default theme