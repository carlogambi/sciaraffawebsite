import React, {useState} from 'react';
import './App.css';

import MainContainer from './components/main-container/main-contaier'
import Menu from './components/menu/menu'
// import placeholder from './components/utility/placeholder.gif'

import {BrowserRouter } from 'react-router-dom'

import  {currentLang} from './lang-packs/lang-manager'
import changeLang from './custom-events/change-lang';

function App() {

  const [langPack, setlangPack] = useState(currentLang);

  changeLang.interecept(() => setlangPack(currentLang));

  return (
    <BrowserRouter>
    <div className="App">
        <Menu langPack={langPack} />
        <MainContainer langPack={langPack} />
        {/* <img src={placeholder} /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;

