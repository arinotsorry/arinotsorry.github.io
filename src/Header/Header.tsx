import { Flex, Box, Text, Center } from '@chakra-ui/react'
import 'animate.css'
import './Header.css'
import Squiggle from '../Components/Squiggle3'
import { useState } from "react"
import useWindowDimensions from '../Hooks/useWindowDimensions';
import '@fontsource/charmonman/400.css'
import '@fontsource/clicker-script/400.css'
import '@fontsource/edu-nsw-act-foundation/400.css'
import '@fontsource/charmonman'



export default function Header() {
  const [projectShown, setProjectShown] = useState(false);
  const [contactShown, setContactShown] = useState(false);
  const [downloadShown, setDownloadShown] = useState(false);

  const center = {
    h: '73px',
    textStyle: 'navbar',
    layerStyle: 'navbar_button'
  }

  const spanning_squiggle = {
    top: false,
    bottom: true,

    color: 'space_cadet',
    bg: 'pale_dogwood',

    left_percentage: 0,
    top_margin: -30,
    width_percentage: 1,

    zIndex: 100,
    offset: true
  }

  const all_squiggles = {
    top: false,
    bottom: true,

    color: 'space_cadet',
    bg: 'pale_dogwood',

    top_margin: 90,
    zIndex: 400,
    offset: true
  }

  const project_squiggle = {
    ...all_squiggles,
    left_percentage: 0.4,
    width_percentage: 0.6 * 0.3,
  }

  const contact_squiggle = {
    ...all_squiggles,
    left_percentage: (0.4 + (0.6 * 0.3)),
    width_percentage: 0.6 * 0.3,
  }

  const download_squiggle = {
    ...all_squiggles,
    left_percentage: (0.4 + (2 * 0.6 * 0.3)),
    width_percentage: 0.6 * 0.39,
  }

  return (
    <>
      <Squiggle {...spanning_squiggle} />
      <Flex align={'center'} layerStyle='header_component' pt='8px'>
        <Flex w='40%' h='100%' color='space_cadet'>
          <Box w='4%' bg='transparent'></Box>
          <Text textStyle='h1' w='45px'>
            A
          </Text>
          <Text textStyle='h2'>
            ri
          </Text>
          <Box w='28px' bg='transparent'></Box>
          <Text textStyle='h1' w='50px'>
            W
          </Text>
          <Text textStyle='h2'>
            isenburn
          </Text>
        </Flex>
        <Box flex='1' h='73px'>
          <Flex>
            <Center
              onMouseEnter={() => setProjectShown(true)}
              onMouseLeave={() => setProjectShown(false)}
              {...center} w='30%'>
              Projects
            </Center>
            <Center
              onMouseEnter={() => setContactShown(true)}
              onMouseLeave={() => setContactShown(false)}
              {...center} w='30%'>
              Contact
            </Center>
            <Center
              onMouseEnter={() => setDownloadShown(true)}
              onMouseLeave={() => setDownloadShown(false)}
              {...center} w='39%'>
              Download Resume
            </Center>
          </Flex>
        </Box>
      </Flex >
      <Box
        className='animation'
        position='absolute'
        width={project_squiggle.width_percentage}
        top={projectShown ? '0px' : '-120px'}
        left={0.4 * useWindowDimensions().width}
        zIndex='300'
        bg='transparent'
      >
        <Squiggle {...project_squiggle} />
        <Box
          width='100%'
          height='100px'
          top='0px'
          bg='space_cadet'
          zIndex='1000'
        ></Box>
      </Box>
      <Box
        className='animation'
        position='absolute'
        width={contact_squiggle.width_percentage}
        top={contactShown ? '0px' : '-120px'}
        left={(0.4 + (0.6 * 0.3)) * useWindowDimensions().width}
        zIndex='300'
        bg='transparent'
      >
        <Squiggle {...contact_squiggle} />

        <Box
          width='100%'
          height='100px'
          top='0px'
          bg='space_cadet'
          zIndex='1000'
        ></Box>
      </Box>
      <Box
        className='animation'
        position='absolute'
        width={download_squiggle.width_percentage}
        top={downloadShown ? '0px' : '-120px'}
        left={(0.4 + (2 * 0.6 * 0.3)) * useWindowDimensions().width}
        zIndex='300'
        bg='transparent'
      >
        <Squiggle {...download_squiggle} />
        <Box
          width='100%'
          height='100px'
          top='0px'
          bg='space_cadet'
          zIndex='1000'
        ></Box>
      </Box>
    </>
  )
}