import React from 'react';
import changeLang from '../../../custom-events/change-lang';

import {langNameList, currentLang} from './../../../lang-packs/lang-manager'

const currentLangButtonStyle = {
    border: 'solid 1px black',
    backgroundColor: 'red'
}

const CurrentLangButton = ({langName}) => {

return <span style={currentLangButtonStyle}>{langName}</span>
}

const langButtonStyle = {
    border: 'solid 1px black',
    backgroundColor: 'green'
}

const LangButton = ({langName}) => {
return <span 
    style={langButtonStyle}
    onClick={() => changeLang.trigger(langName)}
    >{langName}</span>
}

export default () => {
return <div>
    {langNameList.map(
        (ln,i)=>
        (ln===currentLang.name)?
        <CurrentLangButton langName={ln} key={i} />
        :
        <LangButton langName={ln} key={i} />
    )}
</div>
}