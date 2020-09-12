import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Link to="/game">Jogo da Velha</Link>
      <br />
      <Link to="/mainConcepts">Principais Conceitos</Link>
    </div>
  );
}

export default Home;
