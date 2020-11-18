import React from 'react';
import changeLang from '../../../custom-events/change-lang';
import deviceDetector from '../../utility/device-detector';
import {langNameList, currentLang} from './../../../lang-packs/lang-manager'

const currentDevice = deviceDetector();


const currentLangButtonStyle = {
    // border: 'solid 1px black',
    backgroundColor: 'black',
    color: 'white',
    padding: '10px',
    textTransform: 'uppercase',
    cursor: 'none',
    margin: currentDevice==='desktop'?'10px':'unset',
    width: 'fit-content'
}

const CurrentLangButton = ({langName}) => {
    
    return <span style={currentLangButtonStyle}>{langName}</span>
}

const langButtonStyle = {
    backgroundColor: 'white',
    margin: currentDevice==='desktop'?'10px':'unset',
    padding: '10px',
    cursor: 'pointer',
    width: 'fit-content',
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
            // margin: '30px',
            display: 'flex',
            justifyContent: 'space-between',
            // border: 'solid 1px black',
            width: 'fit-content',
            height: '60px'
        }
        break;
        default:
        break;
}


export default () => {
return (langNameList.length > 1)?(<div style={langMenuStyle}>
    {langNameList.map(
        (ln,i)=>
        (ln===currentLang.name)?
        <CurrentLangButton langName={ln} key={i} />
        :
        <LangButton langName={ln} key={i} />
    )}
</div>):(<></>)
}