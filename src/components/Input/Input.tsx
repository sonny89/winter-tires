import React from 'react';
import { Field, FieldProps } from 'react-final-form';

export interface Props extends FieldProps<any, any> { }

const Input: React.FC<Props> = ({ className, name, value, type, placeholder }) => {
  return (
    <Field name={name} value={value}>
      {({ input, meta }) => (
        <div className={className}>
          <input {...input} type={type} placeholder={placeholder} className="border-2 border-solid border-gray-lighter rounded h-[50px] px-4 w-full" />
          {meta.error && meta.touched && <div className="text-red-700 px-4 pt-1">{meta.error}</div>}
        </div>
      )}
    </Field>
  )
}

export default Input;
