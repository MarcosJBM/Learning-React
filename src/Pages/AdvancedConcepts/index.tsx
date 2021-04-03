import { Link } from 'react-router-dom';

import { Container } from './styles';

const AdvancedGuides = () => {
  return (
    <Container>
      <Link to={'/jsx-in-depth'}>JSX In Depth</Link>
      <Link to={'/portals'}>Portals</Link>
      <Link to={'/render-props'}>Render Props</Link>
    </Container>
  );
};

export default AdvancedGuides;
