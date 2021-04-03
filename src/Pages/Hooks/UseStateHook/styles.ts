import styled from 'styled-components';

export const Container = styled.div`
  max-width: 400px;
  margin: 100px auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  > label {
    font-size: 18px;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  > input {
    border-radius: 8px;
    border: 0;
    padding: 16px 24px;
    font-size: 16px;
    color: #6c6c80;

    &::placeholder {
      color: #a0a0b2;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 56px;

  margin-top: 20px;

  font-size: 16px;
  font-weight: bold;
  color: #fff;

  background: #37c97b;
  border-radius: 8px;

  border: 0;

  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background: #2fb86e;
  }
`;
