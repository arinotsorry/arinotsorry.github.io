import "./Home.css";
import Header from '../Header/Header'
import { Box, Stack } from '@chakra-ui/react'
import Squiggle from './Squiggle'

const box_container = {
  spacing: '0px',
  position: 'absolute' as const,
  w: '100%',
  ml: '0px',
  top: '120px',
  zIndex: '50'
}

export default function Home() {
  return (
    <>
      <Header />
      <Squiggle />
      <Box layerStyle='container_box' {...box_container}></Box>
    </>
  )
}