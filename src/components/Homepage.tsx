import { useState } from 'react'

// importing components
import { Box } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'

function Homepage() {
  const [count, setCount] = useState(0)

  return (
    <Flex flexWrap={'wrap'} justify='space-around' align='center' paddingTop='40px'>
      <Square bg='green' size={'400px'} position={'relative'} left='0%'>
        picture
      </Square>
      <Square bg='pink' size={'400px'}>
        Description
      </Square>
    </Flex>
  )
}

export default Homepage
