import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Logo from './assets/logo-default.svg';
import Home from './pages/Home';
import About from './pages/About';
import { Splash } from './components/Splash';

import './assets/fonts/jungka.module.css';

export function App() {
  const location = useLocation();
  const [ shownSplash, setShownSplash ] = useState(false);

  return (
    <div style={{ height: '100%', width: '100%', backgroundColor: '#FEFEFE' }}>
      <div className={'container max-w-3xl sm-container mx-auto py-8 md:py-16 px-4 flex flex-col h-full'}>
        {(!shownSplash && location.pathname === '/') && <Splash onComplete={() => setShownSplash(true)} />}
        <div className={'flex'}>
          <div className={'w-2/6 md:w-min'}><img src={Logo} width="160" alt="Bee Stripes" /></div>
        </div>
        <div className={'flex flex-1 md:items-center'}>
          <Switch>
            <Route key={'home'} path={'/'} component={() => <Home onEnter={shownSplash} />} />
            <Route key={'about'} path={'/about'} component={About} />
          </Switch>
        </div>
        <div className={'md:absolute md:bottom-4 md:left-6 '}>
          <p className="mt-2 pb-6 leading-normal" style={{color: '#b4b4b4'}}>hi@beestripes.studio</p>
        </div>
      </div>
    </div>
  )
}
