import { Flex, Box, Text, Center } from '@chakra-ui/react'
import '@fontsource/charmonman/400.css'
import '@fontsource/clicker-script/400.css'
import '@fontsource/edu-nsw-act-foundation/400.css'
import '@fontsource/charmonman'
import '../theme'

const center = {
  h: '73px'
}

// function NavbarButton() {

// }

export default function Header() {
  return (
    <Flex align={'center'} layerStyle='header_component'>
      <Flex w='40%' h='100%'>
        <Box w='4%' bg='transparent'></Box>
        <Text textStyle='h1' w='45px'>
          A
        </Text>
        <Text textStyle='h2'>
          ri
        </Text>
        <Box w='32px' bg='transparent'></Box>
        <Text textStyle='h1' w='45px'>
          W
        </Text>
        <Text textStyle='h2' layerStyle='header_component'>
          isenburn
        </Text>
      </Flex>
      <Box flex='1' h='73px' pr='2%'>
        <Flex>
          <Center {...center} textStyle='navbar' layerStyle='navbar_button' w='30%'>
            Projects
          </Center>
          <Center {...center} textStyle='navbar' layerStyle='navbar_button' w='30%'>
            Contact
          </Center>
          <Center {...center} textStyle='navbar' layerStyle='navbar_button' w='39%'>
            Download Resume
          </Center>
        </Flex>
      </Box>
    </Flex >
  )
}