import React from 'react';
import classnames from 'classnames';

export interface Props {
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ className, children, ...props }) => {
  return (
    <button className={classnames(className, "bg-blue text-white p-4 rounded-sm hover:bg-blue-darker disabled:bg-gray-400 disabled:cursor-default")} {...props}>{children}</button>
  )
}

export default Button;
