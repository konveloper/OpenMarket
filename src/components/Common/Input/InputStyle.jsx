import styled from 'styled-components';

const ContDiv = styled.div`
  display: flex;
  flex-direction: column;
  & label {
    font-size: 1.2rem;
  }
`;

const InputStyle = styled.input`
  width: 480px;
  height: 60px;
  border: transparent;
  outline: none;
  border-bottom: 1px solid var(--sub-grey);
  margin-bottom: 6px;
  font-size: 1.4rem;
  &:focus {
    border-bottom: 2px solid var(--point);
  }
  &::placeholder {
    color: var(--sub-grey);
  }
`;

const MessageSpan = styled.span`
  color: var(--point);
  font-style: normal;
  font-size: 1.2rem;
  line-height: 14px;
  margin-bottom: 16px;
`;

export { ContDiv, InputStyle, MessageSpan };
