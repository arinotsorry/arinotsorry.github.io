import { Box, Text, VStack, HStack, useBreakpointValue, Center, Image } from '@chakra-ui/react'
import ProjectCard from './ProjectCard'

function Rows() {
  const minH = 200
  const container = {
    w: '50%',
    h: '100%',
    minH: minH + 'px'
  }

  return (
    <VStack
      w='calc(100% - 20px)'
      ml='20px'
      h='100%'
      position='relative'
      overflow='hidden'
    >
      <HStack
        w='100%'
        h='49%'
        spacing='4px'
      >
        <Box {...container} >
          <ProjectCard
            src='/Projects/Website.png'
            shadow='md'
            opacity={0.85}
          />
        </Box>
        <Box {...container} >
          <ProjectCard
            src='/Projects/Zocdoc.png'
            opacity={0.85}
          />
        </Box>
      </HStack>

      <HStack
        w='100%'
        h='49%'
        spacing='4px'
      >
        <Box {...container} >
          <ProjectCard
            src='/Projects/Clue.jpg'
            shadow='md'
          />
        </Box>
        <Box {...container} >
          <ProjectCard src='/Projects/Wine.png' />
        </Box>
      </HStack>
    </VStack>
  )
}

function Column() {
  const minH = 200
  const container = {
    w: '100%',
    h: '100%',
    minH: minH + 'px'
  }

  return (
    <VStack
      w='100%'
      h='100%'
      position='relative'
      overflow='hidden'
    >
      <Box {...container} >
        <ProjectCard
          src='/Projects/Website.png'
          shadow='md'
          opacity={0.85}
        />
      </Box>
      <Box {...container} >
        <ProjectCard
          src='/Projects/Zocdoc.png'
          opacity={0.85}
        />
      </Box>
      <Box {...container} >
        <ProjectCard
          src='/Projects/Clue.jpg'
          shadow='md'
        />
      </Box>
      <Box {...container} >
        <ProjectCard src='/Projects/Wine.png' />
      </Box>
    </VStack>
  )
}

export default function Projects() {
  const gridDisplay = useBreakpointValue([false, false, true])

  return (
    <VStack
      pt='32px'
      pb='8px'
      h='100%'
      minH={['1080px', '1080px', '512px']}
    >
      {gridDisplay ?
        <Rows />
        :
        <Column />
      }

      {/* This becomes 2 lines smaller than the 'md' breakpoint, 
      so we can set it to a consistent size and deal with the smaller version formatting later */}
      <Center
        fontSize={18}
        textAlign='center'
        p='4px'
      >
        <Text>
          You can check out more projects on my Github, linked in the footer
        </Text>
      </Center>
    </VStack>
  )
}