import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Game from "./Pages/Tutorial";
import Home from "./Pages/Home";
import MainConcepts from "./Pages/mainConcepts";
import AdvancedGuides from "./Pages/AdvancedGuides";
import Hooks from "./Pages/Hooks";

import IntroducingJSX from "./Pages/mainConcepts/IntroducingJSX";
import ComponentsAndProps from "./Pages/mainConcepts/ComponentsAndProps";
import StateAndLifeCycle from "./Pages/mainConcepts/StateAndLifeCycle";
import HandlingEvents from "./Pages/mainConcepts/HandlingEvents";
import ConditionalRendering from "./Pages/mainConcepts/ConditionalRendering";
import ListsAndKeys from "./Pages/mainConcepts/ListsAnsKeys";
import Forms from "./Pages/mainConcepts/Forms";
import RaisingTheState from "./Pages/mainConcepts/RaisingTheState";
import CompositionVsInheritance from "./Pages/mainConcepts/CompositionVsInheritance";

import CodeSplitting from "./Pages/AdvancedGuides/CodeSplitting";
import Context from "./Pages/AdvancedGuides/Context";
import ErrorBoundaries from "./Pages/AdvancedGuides/ErrorBoundaries";
import Fragments from "./Pages/AdvancedGuides/Fragments";
import JSXInDepth from "./Pages/AdvancedGuides/JSXinDepth";
import OptimizingPerformance from "./Pages/AdvancedGuides/OptimizingPerformance";
import Portals from "./Pages/AdvancedGuides/Portals";
import RenderProps from "./Pages/AdvancedGuides/RenderProps";
import RefsAndDom from "./Pages/AdvancedGuides/RefsAndDom";

import HooksSummary from "./Pages/Hooks/HooksSummary";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Home} />
      <Route path='/Game' component={Game} />

      <Route path='/MainConcepts' component={MainConcepts} />
      <Route path='/IntroducingJSX' component={IntroducingJSX} />
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
      <Route path='/HooksSummary' component={HooksSummary} />
    </BrowserRouter>
  );
}
