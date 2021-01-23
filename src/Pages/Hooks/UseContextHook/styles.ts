import styled from "styled-components";

export const Main = styled.main`
  max-width: 640px;
  margin: 60px auto;

  > h1 {
    text-align: center;
    margin: 20px 0;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 8px 12px;

  background: white;

  &:not(:last-child) {
    border-bottom: 1px solid #333333;
  }
`;

export const CardText = styled.div`
  color: var(--black);

  .line-through {
    text-decoration: line-through;
    color: #777 !important;
  }
`;

export const CardButton = styled.button`
  font-weight: 600;

  padding: 8px 12px;

  border-radius: 6px;
  border: 0;

  background: var(--black);
  color: var(--blue);

  cursor: pointer;

  .hide-button {
    display: none;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;
  padding: 12px;

  background: white;
`;

export const TodoInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > label {
    font-size: 16px;
  }

  > input {
    font-size: 16px;

    padding: 8px 12px;
    margin: 0 6px 0 6px;

    border: none;
    border-radius: 6px;

    outline: none;
    background: #f0f0f5;
  }
`;

export const ButtonForm = styled.button`
  font-weight: 600;

  padding: 8px 12px;

  border: none;
  border-radius: 6px;

  background: var(--black);
  color: var(--blue);

  cursor: pointer;
`;
