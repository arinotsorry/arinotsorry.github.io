import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import { Box } from '@chakra-ui/react'
import { Outlet } from "react-router-dom";
import Squiggle from '../Components/Squiggle'
import useWindowDimensions from '../Hooks/useWindowDimensions';

// the squiggle across the screen under the nav bar
const dogwood_squiggle = {
  top: false,
  bottom: true,
  left: 0,
  top_margin: 100,
  color: 'pale_dogwood',
  bg: 'rose_quartz',
  width: 1,
  zIndex: 100,
  offset: false,
  fill: true
}

function calculate_box_height(window_height: number, top: number) {
  return window_height - top
}

export default function PageContainer() {
  const { height, width } = useWindowDimensions()
  const top = 120

  const box_height = calculate_box_height(height, top)
  return (
    <>
      <Box position='absolute' top='0px'>
        <Header window_width={width} />
      </Box>
      <Box position='absolute' top='0px'>
        <Squiggle {...dogwood_squiggle} />
      </Box>

      <Box color='space_cadet' position='absolute' top={top + 'px'} w='100%' h={box_height + 'px'} overflow='hidden'>
        <Outlet />
        <Footer />
      </Box>
    </>
  )
}

// <Box w='100%' h='100%' border='2px' borderColor='orange' position='relative' zIndex='8000'></Box>