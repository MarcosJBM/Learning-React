import { Link } from 'react-router-dom';

import { Container } from './styles';

export const AdvancedGuides = () => {
  return (
    <Container>
      <Link to={'/jsx-in-depth'}>JSX In Depth</Link>
      <Link to={'/portals'}>Portals</Link>
    </Container>
  );
};
