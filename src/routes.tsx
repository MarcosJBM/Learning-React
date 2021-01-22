import React, { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./pages/Home";
import Game from "./pages/Tutorial";
import MainConcepts from "./pages/MainConcepts";
import AdvancedConcepts from "./pages/AdvancedConcepts";
import Hooks from "./pages/Hooks";

import ComponentsAndProps from "./pages/MainConcepts/ComponentsAndProps";
import StateAndLifeCycle from "./pages/MainConcepts/StateAndLifeCycle";
import HandlingEvents from "./pages/MainConcepts/HandlingEvents";
import ConditionalRendering from "./pages/MainConcepts/ConditionalRendering";
import ListsAndKeys from "./pages/MainConcepts/ListsAndKeys";
import Forms from "./pages/MainConcepts/Forms";
import RaisingTheState from "./pages/MainConcepts/RaisingTheState";
import CompositionVsInheritance from "./pages/MainConcepts/CompositionVsInheritance";

import JSXInDepth from "./pages/AdvancedConcepts/JSXinDepth";
import Portals from "./pages/AdvancedConcepts/Portals";
import RenderProps from "./pages/AdvancedConcepts/RenderProps";

import UseStateHook from "./pages/Hooks/UseStateHook";
import UseEffectHook from "./pages/Hooks/UseEffectHook";
import UseMemoHook from "./pages/Hooks/UseMemoHook";
import UseContextHook from "./pages/Hooks/UseContextHook";

import GlobalStyles from "./styles/GlobalStyles";

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
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

        <Route path='/AdvancedConcepts' component={AdvancedConcepts} />
        <Route path='/JSXInDepth' component={JSXInDepth} />
        <Route path='/Portals' component={Portals} />
        <Route path='/RenderProps' component={RenderProps} />

        <Route path='/Hooks' component={Hooks} />
        <Route path='/UseStateHook' component={UseStateHook} />
        <Route path='/UseEffectHook' component={UseEffectHook} />
        <Route path='/UseMemoHook' component={UseMemoHook} />
        <Route path='/UseContextHook' component={UseContextHook} />
      </Suspense>
      <GlobalStyles />
    </BrowserRouter>
  );
};

export default Routes;
