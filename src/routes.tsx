import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Game from "./Pages/Tutorial";
import Home from "./Pages/Home";
import MainConcepts from "./Pages/MainConcepts";
import AdvancedGuides from "./Pages/AdvancedGuides";
import Hooks from "./Pages/Hooks";

import ComponentsAndProps from "./Pages/MainConcepts/ComponentsAndProps";
import StateAndLifeCycle from "./Pages/MainConcepts/StateAndLifeCycle";
import HandlingEvents from "./Pages/MainConcepts/HandlingEvents";
import ConditionalRendering from "./Pages/MainConcepts/ConditionalRendering";
import ListsAndKeys from "./Pages/MainConcepts/ListsAndKeys";
import Forms from "./Pages/MainConcepts/Forms";
import RaisingTheState from "./Pages/MainConcepts/RaisingTheState";
import CompositionVsInheritance from "./Pages/MainConcepts/CompositionVsInheritance";

import CodeSplitting from "./Pages/AdvancedGuides/CodeSplitting";
import Context from "./Pages/AdvancedGuides/Context";
import ErrorBoundaries from "./Pages/AdvancedGuides/ErrorBoundaries";
import Fragments from "./Pages/AdvancedGuides/Fragments";
import JSXInDepth from "./Pages/AdvancedGuides/JSXinDepth";
import OptimizingPerformance from "./Pages/AdvancedGuides/OptimizingPerformance";
import Portals from "./Pages/AdvancedGuides/Portals";
import RenderProps from "./Pages/AdvancedGuides/RenderProps";
import RefsAndDom from "./Pages/AdvancedGuides/RefsAndDom";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route path='/Game' component={Game} />

      <Route path='/MainConcepts' component={MainConcepts} />
      <Route path='/ComponentsAndProps' component={ComponentsAndProps} />
      <Route path='/StateAndLifeCycle' component={StateAndLifeCycle} />
      <Route path='/HandlingEvents' component={HandlingEvents} />
      <Route path='/ConditionalRendering' component={ConditionalRendering} />
      <Route path='/ListsAndKeys' component={ListsAndKeys} />
      <Route path='/Forms' component={Forms} />
      <Route path='/RaisingTheState' component={RaisingTheState} />
      <Route
        path='/CompositionVsInheritance'
        component={CompositionVsInheritance}
      />

      <Route path='/AdvancedGuides' component={AdvancedGuides} />
      <Route path='/CodeSplitting' component={CodeSplitting} />
      <Route path='/Context' component={Context} />
      <Route path='/ErrorBoundaries' component={ErrorBoundaries} />
      <Route path='/Fragments' component={Fragments} />
      <Route path='/JSXInDepth' component={JSXInDepth} />
      <Route path='/OptimizingPerformance' component={OptimizingPerformance} />
      <Route path='/Portals' component={Portals} />
      <Route path='/RenderProps' component={RenderProps} />
      <Route path='/RefsAndDom' component={RefsAndDom} />

      <Route path='/Hooks' component={Hooks} />
    </BrowserRouter>
  );
}
