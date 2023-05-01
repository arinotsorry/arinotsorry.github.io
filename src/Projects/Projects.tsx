import { Box, Text, VStack, HStack, useBreakpointValue, Center } from '@chakra-ui/react'

function Rows(props: any) {
  return (
    <VStack w='100%' h='100%' position='relative' border='1px'>
      <HStack w='100%' h='50%' spacing='4px'>
        <Box
          w='50%'
          h='100%'
          minH='200px'
          bg='cornflowerblue'
        />
        <Box
          w='50%'
          h='100%'
          minH='200px'
          bg='lightcoral'
        />
      </HStack>
      <HStack w='100%' h='50%' spacing='4px'>
        <Box
          w='50%'
          h='100%'
          minH='200px'
          bg='goldenrod'
        />
        <Box
          w='50%'
          h='100%'
          minH='200px'
          bg='limegreen'
        />
      </HStack>
    </VStack>
  )
}

function Column(props: any) {
  return (
    <VStack
      w='100%'
      h='100%'
      position='relative'
      border='1px'>
      <Box
        w='100%'
        h='50%'
        minH='200px'
        bg='cornflowerblue'
      />
      <Box
        w='100%'
        h='100%'
        minH='200px'
        bg='lightcoral'
      />
      <Box
        w='100%'
        h='100%'
        minH='200px'
        bg='goldenrod'
      />
      <Box
        w='100%'
        h='100%'
        minH='200px'
        bg='limegreen'
      />
    </VStack>
  )
}

export default function Projects(props: any) {
  const gridDisplay = useBreakpointValue([false, false, true])

  return (
    // <Box
    //   overflow='visible'
    //   h='100%'>
    <VStack
      pt='32px'
      pb='12px'
      h='100%'
      minH={['1080px', '1080px', '512px']}
    >
      {gridDisplay ?
        <Rows {...props} />
        :
        <Column {...props} />
      }

      {/* This becomes 2 lines smaller than the 'md' breakpoint, 
      so we can set it to a consistent size and deal with the smaller version formatting later */}
      <Center
        fontSize={18}
        textAlign='center'
        p='4px'
      >
        <Text>
          You can check out more on my Github, linked in the footer
        </Text>
      </Center>
    </VStack>
  )
}