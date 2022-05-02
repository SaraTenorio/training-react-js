import React from 'react';
import { Formik, Field, Form } from 'formik';

export default function BasicFormik() {
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="First Name" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Last Name" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="example@domain.com"
            type="email"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}