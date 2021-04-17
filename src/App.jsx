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
    <div className={'w-full h-full'} style={{ backgroundColor: '#FEFEFE', overflow: shownSplash ? 'visible' : 'hidden' }}>
      <div className={'h-full md:mx-auto max-w-screen-md'}>
        {(!shownSplash && location.pathname === '/') && <Splash onComplete={() => setShownSplash(true)} />}

        <div className={'flex flex-col h-full px-6'}>
          <div className={'flex'}>
            <div className={'w-28 pt-6 md:w-36 md:pt-8'}><img src={Logo} width="160" alt="Bee Stripes" /></div>
          </div>
          <div className={'flex flex-1 sm:items-center'}>
            <Switch>
              <Route key={'home'} path={'/'} component={() => <Home onEnter={shownSplash} />} />
              {/*<Route key={'about'} path={'/about'} component={About} />*/}
            </Switch>
          </div>
          <div className={'md:absolute md:bottom-4 md:left-6 pb-10 md:pb-0'}>
            <p className="mt-2 pb-6 leading-normal" style={{color: '#b4b4b4'}}>hi@beestripes.studio</p>
          </div>
        </div>

      </div>
    </div>
  )
}
