import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";

const Game = lazy(() => import("./Pages/Tutorial"));
const Home = lazy(() => import("./Pages/Home"));
const MainConcepts = lazy(() => import("./Pages/MainConcepts"));
const AdvancedGuides = lazy(() => import("./Pages/AdvancedGuides"));
const Hooks = lazy(() => import("./Pages/Hooks"));

const ComponentsAndProps = lazy(
  () => import("./Pages/MainConcepts/ComponentsAndProps")
);
const StateAndLifeCycle = lazy(
  () => import("./Pages/MainConcepts/StateAndLifeCycle")
);
const HandlingEvents = lazy(
  () => import("./Pages/MainConcepts/HandlingEvents")
);
const ConditionalRendering = lazy(
  () => import("./Pages/MainConcepts/ConditionalRendering")
);
const ListsAndKeys = lazy(() => import("./Pages/MainConcepts/ListsAndKeys"));
const Forms = lazy(() => import("./Pages/MainConcepts/Forms"));
const RaisingTheState = lazy(
  () => import("./Pages/MainConcepts/RaisingTheState")
);
const CompositionVsInheritance = lazy(
  () => import("./Pages/MainConcepts/CompositionVsInheritance")
);

const CodeSplitting = lazy(
  () => import("./Pages/AdvancedGuides/CodeSplitting")
);
const Context = lazy(() => import("./Pages/AdvancedGuides/Context"));
const ErrorBoundaries = lazy(
  () => import("./Pages/AdvancedGuides/ErrorBoundaries")
);
const Fragments = lazy(() => import("./Pages/AdvancedGuides/Fragments"));
const JSXInDepth = lazy(() => import("./Pages/AdvancedGuides/JSXinDepth"));
const OptimizingPerformance = lazy(
  () => import("./Pages/AdvancedGuides/OptimizingPerformance")
);
const Portals = lazy(() => import("./Pages/AdvancedGuides/Portals"));
const RenderProps = lazy(() => import("./Pages/AdvancedGuides/RenderProps"));
const RefsAndDom = lazy(() => import("./Pages/AdvancedGuides/RefsAndDom"));

export default function Routes() {
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

        <Route path='/AdvancedGuides' component={AdvancedGuides} />
        <Route path='/CodeSplitting' component={CodeSplitting} />
        <Route path='/Context' component={Context} />
        <Route path='/ErrorBoundaries' component={ErrorBoundaries} />
        <Route path='/Fragments' component={Fragments} />
        <Route path='/JSXInDepth' component={JSXInDepth} />
        <Route
          path='/OptimizingPerformance'
          component={OptimizingPerformance}
        />
        <Route path='/Portals' component={Portals} />
        <Route path='/RenderProps' component={RenderProps} />
        <Route path='/RefsAndDom' component={RefsAndDom} />

        <Route path='/Hooks' component={Hooks} />
      </Suspense>
    </BrowserRouter>
  );
}
