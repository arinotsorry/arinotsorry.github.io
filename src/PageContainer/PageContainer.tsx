import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import { Box } from '@chakra-ui/react'
import { Outlet } from "react-router-dom";
import Squiggle from '../Components/Squiggle'
import useWindowDimensions from '../Hooks/useWindowDimensions';

export default function PageContainer() {
  const { height, width } = useWindowDimensions()
  const top = 120
  const box_height = height - top

  // the squiggles across the screen under the nav bar
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

  const rose_quartz_squiggle = {
    top: false,
    bottom: true,
    left: 0,
    top_margin: 110,
    color: 'rose_quartz',
    bg: 'isabelline',
    width: 1,
    zIndex: 1,
    offset: false,
    fill: true
  }

  // footer
  const footer_props = {
    window_width: width,
    window_height: height
  }

  return (
    <>
      <Box position='absolute' top='0px'>
        <Header window_width={width} />
      </Box>
      <Box position='absolute' top='0px'>
        <Box position='absolute'>
          <Squiggle {...dogwood_squiggle} />
          <Squiggle {...rose_quartz_squiggle} />
        </Box>

      </Box>

      {/* Outer container - background */}
      <Box
        color='space_cadet'
        position='absolute'
        top={'120px'}
        w='100%'
        h={box_height + 'px'}
        bg='isabelline'
        overflow={'hidden'} >

        {/* Container for outlet content */}
        <Box
          h={height - 259 + 'px'}
          w={width}
          position='absolute'
          top='28px'

        >
          <Outlet />
        </Box>

        {/* Container for footer */}
        <Box
          position='absolute'
          bottom='0'
          w='100%'>
          <Footer {...footer_props} />
        </Box>
      </Box>
    </>
  )
}

export function useFlexboxHeight() {
  return useWindowDimensions().height - 259
}