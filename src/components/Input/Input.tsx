import React from 'react';
import { Field, FieldProps } from 'react-final-form';

export interface Props extends FieldProps<any, any> { }

const Input: React.FC<Props> = ({ name, value, type, placeholder }) => {
  return (
    <Field name={name} value={value}>
      {({ input, meta }) => (
        <>
          <input {...input} type={type} placeholder={placeholder} className="border-2 border-solid border-gray-lighter rounded h-[50px] px-4" />
          {meta.error && meta.touched && <span>{meta.error}</span>}
        </>
      )}
    </Field>
  )
}

export default Input;
