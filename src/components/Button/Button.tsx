import React from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button', disabled = false }) => {
  return (
    <button onClick={onClick} type={type} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
