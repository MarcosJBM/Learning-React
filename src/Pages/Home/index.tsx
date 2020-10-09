import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Link to="/Game">Jogo da Velha</Link>
      <br />
      <Link to="/MainConcepts">Principais Conceitos</Link>
    </div>
  );
}

export default Home;
