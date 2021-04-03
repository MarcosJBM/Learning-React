import { useState } from 'react';

import { ModalProps } from './types';

import { Container, Section } from './styles';

export const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalHandler = () => {
    setIsModalOpen(isModalOpen => !isModalOpen);
  };

  return (
    <div>
      <Modal showModal={isModalOpen} modalHandler={modalHandler}>
        <h3>Modal funcionando, tente fecha-lo agora.</h3>
      </Modal>
      <button type='button' onClick={modalHandler}>
        Abrir modal
      </button>
    </div>
  );
};

const Modal: React.FC<ModalProps> = ({ showModal, children, modalHandler }) => {
  const displayClass = showModal ? 'open-modal' : 'closed-modal';

  return (
    <Container className={displayClass}>
      <Section>
        {children}
        <button type='button' onClick={modalHandler}>
          Fechar
        </button>
      </Section>
    </Container>
  );
};
