import Header from '../Header/Header'
import { Box } from '@chakra-ui/react'
import Squiggle from '../Components/Squiggle'

const box_container = {
  spacing: '0px',
  position: 'absolute' as const,
  w: '100%',
  ml: '0px',
  top: '120px',
  zIndex: '50'
}

const squiggle_props = {
  top: false,
  bottom: true,
  left_margin: 0,
  top_margin: 90,
  color: 'pale_dogwood',
  bg: 'isabelline',
  start: 90,
  width_percentage: 1
}

export default function PageContainer() {
  return (
    <>
      <Header />
      <Squiggle layerStyle='navbar_button' {...squiggle_props} />
      <Box layerStyle='container_box' {...box_container}></Box>
    </>
  )
}