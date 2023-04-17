import { Flex, Text } from '@chakra-ui/react'

export default function Download(props: any) {
  return (
    <Flex wrap='wrap' bg='isabelline' position='relative' h='100%' alignContent={'center'} fontSize='32px' p='256px'>
      <Text bg='transparent'>
        Oop, this is embarassing... 😬
      </Text>
      <Text bg='transparent' pt='64px'>
        I'm working on getting my resume up here, but for now, check out my Linkedin in the footer!
      </Text>
      <Text bg='transparent'>
        Feel free to checkout my Github, also linked in the footer.
      </Text>
      <Text bg='transparent' pt='64px'>
        FYI: there's a secret surprise on this page (well, every page) - see if you can find it ;)
      </Text>
    </Flex>
  )
}