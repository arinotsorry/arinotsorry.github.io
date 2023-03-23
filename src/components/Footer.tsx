import React from 'react'

import { Box, Switch } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'


function Footer() {
  return (
    <FormControl display='flex' alignItems='right'>
      <FormLabel htmlFor='dark-mode' mb='0'>
        Dark Mode
      </FormLabel>
      <Switch id='dark-mode' />
      <Box width='60%'></Box>
      <FormLabel htmlFor='bionic' mb='0'>
        Bionic Reading
      </FormLabel>
      <Switch id='bionic' />
    </FormControl>
  )
}

export default Footer