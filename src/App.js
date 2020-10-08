import React, {useState} from 'react';
import './App.css';

import MainContainer from './components/main-container/main-contaier'
import Menu from './components/menu/menu'
// import placeholder from './components/utility/placeholder.gif'

import {BrowserRouter, Link } from 'react-router-dom'

import  {currentLang} from './lang-packs/lang-manager'
import changeLang from './custom-events/change-lang';

import deviceDetector from './components/utility/device-detector';

const currentDevice = deviceDetector()

const titleStyle = {
  textTransform: 'uppercase', 
  textAlign: 'left', 
  paddingLeft: '20px'
}

const linkStyle = {
  textDecoration: 'unset',
  color: 'unset'
}

const Title = () => <Link style={linkStyle} to='/'><h2 style={titleStyle}>Alessandro Sciaraffa</h2></Link>

function App() {

  const [langPack, setlangPack] = useState(currentLang);

  changeLang.interecept(() => setlangPack(currentLang));

  return (
    <BrowserRouter>
    <div className="App">
        {currentDevice === 'mobile'?<Title />:null}
        <Menu langPack={langPack} />
        <MainContainer langPack={langPack} />
        {/* <img src={placeholder} /> */}
    </div>
    </BrowserRouter>
  );
}

export default App;

