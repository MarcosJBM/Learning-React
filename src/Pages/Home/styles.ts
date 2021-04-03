import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin: 80px auto;
  max-width: 300px;

  > a {
    text-align: center;
    font-size: 16px;
    font-weight: 600;

    margin-top: 8px;
    padding: 10px 12px;
    border: 2px solid var(--black);
    border-radius: 6px;

    background-color: var(--black);
    color: var(--blue);

    &:hover {
      border: 2px solid var(--blue);
    }
  }
`;

export const ReactLogo = styled.img`
  width: 280px;
  margin: 0 auto;
`;
