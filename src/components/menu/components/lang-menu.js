import React from 'react';
import changeLang from '../../../custom-events/change-lang';

import {langNameList, currentLang} from './../../../lang-packs/lang-manager'

const currentLangButtonStyle = {
    border: 'solid 1px black',
    backgroundColor: 'black',
    color: 'white',
    padding: '5px',
    textTransform: 'uppercase',
    cursor: 'none'
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

const langMenuStyle = {
    margin: '20px',
    display: 'flex',
    justifyContent: 'space-around'
}

export default () => {
return <div style={langMenuStyle}>
    {langNameList.map(
        (ln,i)=>
        (ln===currentLang.name)?
        <CurrentLangButton langName={ln} key={i} />
        :
        <LangButton langName={ln} key={i} />
    )}
</div>
}