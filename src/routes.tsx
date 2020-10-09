import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Game from './Pages/Tutorial';
import Home from './Pages/Home';
import MainConcepts from './Pages/MainConcepts';

import IntroducingJSX from './Pages/MainConcepts/IntroducingJSX';
import ComponentsAndProps from './Pages/MainConcepts/ComponentsAndProps';
import StateAndLifeCycle from './Pages/MainConcepts/StateAndLifeCycle';
import HandlingEvents from './Pages/MainConcepts/HandlingEvents';
import ConditionalRendering from './Pages/MainConcepts/ConditionalRendering';
import ListsAndKeys from './Pages/MainConcepts/ListsAnsKeys';
import Forms from './Pages/MainConcepts/Forms';
import RaisingTheState from './Pages/MainConcepts/RaisingTheState';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/Game" component={Game} />
      <Route path="/MainConcepts" component={MainConcepts} />
      <Route path="/IntroducingJSX" component={IntroducingJSX} />
      <Route path="/ComponentsAndProps" component={ComponentsAndProps} />
      <Route path="/StateAndLifeCycle" component={StateAndLifeCycle} />
      <Route path="/HandlingEvents" component={HandlingEvents} />
      <Route path="/ConditionalRendering" component={ConditionalRendering} />
      <Route path="/ListsAndKeys" component={ListsAndKeys} />
      <Route path="/Forms" component={Forms} />
      <Route path="/RaisingTheState" component={RaisingTheState} />
    </BrowserRouter>
  );
}
