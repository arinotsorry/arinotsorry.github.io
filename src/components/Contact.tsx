import React from 'react'

import { Input, Textarea } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import { Box, Button, ButtonGroup } from '@chakra-ui/react'

function Contact() {
  return (
    <Box w='90vw'>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input type='text' />
      </FormControl>
      <Button size='lg' variant='outline'>Submit</Button>
    </Box>
  )
}

export default Contact