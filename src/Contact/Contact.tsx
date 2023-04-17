import { Flex, Text } from '@chakra-ui/react'

export default function Contact(props: any) {
  return (
    <Flex wrap='wrap' bg='isabelline' position='relative' h='100%' alignContent={'center'} fontSize='32px' p='256px'>
      <Text bg='transparent'>
        Right now, you can contact me via email at: ari.wisenburn@gmail.com
      </Text>
      <Text bg='transparent' pt='64px'>
        You can also check out my Linkedin, in the footer.
        Feel free to also check out my Github for more projects I've done in the past,
        and check back here soon for more progress!
      </Text>
      <Text bg='transparent' pt='64px'>
        FYI: there's a secret surprise on this page (well, every page) - see if you can find it ;)
      </Text>
    </Flex>
  )
}