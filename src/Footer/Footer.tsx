import { Box, Flex, Spacer, IconButton, Link, Text, Button, useDisclosure } from '@chakra-ui/react'
import { Link as ReachLink } from "react-router-dom"
import { github, linkedin, cat } from './Icons'

import Squiggle from "../Components/Squiggle"
import CatModal from './CatModal'

export default function Footer(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const squiggle_props = {
    top: true,
    bottom: false,

    color: 'ultra_violet',
    bg: 'isabelline',

    left: 0,
    top_margin: -30,
    width: 1,

    zIndex: 200,
    offset: false,
    fill: true
  }

  const button = {
    zIndex: 90000,
    bg: 'transparent',
    _hover: {
      bg: 'white_cast',
    }
  }

  const cat_modal_props = {
    isOpen: isOpen,
    onClose: onClose,
    window_width: props.window_width,
    window_height: props.window_height
  }

  return (
    <>
      <Box position='sticky' bottom='0px' height='50px' bg='ultra_violet'>
        <Squiggle {...squiggle_props} color='rose_quartz' bg='isabelline' top_margin='-50' zIndex='100' />
        <Squiggle {...squiggle_props} color='pale_dogwood' bg='rose_quartz' top_margin='-40' zIndex='200' />
        <Squiggle {...squiggle_props} color='ultra_violet' bg='pale_dogwood' top_margin='-30' zIndex='300' />



        <Flex zIndex='90000' pb='2px'>

          {/* Social buttons - Github, Linkedin, etc */}
          <Box pl='24px' zIndex='900000'>

            <Link href='https://github.com/arinotsorry' isExternal>
              <IconButton
                {...button}
                aria-label='Github'
                bg='ultra_violet'
                pl='1px'
                pt='1px'
                icon={github({ color: 'isabelline', h: '35px', w: '35px' })} />
            </Link>


            <Link href='https://www.linkedin.com/in/ari-wisenburn-3934171b3/' isExternal>
              <IconButton
                {...button}
                ml='16px'
                aria-label='Linkedin'
                bg='ultra_violet'
                pl='1px'
                pt='1px'
                zIndex='90000'
                icon={linkedin({ color: 'isabelline', h: '35px', w: '35px' })} />
            </Link>

          </Box>

          <Spacer />

          {/* Secret Cat Button */}
          <Box zIndex='90000'>
            <IconButton
              onClick={onOpen}
              aria-label='Secret Cat!'
              bg='ultra_violet'
              color='ultra_violet'
              _hover={{ color: 'isabelline' }}
              icon={cat({ h: '35px', w: '35px' })} />
          </Box>

          {isOpen && <CatModal {...cat_modal_props} />}

          <Spacer />

          {/* Initials that redirect to homepage */}
          <Link as={ReachLink} to='/'>
            <Button mr='32px' {...button}>
              <Text zIndex='90000' textStyle='h1' color='isabelline' opacity={1} fontSize={40} lineHeight={0} mt='4px'>
                AW
              </Text>
            </Button>
          </Link>


        </Flex>
      </Box >



    </>
  )
}