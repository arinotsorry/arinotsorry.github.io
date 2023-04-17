import { Box, Flex, Spacer, IconButton, Icon, Link, Text, Button } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { Link as ReachLink } from "react-router-dom"
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { github, linkedin, cat } from './Icons'

import Squiggle from "../Components/Squiggle"

export default function footer() {

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

  return (
    <>
      <Box position='sticky' bottom='0px' height='40px' bg='ultra_violet'>
        <Squiggle {...squiggle_props} color='rose_quartz' bg='isabelline' top_margin='-50' zIndex='100' />
        <Squiggle {...squiggle_props} color='pale_dogwood' bg='rose_quartz' top_margin='-40' zIndex='200' />
        <Squiggle {...squiggle_props} color='ultra_violet' bg='pale_dogwood' top_margin='-30' zIndex='300' />
      </Box>
      <Box zIndex='500' position='sticky' bottom='0px' bg='ultra_violet' p='8px'>
        <Flex bg='transparent'>

          {/* Social buttons - Github, Linkedin, etc */}
          <Box bg='transparent' pl='24px'>
            <Link href='https://github.com/arinotsorry' isExternal>
              <IconButton
                aria-label='Github'
                bg='ultra_violet'
                icon={github({ color: 'isabelline', bg: 'transparent', h: '35px', w: '35px' })} />
            </Link>
            <Link href='https://www.linkedin.com/in/ari-wisenburn-3934171b3/' isExternal>
              <IconButton
                ml='16px'
                aria-label='Linkedin'
                bg='ultra_violet'
                icon={linkedin({ color: 'isabelline', bg: 'transparent', h: '35px', w: '35px' })} />
            </Link>
          </Box>

          <Spacer bg='transparent' />

          <IconButton
            aria-label='Secret Cat!'
            bg='ultra_violet'
            color='ultra_violet'
            _hover={{ color: 'isabelline' }}
            icon={cat({ bg: 'transparent', h: '35px', w: '35px' })} />

          <Spacer bg='transparent' />

          {/* Initials that redirect to homepage */}
          <Link as={ReachLink} to='/'>
            <Button bg='transparent' mr='32px'>
              <Text textStyle='h1' color='isabelline' fontSize={40} lineHeight={0} mt='4px'>
                AW
              </Text>
            </Button>
          </Link>


        </Flex>
      </Box >


    </>
  )
}