import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import { Box } from '@chakra-ui/react'
import { Outlet } from "react-router-dom";
import Squiggle from '../Components/Squiggle'
import useWindowDimensions from '../Hooks/useWindowDimensions';

export default function PageContainer(props: any) {
  const width = useWindowDimensions().width

  // the squiggles across the screen under the nav bar
  const dogwood_squiggle = {
    top: false,
    bottom: true,
    left: 0,
    top_margin: 100,
    color: 'pale_dogwood.1000',
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

  return (
    <Box overflowX='hidden' h='100%' w='100%'>
      <Box position='absolute' top='0px' w='100%'>
        <Header window_width={width} />
      </Box>
      <Box
        position='absolute'
        top='0px'
        overflow='hidden'
        h='152px'
        w='100%'
      >
        <Squiggle {...dogwood_squiggle} />
        <Squiggle {...rose_quartz_squiggle} />
      </Box>

      {/* Outer container - background */}
      <Box
        color='space_cadet'
        position='fixed'
        w='100%'
        h='100%'
        bg='isabelline'
        overflowX={'hidden'}
        overflowY='hidden'
        zIndex='-1'
      >

        {/* Container for outlet content */}
        <Box
          h={'calc(100vh - 248px)'}
          w={'100%'}
          position='absolute'
          top='150px'
          overflowX='hidden'
          overflowY='auto'
        >
          {props.page}
        </Box>
      </Box>

      {/* Footer */}
      <Box
        position='fixed'
        w='100%'
        top='calc(100vh - 48px)'
      >
        <Footer />
      </Box>
    </Box>
  )
}