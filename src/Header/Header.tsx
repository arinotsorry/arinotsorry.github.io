import {
  Flex,
  Box,
  Text,
  Button,
  Link,
  useToast
} from '@chakra-ui/react'

import { Link as ReachLink } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css'

import 'animate.css'
import './Header.css'
import Squiggle from '../Components/Squiggle'
import { useState } from 'react'
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

export default function Header(props: any) {
  const [projectShown, setProjectShown] = useState(false);
  const [contactShown, setContactShown] = useState(false);
  const [downloadShown, setDownloadShown] = useState(false);

  // what percentage of the screen the buttons start at & take up
  // basically a lookup table
  const percentages = {
    project: {
      left: 0.3,
      width: 0.7 * 0.3
    },
    contact: {
      left: (0.3 + (0.7 * 0.3)),
      width: 0.7 * 0.3
    },
    download: {
      left: (0.3 + (2 * 0.7 * 0.3)),
      width: 0.7 * 0.39
    }
  }

  // props that all button squiggles have in common
  const all_squiggles = {
    top: false,
    bottom: true,
    color: 'ultra_violet',
    bg: 'pale_dogwood',
    top_margin: 90, // remove later
    zIndex: 400,
    offset: false
  }

  const project_squiggle = {
    ...all_squiggles,
    left: find_starting_px(percentages.project.left * props.window_width) + 40,
    width: find_width(percentages.project.left * props.window_width, percentages.project.width * props.window_width) - 40,
  }

  const contact_squiggle = {
    ...all_squiggles,
    left: find_starting_px(percentages.contact.left * props.window_width),
    width: find_width(percentages.contact.left * props.window_width, percentages.contact.width * props.window_width),
  }

  const download_squiggle = {
    ...all_squiggles,
    left: find_starting_px(percentages.download.left * props.window_width),
    width: find_width(percentages.download.left * props.window_width, percentages.download.width * props.window_width),
  }

  const button_box = {
    h: '80px',
    textStyle: 'navbar',
    layerStyle: 'navbar_button',
    alignItems: 'center',
    top: '40px',
    position: 'absolute' as const
  }

  const animation_color_fill = {
    width: '100%',
    height: '100px',
    top: '0px',
    bg: 'ultra_violet',
    zIndex: '1000'
  }

  const navbar_button = {
    bg: 'transparent',
    fontSize: 32,
    fontWeight: 200,
    _hover: {},
    _active: {}
  }

  const base_ptx = 0.05 * props.window_width
  const toast = useToast()

  return (
    <>
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

      <Flex
        align={'center'}
        layerStyle='header_component'
        pt='4px'
        w={props.window_width}
        h='120px'
        bg='pale_dogwood'>

        {/* name */}
        <Box
          position='relative'
          top='-30px'>
          <Link
            as={ReachLink}
            to='/'>
            {/* <Button {...name_button}> */}
            <Flex
              w='30%'
              h='100%'
              color='space_cadet'>

              <Text
                textStyle='h1'
                w='45px'
                position='absolute'
                left={base_ptx + 'px'}
                mt='-10px'>
                A
              </Text>

              <Text
                textStyle='h2'
                position='absolute'
                left={base_ptx + 44 + 'px'}
                mt='-20px'>
                ri
              </Text>

              <Box w='28px'></Box>

              <Text
                textStyle='h1'
                w='50px'
                position='absolute'
                left={base_ptx + 94 + 'px'}
                mt='-7px'>
                W
              </Text>

              <Text
                textStyle='h2'
                position='absolute'
                left={base_ptx + 142 + 'px'}
                mt='-20px'>
                isenburn
              </Text>
            </Flex>
            {/* </Button> */}
          </Link>
        </Box>

        {/* navbar */}
        <Box flex='1' h='73px'>
          <Flex>

            {/* projects */}
            <Box
              {...button_box}
              left={project_squiggle.left + 'px'}
              width={project_squiggle.width + 'px'}
              onMouseEnter={() => setProjectShown(true)}
              onMouseLeave={() => setProjectShown(false)}>
              <Link
                as={ReachLink}
                to='/projects'>
                <Button {...navbar_button}>
                  Projects
                </Button>
              </Link>
            </Box>

            {/* contact */}
            <Box
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
              </Link>
            </Box>

            {/* download resume */}
            <Box
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
        </Box>
      </Flex >

      {/* animated box components that go under navbar text */}
      {/* Projects animation */}
      <Box
        className='animation'
        position='absolute'
        width={project_squiggle.width}
        top={projectShown ? '0px' : '-120px'}
        left={project_squiggle.left}

      >
        <Squiggle {...project_squiggle} />
        <Box {...animation_color_fill}></Box>
      </Box>

      {/* Contact animation */}
      <Box
        className='animation'
        position='absolute'
        width={contact_squiggle.width}
        top={contactShown ? '0px' : '-120px'}
        left={contact_squiggle.left}

      >
        <Squiggle {...contact_squiggle} />
        <Box {...animation_color_fill}></Box>
      </Box>

      {/* Download Resume animation */}
      <Box
        className='animation'
        position='absolute'
        width={download_squiggle.width}
        top={downloadShown ? '0px' : '-120px'}
        left={download_squiggle.left}

      >
        <Squiggle {...download_squiggle} />
        <Box {...animation_color_fill}></Box>
      </Box>
    </>
  )
}