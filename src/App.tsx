import React from 'react';
import { useState } from 'react'
import './App.css'

// my own components
import Header from './components/Header/Header'
import Footer from './components/Footer'
import Page from './components/Page';

// Chakra components
import { Box, Divider } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box w='100vw' h='100vh' position={'absolute'} left='0' top='0' backgroundColor={'brand.100'}>
      <Header />
      <Divider />
      <Page />
      <Divider />
      <Footer />
    </Box>
  )
}

export default App

