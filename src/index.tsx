import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import './index.css'

// importing Chakra stuff
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme, Box } from '@chakra-ui/react'

// creating new theme extension
const colors = {
  brand: {
    100: '#EAEFBD',
    200: '#C9E3AC',
    300: '#90BE6D',
    400: '#9A879D',
    500: '#37371F'
  },
}
const theme = extendTheme({ colors })

// passing the theme to the ChakraProvider
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </BrowserRouter>
)
