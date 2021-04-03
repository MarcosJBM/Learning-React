import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 900px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const RightSide = styled.div`
  > div {
    display: grid;
    grid-gap: 14px;
  }
`;
