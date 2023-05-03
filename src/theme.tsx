import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    transparent: 'transparent',
    white_cast: 'rgba(255, 255, 255, 0.15)',
    space_cadet: '#22223B',
    ultra_violet: '#4A4E69',
    rose_quartz: '#9A8C98',
    pale_dogwood: {
      150: 'rgb(201, 173, 167, 0.15)',
      400: 'rgb(201, 173, 167, 0.4)',
      600: 'rgb(201, 173, 167, 0.6)',
      900: 'rgb(201, 173, 167, 0.9)',
      1000: '#C9ADA7'
    },
    isabelline: '#F2E9E4',
    sage: '#ADC9A7',
    dark_sage: '#698064',
  },

  config: {
    initialColorMode: 'light',
    useSystemColorMode: false, //TODO: change to 'true' once I have light and dark mode ironed out
  },

  fonts: {
    edu: 'Edu NSW ACT Foundation, sans-serif',
    h1: 'Clicker Script, sans-serif',
    h2: 'Charmonman, sans-serif'
  },

  layerStyles: {
    navbar: {
      color: 'ultra_violet',
      zIndex: '1000',
      _hover: {
        border: '0px',
        bg: 'transparent',
        color: 'isabelline',
      }
    },
  },

  textStyles: {
    h1: {
      textAlign: 'center' as const,
      fontSize: 68,
      letterSpacing: '3px',
      fontFamily: 'Clicker Script, sans-serif',
      zIndex: '200'
    },
    h2: {
      fontSize: 36,
      textAlign: 'left' as const,
      letterSpacing: '4px',
      ml: '-4px',
      pt: '36px',
      fontFamily: 'Charmonman, sans-serif',
      zIndex: '200'
    },
    navbar: {
      fontSize: 32,
      fontWeight: 200,
      textAlign: 'center' as const,
      color: 'ultra_violet',
      fontFamily: 'Edu NSW ACT Foundation, sans-serif',
      zIndex: '1000'
    },
    paragraph: {
      fontSize: 18,
      fontWeight: 400,
      textAlign: 'left' as const,
      color: 'ultra_violet',
      lineHeight: 2
    }
  }
}
)

export default theme