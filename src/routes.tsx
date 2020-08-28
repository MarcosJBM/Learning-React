import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Tutorial from './Pages/Tutorial/main';
import Home from './Pages/Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/tutorial" component={Tutorial} />
    </BrowserRouter>
  );
}
