import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 300px;
  margin: 100px auto;
`;

export const Avatar = styled.img`
  margin: 0 auto;

  width: 280px;
  height: 280px;

  border-radius: 50%;
`;

export const Informations = styled.div`
  margin-top: 16px;
  text-align: center;

  > h1 {
    font-size: 26px;
    font-weight: 600;
    line-height: 1.25;

    color: #24292e;
  }

  > h2 {
    font-size: 20px;
    font-weight: 300;

    color: #585669;
  }

  > p {
    padding-top: 16px;
    font-size: 16px;
  }
`;
