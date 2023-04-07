import Header from '../Header/Header'
import { Box } from '@chakra-ui/react'
import { Outlet } from "react-router-dom";
import Squiggle from '../Components/Squiggle'

const box_container = {
  spacing: '0px',
  position: 'absolute' as const,
  w: '100%',
  ml: '0px',
  top: '120px',
  zIndex: '50'
}

// the squiggle across the screen under the nav bar
const dogwood_squiggle = {
  top: false,
  bottom: true,
  left: 0,
  top_margin: 100,
  color: 'pale_dogwood',
  bg: 'isabelline',
  width: 1,
  zIndex: 1,
  offset: false,
  fill: true
}

export default function PageContainer() {
  return (
    <>
      <Header />
      <Squiggle {...dogwood_squiggle} />
      <Box layerStyle='container_box' {...box_container}></Box>
      <Outlet />
    </>
  )
}