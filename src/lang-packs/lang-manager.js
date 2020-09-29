import defaultVals from './../utils/dafeult-vals'

import langPackIta from './lang-pack-ita.json';
import langPackEng from './lang-pack-eng.json';
// import langPackFr from './lang-pack-fr.json';
// import langPackRu from './lang-pack-ru.json';

const langPackList = [ 
    langPackIta, 
    langPackEng, 
    // langPackRu, 
    // langPackFr 
];
const defaultLangName = defaultVals.defaultLang;
let currentLangName = defaultLangName;
let currentLangPack = langPackList.filter(l => l.langName === defaultLangName)[0];

export default {
    
    setLang: (langName) => {
        const langToFind = langPackList.filter(lang => lang.langName === langName)[0];
            if(langToFind !== undefined){
                currentLangName = langToFind.langName;
                currentLangPack = langToFind;
            }
    },
    
    getLangPackList: () => { 
        return langPackList.map(lang => lang.langName); 
    },

    getCurrentLangPack: () => { 
        return currentLangPack; 
    },

    getCurrentLangName: () => { 
        return currentLangName; 
    }
}
