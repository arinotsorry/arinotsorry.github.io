import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Formik, Field, Form as FormikForm, FormikHelpers } from 'formik';
import { Text, Button } from '@chakra-ui/react'

interface Values {
  email: string,
  subject: string,
  message: string
}

export default function Form() {
  return (
    <>
      {/* <Text
        mt='40px'
        '
        fontSize={24}>
        Email
      </Text> */}
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
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 500)
        }}
      >
        <FormikForm>
          <label font-size={36}>Email</label>
          <br />
          <Field
            color='green'
            id='email' name='email' placeholder='jane.doe@gmail.com' />

          <label>Subject</label>
          <Field id='subject' name='subject' placeholder='email subject' />

          <label>Message</label>
          <Field id='message' name='message' placeholder='Your message to me goes here' />

          <Button type='submit'>Submit</Button>
        </FormikForm>
      </Formik>
    </>
  )
}