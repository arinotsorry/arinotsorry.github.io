import {
  Box,
  Text,
  Link,
  useToast,
} from '@chakra-ui/react'

import { useState } from 'react'
import { Link as ReachLink } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css'

import Squiggle from '../Components/Squiggle'
import Navbar from './Navbar'

import 'animate.css'
import './Header.css'
import '@fontsource/charmonman/400.css'
import '@fontsource/clicker-script/400.css'
import '@fontsource/edu-nsw-act-foundation/400.css'
import '@fontsource/charmonman'


/* normally these two functions would go into the Squiggle.tsx folder and I'd have a 
   'fill' prop where I can extend the curves to the edges of the box or round them off
   at the nearest full circle, but we don't have time rn to implement this as a full-out
   Squiggle feature, so instead we're calculating the width and left starting point here */

function find_starting_px(left: number) {
  let circles_start = left - (left % 20)
  if (circles_start % 40 === 20) {
    circles_start += 40
  }
  else {
    if (left % 40 !== 0 && left % 40 !== 20) {
      circles_start += 20
    }
  }
  return circles_start
}

function find_width(left: number, width: number) {
  let circles_start = find_starting_px(left)
  let right = width + left

  // figure out how many circles can fit in the rectangle
  let num_of_circles = ((right - circles_start) / 40) >> 0

  return num_of_circles * 40
}

function name(base_ptx: number) {
  return (
    <Box
      position='relative'
      top='28px'
      color='space_cadet'
      onClick={() => { }}>
      <Link
        as={ReachLink}
        to='/'>
        <Text
          textStyle='h1'
          w='45px'
          position='absolute'
          left={base_ptx + 'px'}
          mt='-13px'>
          A
        </Text>

        <Text
          textStyle='h2'
          position='absolute'
          left={base_ptx + 44 + 'px'}
          mt='-20px'>
          ri
        </Text>

        <Text
          textStyle='h1'
          w='50px'
          position='absolute'
          pl={base_ptx + 94 + 'px'}
          mt='-10px'>
          W
        </Text>

        <Text
          textStyle='h2'
          position='absolute'
          left={base_ptx + 142 + 'px'}
          mt='-20px'>
          isenburn
        </Text>
      </Link>
    </Box>
  )
}



export default function Header(props: any) {
  const [projectShown, setProjectShown] = useState(false);
  const [contactShown, setContactShown] = useState(false);
  const [downloadShown, setDownloadShown] = useState(false);

  const base_ptx = 0.02 * props.window_width
  const toast = useToast()

  const navbar_props = {
    window_width: props.window_width,
    projectShown: projectShown,
    contactShown: contactShown,
    downloadShown: downloadShown,
    setProjectShown: setProjectShown,
    setContactShown: setContactShown,
    setDownloadShown: setDownloadShown
  }

  /**
   * Starting here, these are the ones we want
   */

  return (
    <Box>
      <Squiggle
        top={false}
        bottom={true}
        color={'ultra_violet'}
        bg={'pale_dogwood'}
        left={0}
        top_margin={-30}
        width={1}
        zIndex={100}
        offset={false}
        fill={true} />

      <Box // entire navbar
        layerStyle='header_component'
        pt='4px'
        position='absolute'
        ml='0px'
        w='100%'
        h='120px'
        bg='pale_dogwood'>

        {name(base_ptx)}

        <Navbar {...navbar_props} />

      </Box>

      {/* <Box
          {...button_box}
          left={contact_squiggle.left + 'px'}
          width={contact_squiggle.width + 'px'}
          onMouseEnter={() => setContactShown(true)}
          onMouseLeave={() => setContactShown(false)}>
          <Link
            as={ReachLink}
            to='/contact'>
            <Button {...navbar_button}>
              Contact
            </Button>
  </Link> */}

      {/* download resume */}
      {/* <Box
          {...button_box}
          left={download_squiggle.left + 'px'}
          width={download_squiggle.width + 'px'}
          onMouseEnter={() => setDownloadShown(true)}
          onMouseLeave={() => setDownloadShown(false)}>
          <Link
            href='/Ari Wisenburn Resume.pdf'
            download='Ari Wisenburn Resume'
            isExternal>
            <Button
              {...navbar_button}
              justifyContent='left'
              overflowWrap='break-word'
              onClick={() => {
                toast({
                  title: 'Congratulations!',
                  description: 'You just made the best decision you\'re gonna make today!' +
                    '(Unless you\'re proposing or something lol, in which case good luck!)',
                  status: 'success',
                  isClosable: true,
                  colorScheme: '#adc9a7',
                  containerStyle: {
                    backgroundColor: '#adc9a7',
                    border: '1px',
                    borderColor: '#698064',
                    borderRadius: '20px'
                  }
                })
              }}>
              Download Resume
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box> */}

      {/* animated box components that go under navbar text */}
      {/* Projects animation */}
      {/* <Box
    className='animation'
    position='absolute'
    width={project_squiggle.width}
    top={projectShown ? '0px' : '-120px'}
    left={project_squiggle.left}

  >
    <Squiggle {...project_squiggle} />
    <Box {...animation_color_fill}></Box>
  </Box>

  {/* Contact animation */ }
      {/* <Box
    className='animation'
    position='absolute'
    width={contact_squiggle.width}
    top={contactShown ? '0px' : '-120px'}
    left={contact_squiggle.left}

  >
    <Squiggle {...contact_squiggle} />
    <Box {...animation_color_fill}></Box>
  </Box> */}

      {/* Download Resume animation */}
      {/* <Box
    className='animation'
    position='absolute'
    width={download_squiggle.width}
    top={downloadShown ? '0px' : '-120px'}
    left={download_squiggle.left}

  >
    <Squiggle {...download_squiggle} />
    <Box {...animation_color_fill}></Box> */}
    </Box>
  )
}