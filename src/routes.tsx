import { Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import Game from './pages/Tutorial';
import MainConcepts from './pages/MainConcepts';
import AdvancedConcepts from './pages/AdvancedConcepts';
import Hooks from './pages/Hooks';

import ComponentsAndProps from './pages/MainConcepts/ComponentsAndProps';
import StateAndLifeCycle from './pages/MainConcepts/StateAndLifeCycle';
import Forms from './pages/MainConcepts/Forms';
import RaisingTheState from './pages/MainConcepts/RaisingTheState';

import { JSXInDepth } from './pages/AdvancedConcepts/JSXinDepth';
import Portals from './pages/AdvancedConcepts/Portals';
import RenderProps from './pages/AdvancedConcepts/RenderProps';

import UseStateHook from './pages/Hooks/UseStateHook';
import UseEffectHook from './pages/Hooks/UseEffectHook';
import UseMemoHook from './pages/Hooks/UseMemoHook';
import UseContextHook from './pages/Hooks/UseContextHook';

import GlobalStyles from './styles/GlobalStyles';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path='/' component={Home} />
        <Route path='/game' component={Game} />

        <Route path='/main-concepts' component={MainConcepts} />
        <Route path='/components-and-props' component={ComponentsAndProps} />
        <Route path='/state-and-life-cycle' component={StateAndLifeCycle} />
        <Route path='/forms' component={Forms} />
        <Route path='/raising-the-state' component={RaisingTheState} />

        <Route path='/advanced-concepts' component={AdvancedConcepts} />
        <Route path='/jsx-in-depth' component={JSXInDepth} />
        <Route path='/portals' component={Portals} />
        <Route path='/render-props' component={RenderProps} />

        <Route path='/hooks' component={Hooks} />
        <Route path='/use-state-hook' component={UseStateHook} />
        <Route path='/use-effect-hook' component={UseEffectHook} />
        <Route path='/use-memo-hook' component={UseMemoHook} />
        <Route path='/use-context-hook' component={UseContextHook} />
      </Suspense>
      <GlobalStyles />
    </BrowserRouter>
  );
};
