import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";

const Game = lazy(() => import("./Pages/Tutorial"));
const Home = lazy(() => import("./Pages/Home"));
const MainConcepts = lazy(() => import("./Pages/MainConcepts"));
const AdvancedConcepts = lazy(() => import("./Pages/AdvancedConcepts"));
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

const ErrorBoundaries = lazy(
  () => import("./Pages/AdvancedConcepts/ErrorBoundaries")
);
const JSXInDepth = lazy(() => import("./Pages/AdvancedConcepts/JSXinDepth"));
const Portals = lazy(() => import("./Pages/AdvancedConcepts/Portals"));
const RenderProps = lazy(() => import("./Pages/AdvancedConcepts/RenderProps"));

const UseStateHook = lazy(() => import("./Pages/Hooks/UseStateHook"));
const UseEffectHook = lazy(() => import("./Pages/Hooks/UseEffectHook"));

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

        <Route path='/AdvancedConcepts' component={AdvancedConcepts} />
        <Route path='/ErrorBoundaries' component={ErrorBoundaries} />
        <Route path='/JSXInDepth' component={JSXInDepth} />
        <Route path='/Portals' component={Portals} />
        <Route path='/RenderProps' component={RenderProps} />

        <Route path='/Hooks' component={Hooks} />
        <Route path='/UseStateHook' component={UseStateHook} />
        <Route path='/UseEffectHook' component={UseEffectHook} />
      </Suspense>
    </BrowserRouter>
  );
}
