import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  top: 0;
  left: 0;

  position: fixed;

  background: rgba(0, 0, 0, 0.6);

  &.open-modal {
    display: block;
  }

  &.closed-modal {
    display: none;
  }
`;

export const Section = styled.section`
  width: auto;
  height: auto;

  top: 50%;
  left: 50%;
  padding: 20px;

  position: fixed;

  background: white;

  border-radius: 8px;

  transform: translate(-50%, -50%);
`;
