import { Box, Square, Flex, Spacer } from '@chakra-ui/react'

export default function Home() {

  return (
    <Flex wrap='wrap' bg='isabelline'>

      <Square bg='cornflowerblue' size='400px' m='40px'>
        picture
      </Square>

      <Box
        p='10'
        flex='1'
        bg='azure'
        w='600px'
        ml='20px'
      >
        description
      </Box>
    </Flex>
  )
}