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

// the squiggle across the screen under the nav bar
const squiggle_props = {
  top: false,
  bottom: true,
  left_percentage: 0,
  top_margin: 100,
  color: 'pale_dogwood',
  bg: 'isabelline',
  width_percentage: 1,
  zIndex: 1,
  offset: false
}

export default function PageContainer() {
  return (
    <>
      <Header />
      <Squiggle {...squiggle_props} />
      <Box layerStyle='container_box' {...box_container}></Box>
    </>
  )
}