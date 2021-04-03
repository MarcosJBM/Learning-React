import { Link } from 'react-router-dom';

import { Container } from './styles';

export const MainConcepts = () => {
  return (
    <Container>
      <Link to={'/components-and-props'}>Componentes e Props</Link>
      <Link to={'/forms'}>Formulários</Link>
      <Link to={'/raising-the-state'}>Elevando o State</Link>
    </Container>
  );
};
