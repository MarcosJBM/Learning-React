import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Game from "../src/Pages/Tutorial";
import Home from "../src/Pages/Home";
import MainConcepts from "../src/Pages/mainConcepts";
import AdvancedGuides from "../src/Pages/AdvancedGuides";

import IntroducingJSX from "../src/Pages/mainConcepts/IntroducingJSX";
import ComponentsAndProps from "../src/Pages/mainConcepts/ComponentsAndProps";
import StateAndLifeCycle from "../src/Pages/mainConcepts/StateAndLifeCycle";
import HandlingEvents from "../src/Pages/mainConcepts/HandlingEvents";
import ConditionalRendering from "../src/Pages/mainConcepts/ConditionalRendering";
import ListsAndKeys from "../src/Pages/mainConcepts/ListsAnsKeys";
import Forms from "../src/Pages/mainConcepts/Forms";
import RaisingTheState from "../src/Pages/mainConcepts/RaisingTheState";
import CompositionVsInheritance from "../src/Pages/mainConcepts/CompositionVsInheritance";

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
      <Route
        path="/CompositionVsInheritance"
        component={CompositionVsInheritance}
      />
      <Route path="/AdvancedGuides" component={AdvancedGuides} />
    </BrowserRouter>
  );
}
