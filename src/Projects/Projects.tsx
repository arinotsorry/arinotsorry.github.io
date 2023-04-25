import { Flex, Text } from '@chakra-ui/react'

export default function Projects(props: any) {
  return (
    <Flex wrap='wrap' bg='isabelline' position='relative' h='100%' alignContent={'center'} fontSize='32px' p='256px'>
      <Text >
        Right now, my main project is this website.
        Check out my github and Linkedin in the footer for more projects I've done in the past,
        and check back here soon for more progress!
      </Text>
      <Text pt='64px'>
        FYI: there's a secret surprise on this page (well, every page) - see if you can find it ;)
      </Text>
    </Flex>
  )
}