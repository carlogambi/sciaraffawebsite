import React from 'react';
import changeLang from '../../../custom-events/change-lang';
import deviceDetector from '../../utility/device-detector';
import {langNameList, currentLang} from './../../../lang-packs/lang-manager'

const currentDevice = deviceDetector();


const currentLangButtonStyle = {
    // border: 'solid 1px black',
    backgroundColor: 'black',
    color: 'white',
    padding: '5px',
    textTransform: 'uppercase',
    cursor: 'none',
    margin: currentDevice==='desktop'?'10px':'unset'
}

const CurrentLangButton = ({langName}) => {

return <span style={currentLangButtonStyle}>{langName}</span>
}

const langButtonStyle = {
    backgroundColor: 'white',
    cursor: 'pointer'
}

const LangButton = ({langName}) => {
return <span 
    style={langButtonStyle}
    onClick={() => changeLang.trigger(langName)}
    >{langName}</span>
}

let langMenuStyle; 
switch(currentDevice){
    case 'mobile':
        langMenuStyle = {
            margin: '20px',
            display: 'flex',
            justifyContent: 'space-around',
            alignitems: 'center'
        }
        break;
    case 'desktop':
        langMenuStyle = {
            margin: '30px',
            display: 'flex',
            justifyContent: 'space-between'
        }
        break;
        default:
        break;
}

const titleStyle ={
    fontSize: '20pt',
    textTransform: 'uppercase',
    letterSpacing: '15px',
    cursor: 'context-menu',
    //titolo da centrare
}

export default () => {
return <div style={langMenuStyle}>
    {currentDevice === 'desktop'?<span style={titleStyle}>Alessandro Sciaraffa</span>:null}
    <div>
    {langNameList.map(
        (ln,i)=>
        (ln===currentLang.name)?
        <CurrentLangButton langName={ln} key={i} />
        :
        <LangButton langName={ln} key={i} />
    )}
    </div>
</div>
}