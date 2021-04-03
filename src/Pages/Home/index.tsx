import { Link } from 'react-router-dom';

import { Container, ReactLogo } from './styles';

import logo from '../../assets/react-logo.png';

export const Home = () => {
  return (
    <Container>
      <ReactLogo src={logo} alt={'React Logo'} />
      <Link to={'/game'}>Jogo da Velha</Link>
      <Link to={'/main-concepts'}>Principais Conceitos</Link>
      <Link to={'/advanced-concepts'}>Conceitos Avançados</Link>
      <Link to={'/hooks'}>Hooks</Link>
    </Container>
  );
};
