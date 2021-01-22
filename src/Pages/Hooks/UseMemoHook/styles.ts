import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 150px;
  margin: 100px auto;

  text-align: center;
`;

export const List = styled.li`
  font-size: 16px;
  font-weight: 600;

  margin-top: 6px;
  padding: 8px 12px;

  border-radius: 6px;

  list-style-type: none;

  background-color: crimson;
  color: white;
`;
