import {
  Box,
  Text,
  Link,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
  Button,
  useToast
} from '@chakra-ui/react'
import { useState } from 'react'


export default function Contact(props: any) {
  const [emailHasBeenClicked, setEmailHasBeenClicked] = useState(false)
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const isError = email === ''

  const linkedin = 'https://www.linkedin.com/in/ari-wisenburn-3934171b3/'
  const form_label = {
    mt: '10px',
    fontSize: 22
  }

  const toast = useToast()

  return (
    <Box
      bg='isabelline'
      position='relative'
      color='ultra_violet'
      h='100%'
      p='0px 40px 0px'
      alignContent={'center'}
      alignItems='center'
      justifyContent={'center'}
      overflowY='scroll'
      overflowX='hidden'>

      <Text
        pt='10px'
        fontSize={36}
      >
        To send me an email through my website, please fill out the following form.
      </Text>

      <Text fontSize={18}>
        Otherwise, you can email me at <Link href='mailto:ari.wisenburn@gmail.com'>
          ari.wisenburn@gmail.com
        </Link> or you can check out my <Link
          href={linkedin} isExternal>
          LinkedIn here
        </Link> or in the footer.
      </Text>

      <form target="_blank" action="https://formsubmit.co/1e2dc5a3f60bcb5feff92fcb0b9c3888" method="POST">
        {/* Email */}
        <FormControl
          color='ultra_violet'
          isInvalid={isError && emailHasBeenClicked}>
          <FormLabel {...form_label} mt='20px'>
            Email address
          </FormLabel>

          <Box onClick={() => setEmailHasBeenClicked(true)}>
            <Input
              name='email'
              type='email'
              placeholder='Your email here'
              border='1px'
              borderColor='space_cadet'
              value={email}
              onChange={event => setEmail(event.currentTarget.value)}
              _hover={{ border: '2px', borderColor: 'space_cadet' }} />
          </Box>

          {isError && emailHasBeenClicked &&
            <FormErrorMessage >Your email is required - I want to email you back, of course!</FormErrorMessage>
          }

        </FormControl>

        {/* Subject */}
        <FormControl
        >
          <FormLabel {...form_label}>
            Subject
          </FormLabel>
          <Input
            name='subject'
            type='text'
            placeholder='Email subject here'
            border='1px'
            borderColor='space_cadet'
            value={subject}
            onChange={event => setSubject(event.currentTarget.value)}
            _hover={{ border: '2px', borderColor: 'space_cadet' }} />
        </FormControl>

        {/* Message */}
        <FormControl
        >
          <FormLabel {...form_label}>
            Message
          </FormLabel>
          <Textarea
            name='message'
            placeholder='Your message here'
            border='1px'
            borderColor='space_cadet'
            value={message}
            onChange={event => setMessage(event.currentTarget.value)}
            overflowWrap={'break-word'}
            _hover={{ border: '2px', borderColor: 'space_cadet' }} />
        </FormControl>

        {/* Submit button */}
        <Button
          type='submit'
          bg='ultra_violet'
          color='isabelline'
          mt='20px'
          w='100%'
          _hover={{
            bg: 'transparent',
            color: 'ultra_violet',
            border: '2px',
            border_color: 'ultra_violet'
          }}
        >
          Submit
        </Button>

      </form>
    </Box >
  )
}