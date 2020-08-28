import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Link to="/tutorial">Jogo da Velha</Link>
    </div>
  );
}

export default Home;
