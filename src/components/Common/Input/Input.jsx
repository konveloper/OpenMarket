import React from 'react';
import { ContDiv, InputStyle, MessageSpan } from './InputStyle';

function Input({
  label,
  type,
  placeholder,
  onChange,
  message,
  min,
  max,
  onBlur,
  name,
  getValue,
  onKeyUp,
}) {
  const ChangeHandler = (e) => {
    onChange(e);
  };
  return (
    <ContDiv>
      <label htmlFor={type}>{label}</label>
      <InputStyle
        name={name}
        type={type || 'text'}
        id={type}
        placeholder={placeholder}
        onBlur={onBlur}
        onChange={ChangeHandler}
        onKeyUp={onKeyUp}
        minLength={min}
        maxLength={max}
        value={getValue}
      />
      <MessageSpan>{message}</MessageSpan>
    </ContDiv>
  );
}

export default Input;
