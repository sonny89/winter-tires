import React from 'react';
import * as yup from 'yup';
import { Form } from 'react-final-form';

import Input from 'components/Input';
import Button from 'components/Button';

const schema = yup.object({
  email: yup
    .string()
    .email()
    .label('Email address')
    .required()
});

const WelcomeView: React.FC<{}> = () => {
  return (
    <>
      <div className="text-gray text-3xl mb-8">Welcome!</div>
      <div className="mb-4">Please fill in your email address</div>
      <Form
        onSubmit={() => new Promise((resolve) => resolve(undefined))}
        validate={(values) => {
          return schema
            .validate(values, { abortEarly: false })
            .then(() => null)
            .catch((error) => {
              const errorFields: { [x: string]: string } = {};
              error.inner.forEach((validationError: yup.ValidationError) => {
                if (validationError.path) {
                  errorFields[validationError.path] = validationError.message
                }
              })
              return errorFields;
            })

        }}
        render={({ handleSubmit, form, submitting, pristine, values, valid }) => (
          <form onSubmit={handleSubmit} className="w-full flex flex-col">
            <Input name="email" type="text" className="mb-4" />
            <Button className="mb-4" disabled={!valid || submitting}>Continue</Button>
          </form>
        )}
      />
      <div>Don't have an account yet?</div>
      <div>You can create one in the next step</div>
    </>
  );
}

export default WelcomeView;
