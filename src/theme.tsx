import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false, //TODO: change to 'true' once I have light and dark mode ironed out
  },
  colors: {
    transparent: 'transparent',
    space_cadet: '#22223B',
    ultra_violet: '#4A4E69',
    rose_quartz: '#9A8C98',
    pale_dogwood: '#C9ADA7',
    isabelline: '#F2E9E4',
  },
  layerStyles: {
    header_component: {
      bg: 'transparent',
      verticalAlign: 'center' as const,
      zIndex: '200'
    },
    navbar_button: {
      bg: 'transparent',
      color: 'ultra_violet',
      zIndex: '1000',
      _hover: {
        border: '0px',
        color: 'isabelline',
      }
    },
    container_box: {
      h: '100vh',
      bg: 'isabelline'
    },
  },
  textStyles: {
    h1: {
      bg: 'transparent',
      textAlign: 'center' as const,
      fontSize: 68,
      letterSpacing: '3px',
      pt: '8px',
      fontFamily: 'Clicker Script, sans-serif',
      zIndex: '200'
    },
    h2: {
      bg: 'transparent',
      fontSize: 36,
      textAlign: 'left' as const,
      letterSpacing: '4px',
      ml: '-4px',
      pt: '40px',
      fontFamily: 'Charmonman, sans-serif',
      zIndex: '200'
    },
    navbar: {
      bg: 'transparent',
      textAlign: 'center' as const,
      fontSize: 32,
      fontWeight: 200,
      color: 'ultra_violet',
      fontFamily: 'Edu NSW ACT Foundation, sans-serif',
      zIndex: '1000'
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