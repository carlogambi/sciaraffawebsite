import langPackIta from './lang-pack-ita.json'
import langPackEng from './lang-pack-eng.json'

const defaultLang = 'ita';

export const langList = [
    langPackEng,
    langPackIta
]

export const langNameList = langList.map(l => l.name)

export let currentLang = langList.find(l => l.name === defaultLang)

export const setLang = (langName) => {
        const newLang = langList.find(l => l.name === langName);
        if(newLang)currentLang=newLang;
    }

export default {
    setLang,
    currentLang
    }
