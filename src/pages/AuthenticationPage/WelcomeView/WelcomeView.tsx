import React from 'react';
import { Form } from 'react-final-form';

import Input from 'components/Input';
import Button from 'components/Button';

const WelcomeView: React.FC<{}> = () => {
  return (
    <>
      <div className="text-gray text-3xl mb-8">Welcome!</div>
      <div className="mb-4">Please fill in your email address</div>
      <Form
        onSubmit={() => new Promise((resolve) => resolve(undefined))}
        initialValues={{ stooge: 'larry', employed: false }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} className="w-full flex flex-col">
            <Input name="email" type="text" className="mb-4" />
            <Button className="mb-4">Continue</Button>
          </form>
        )}
      />
      <div>Don't have an account yet?</div>
      <div>You can create one in the next step</div>
    </>
  );
}

export default WelcomeView;
