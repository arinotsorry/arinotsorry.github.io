import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import {
  Text,
  Button,
  //Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText
} from '@chakra-ui/react'
import { useState } from 'react'

interface Values {
  email: string,
  subject: string,
  message: string
}

function validateEmail(value: string) { //, setEmailIsValid: (val: boolean) => {}) {
  let error
  if (!value) {
    // setEmailIsValid(false)
    error = 'oh no! I need an email so I can respond to you'
  }
  // setEmailIsValid(true)
  return error
}

function handleSubmitEmail(values: Values) {
  // TODO: send email
}

export default function FormContainer() {

  return (
    <Formik
      initialValues={{
        email: '',
        subject: 'email subject',
        message: 'your message here'
      }}
      onSubmit={(
        values: Values,
        { setSubmitting }: FormikHelpers<Values>
      ) => {
        setTimeout(() => {
          // change later
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 500)
      }}
    >
      <Form>
        {/* Email Field */}
        <Field>
          <FormControl>
            <FormLabel>Email</FormLabel>
            {/*<Input />*/}
          </FormControl>
        </Field>

        {/* Subject Field */}
        <Field>
          <FormControl>
            <FormLabel>Subject</FormLabel>
            {/* <Input /> */}
          </FormControl>
        </Field>

        {/* Message Field */}
        <Field>
          <FormControl>
            <FormLabel>Message</FormLabel>
            {/* <Input /> */}
          </FormControl>
        </Field>

        <Button
          mt={4}
          colorScheme='ultra_violet'
          type='submit'>
          Submit
        </Button>
      </Form>
    </Formik>
  )
}