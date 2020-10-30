import React, { lazy } from "react";
import { BrowserRouter, Route } from "react-router-dom";

const Game = lazy(() => import("../src/Pages/Tutorial"));
const Home = lazy(() => import("../src/Pages/Home"));
const MainConcepts = lazy(() => import("../src/Pages/mainConcepts"));
const AdvancedGuides = lazy(() => import("../src/Pages/AdvancedGuides"));

const IntroducingJSX = lazy(() => import("../src/Pages/mainConcepts/IntroducingJSX"));
const ComponentsAndProps = lazy(() => import("../src/Pages/mainConcepts/ComponentsAndProps"));
const StateAndLifeCycle = lazy(() => import("../src/Pages/mainConcepts/StateAndLifeCycle"));
const HandlingEvents = lazy(() => import("../src/Pages/mainConcepts/HandlingEvents"));
const ConditionalRendering = lazy(() => import("../src/Pages/mainConcepts/ConditionalRendering"));
const ListsAndKeys = lazy(() => import("../src/Pages/mainConcepts/ListsAnsKeys"));
const Forms = lazy(() => import("../src/Pages/mainConcepts/Forms"));
const RaisingTheState = lazy(() => import("../src/Pages/mainConcepts/RaisingTheState"));
const CompositionVsInheritance = lazy(() => import("../src/Pages/mainConcepts/CompositionVsInheritance"));

const CodeSplitting = lazy(() => import("../src/Pages/AdvancedGuides/CodeSplitting"));

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
      <Route path="/CompositionVsInheritance" component={CompositionVsInheritance} />
      <Route path="/AdvancedGuides" component={AdvancedGuides} />
      <Route path="/CodeSplitting" component={CodeSplitting} />
    </BrowserRouter>
  );
}
