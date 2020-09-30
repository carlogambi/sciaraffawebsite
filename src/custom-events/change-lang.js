import {setLang} from './../lang-packs/lang-manager';
import $ from 'jquery'
let a = document.querySelector('#custom-event-dispatcher');

const updateHtmlLangAttribute = (lang) => {
    if($('html').attr('lang') !== lang){
        $('html').attr('lang', lang);
    }
}

export default {
    trigger: (lang) => {
        setLang(lang)
        a.dispatchEvent(
            new CustomEvent(
                'lang-changed', 
                { detail: lang }
                )
                );
        updateHtmlLangAttribute(lang);

    },
    interecept: (callback) => {
        a.addEventListener('lang-changed', (event) => {
            callback(event);
        })
    }
}
