import React from 'react';

export interface Props { }

const Button: React.FC<Props> = ({ children, ...props }) => {
  return (
    <button className="bg-blue text-white p-4 rounded-sm hover:bg-blue-darker" {...props}>{children}</button>
  )
}

export default Button;
