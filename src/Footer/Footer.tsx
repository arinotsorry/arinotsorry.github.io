import { Box, Flex, Spacer } from '@chakra-ui/react'
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

    <Box position='sticky' bottom='0px' height='40px' bg='ultra_violet'>
      <Squiggle {...squiggle_props} color='rose_quartz' bg='isabelline' top_margin='-50' zIndex='100' />
      <Squiggle {...squiggle_props} color='pale_dogwood' bg='rose_quartz' top_margin='-40' zIndex='200' />
      <Squiggle {...squiggle_props} color='ultra_violet' bg='pale_dogwood' top_margin='-30' zIndex='300' />
      <Flex>

      </Flex>
    </Box>
  )
}