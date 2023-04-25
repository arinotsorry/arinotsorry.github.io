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
// this has my unencrypted password to my "burner" website account, so it's not on the git
import transporter from './Transporter'


export default function Contact(props: any) {
  const [emailHasBeenClicked, setEmailHasBeenClicked] = useState(false)
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const isError = email === ''

  const linkedin = 'https://www.linkedin.com/in/ari-wisenburn-3934171b3/'
  const form_label = {
    mt: '20px',
    fontSize: 24
  }

  const toast = useToast()

  // const transport = transporter(nodemailer)
  const mailOptions = {
    from: 'ari.wisenburn.website@gmail.com',
    to: 'ari.wisenburn@gmail.com',
  }

  return (
    <Box
      bg='isabelline'
      position='relative'
      color='ultra_violet'
      h='100%'
      p='40px'
      alignContent={'center'}
      alignItems='center'
      justifyContent={'center'}
      overflowY='scroll'
      overflowX='hidden'>

      <Text

        fontSize={36}>
        To send me an email through the website, please fill out the following form.
      </Text>

      <Text

        fontSize={18}
      >
        Otherwise, you can email me at <Link href='mailto:ari.wisenburn@gmail.com'>
          ari.wisenburn@gmail.com
        </Link> or you can check out my <Link
          href={linkedin} isExternal>
          LinkedIn here
        </Link> or in the footer.
      </Text>

      {/* Email */}
      <FormControl
        color='ultra_violet'
        isInvalid={isError && emailHasBeenClicked}>
        <FormLabel {...form_label} mt='40px'>
          Email address
        </FormLabel>
        <Box onClick={() => setEmailHasBeenClicked(true)}>
          <Input
            name='email'
            type='email'
            border='1px'
            borderColor='space_cadet'
            value={email}
            onChange={event => setEmail(event.currentTarget.value)}
            _hover={{ border: '2px', borderColor: 'space_cadet' }} />
        </Box>
        {isError && emailHasBeenClicked &&
          <FormErrorMessage >Email is required.</FormErrorMessage>
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
          border='1px'
          borderColor='space_cadet'
          value={message}
          onChange={event => setMessage(event.currentTarget.value)}
          overflowWrap={'break-word'}
          _hover={{ border: '2px', borderColor: 'space_cadet' }} />
      </FormControl>

      {/* Submit button */}
      {/* <Button
        type='submit'
        onClick={() => {
          transport.sendMail({
            from: 'ari.wisenburn.website@gmail.com',
            to: ['ari.wisenburn@gmail.com'],
            cc: email,
            subject: subject,
            text: message
          }, function (error: boolean) {
            if (error) {
              toast({
                title: "Couldn't send email :(",
                description: "Please try again",
                status: "error",
                duration: 5000,
                isClosable: true
              })
            }
            else {
              toast({
                title: 'Congratulations!',
                description: 'Email successfully sent.',
                status: 'success',
                duration: 5000,
                isClosable: true
              })
            }
          })
        }}
      >Submit</Button> */}
    </Box >
  )
}