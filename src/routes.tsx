import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Game from './Pages/Tutorial';
import Home from './Pages/Home';
import mainConcepts from './Pages/mainConcepts';

//OBS: Home e Game possuem cores diferentes, pois uma é uma Função e a outra é uma Classe.

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/game" component={Game} />
      <Route path="/mainConcepts" component={mainConcepts} />
    </BrowserRouter>
  );
}
