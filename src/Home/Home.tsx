import { Box, Square, Flex, Spacer } from '@chakra-ui/react'
import Squiggle from '../Components/Squiggle'

export default function Home() {

  return (
    <>

      <Flex wrap='wrap' bg='isabelline' position='relative' pt='110px' h='100%'>

        <Square bg='cornflowerblue' size='400px' m='80px' mt='0px'>
          picture
        </Square>

        <Box
          p='10'
          flex='1'
          bg='azure'
          h='400px'
          m='80px'
          ml='40px'
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