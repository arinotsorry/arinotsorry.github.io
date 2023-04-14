import { Box, Square, Flex, Spacer } from '@chakra-ui/react'
import Squiggle from '../Components/Squiggle'

export default function Home() {
  const rose_quartz_squiggle = {
    top: false,
    bottom: true,
    left: 0,
    top_margin: -10,
    color: 'rose_quartz',
    bg: 'isabelline',
    width: 1,
    zIndex: 1,
    offset: false,
    fill: true
  }
  return (
    <>
      <Squiggle {...rose_quartz_squiggle} />
      <Flex wrap='wrap' bg='isabelline' position='relative' pt='120px' h='100%'>

        <Square bg='cornflowerblue' size='600px' m='80px' mt='0px'>
          picture
        </Square>

        <Box
          p='10'
          flex='1'
          bg='azure'
          h='600px'
          m='80px'
          ml='20px'
          mt='0px'
          border='1px'
          borderColor={'black'}
        >
          description
        </Box>
      </Flex>
    </>
  )
}