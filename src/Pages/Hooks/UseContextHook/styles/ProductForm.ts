import styled from 'styled-components';

export const Form = styled.form`
  margin: 130px auto;
  width: 300px;

  display: flex;
  flex-direction: column;

  > input {
    border-radius: 8px;
    border: 0;
    padding: 8px 18px;
    font-size: 16px;
    color: #6c6c80;
    margin-bottom: 10px;
  }

  > textarea {
    border-radius: 8px;
    border: 0;
    padding: 8px 18px;
    font-size: 16px;
    color: #6c6c80;
    margin-bottom: 10px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 38px;

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
