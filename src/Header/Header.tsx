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

function Name(base_ptx: number) {
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
    toast: toast,
    projectShown: projectShown,
    contactShown: contactShown,
    downloadShown: downloadShown,
    setProjectShown: setProjectShown,
    setContactShown: setContactShown,
    setDownloadShown: setDownloadShown
  }

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

      <Box // entire navbar
        layerStyle='header_component'
        pt='4px'
        position='absolute'
        ml='0px'
        w='100%'
        h='120px'
        bg='pale_dogwood'>

        {Name(base_ptx)}

        <Navbar {...navbar_props} />

      </Box>
    </>
  )
}