import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Logo from './assets/logo-default.svg';
import { PreloadFonts } from './components/PreloadFonts';

import './assets/fonts/jungka.module.css';

import { Splash } from './components/Splash';

// Auto generates routes from files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages = import.meta.globEager('./pages/*.jsx')

const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages\/(.*)\.jsx$/)[1]
  return {
    name,
    path: name === 'Home' ? '/' : `/${name.toLowerCase()}`,
    component: pages[path].default
  }
})

export function App() {
  const [ shownSplash, setShownSplash ] = useState(false);

  if (!shownSplash) {
    return (
      <>
        <Splash onComplete={() => setShownSplash(true)} />
        {/* The point here is to try to preload fonts to avoid FOUT */}
        <div className={'z-0 opacity-0'}>
          <PreloadFonts />
        </div>
      </>
    )
  }

  return (
    <div style={{ height: '100%', width: '100%', backgroundColor: '#FEFEFE' }}>
      <div className={'container max-w-3xl sm-container mx-auto py-16 px-4 flex flex-col h-full'}>
        <div className={'flex'}>
          <div><img src={Logo} width="160" alt="Bee Stripes" /></div>
        </div>
        <div className={'flex flex-1 items-center'}>
          <Switch>
            {routes.map(({ path, component: RouteComp }) => {
              return (
                <Route key={path} path={path}>
                  <RouteComp />
                </Route>
              )
            })}
          </Switch>
        </div>
      </div>
      <div className={'absolute bottom-4 left-6'}>
        <p className="mt-2 pb-6 leading-normal" style={{color: '#b4b4b4'}}>hi@beestripes.studio</p>
      </div>
    </div>
  )
}
