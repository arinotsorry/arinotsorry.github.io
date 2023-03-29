import { Flex, Box, Text, Center, SlideFade, Fade, Collapse } from '@chakra-ui/react'

import Squiggle from '../Components/Squiggle2'
import React, { useState } from "react"
import { render } from "react-dom"
// import useWindowDimensions from '../Hooks/useWindowDimensions';
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

  const all_squiggles = {
    top: false,
    bottom: true,

    color: 'space_cadet',
    bg: 'pale_dogwood',

    zIndex: 400,
    top_margin: 90
  }

  const project_squiggle = {
    left_percentage: 0.4,
    width_percentage: 0.6 * 0.3,
    scooch: 4,
    ...all_squiggles
  }

  const contact_squiggle = {
    left_percentage: 0.4 + (0.6 * 0.3),
    width_percentage: 0.6 * 0.3,
    scooch: 25,
    ...all_squiggles
  }

  const download_squiggle = {
    left_percentage: 0.4 + (2 * 0.6 * 0.3),
    width_percentage: 0.6 * 0.39,
    scooch: 5.5,
    ...all_squiggles
  }

  return (
    <>
      <Flex align={'center'} layerStyle='header_component'>
        <Flex w='40%' h='100%'>
          <Box w='4%' bg='transparent'></Box>
          <Text textStyle='h1' w='45px'>
            A
          </Text>
          <Text textStyle='h2'>
            ri
          </Text>
          <Box w='32px' bg='transparent'></Box>
          <Text textStyle='h1' w='45px'>
            W
          </Text>
          <Text textStyle='h2' layerStyle='header_component'>
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
      {projectShown &&
        <Collapse in={projectShown} animateOpacity>
          <Squiggle {...project_squiggle} />
        </Collapse>}
      <> {contactShown &&
        <Squiggle {...contact_squiggle} />}
      </>
      <> {downloadShown &&
        <Squiggle {...download_squiggle} />}
      </>
    </>
  )
}