import React from 'react';
import { ContDiv, InputStyle, MessageSpan } from './InputStyle';

function Input({ label, type, name, value, placeholder, message }) {
  return (
    <ContDiv>
      <label htmlFor={type}>{label}</label>
      <InputStyle
        name={name}
        type={type || 'text'}
        id={type}
        value={value}
        placeholder={placeholder}
      />
      <MessageSpan>{message}</MessageSpan>
    </ContDiv>
  );
}

export default Input;
