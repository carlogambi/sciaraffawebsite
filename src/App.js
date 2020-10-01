import React, {useState} from 'react';
import './App.css';

import MainContainer from './components/main-container/main-contaier'
import Menu from './components/menu/menu'

import {BrowserRouter } from 'react-router-dom'

import  {currentLang} from './lang-packs/lang-manager'
import changeLang from './custom-events/change-lang';

const titleStyle = {
  textTransform: 'uppercase', 
  textAlign: 'left', 
  paddingLeft: '20px'
}

const title = <h2 style={titleStyle}>Alessandro Sciaraffa</h2>

function App() {

  const [langPack, setlangPack] = useState(currentLang);

  changeLang.interecept(() => setlangPack(currentLang));

  return (
    <BrowserRouter>
    <div className="App">
        {title}
        <Menu langPack={langPack} />
        <MainContainer langPack={langPack} />
    </div>
    </BrowserRouter>
  );
}

export default App;

