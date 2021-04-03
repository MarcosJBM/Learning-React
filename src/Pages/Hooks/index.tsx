import { Link } from 'react-router-dom';

import { Container } from './styles';

export const Hooks = () => {
  return (
    <Container>
      <Link to={'/use-state-hook'}>Use State Hook</Link>
      <Link to={'/use-effect-hook'}>Use Effect Hook</Link>
      <Link to={'/use-memo-hook'}>Use Memo Hook</Link>
      <Link to={'/use-context-hook'}>Use Context Hook</Link>
    </Container>
  );
};
