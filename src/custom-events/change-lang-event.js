import customEventDispatcher from './custom-event-dispatcher';
import langManager from './../lang-packs/lang-manager'

export default {
    trigger: (newLang) => {
        langManager.setLang(newLang);
        customEventDispatcher.dispatchEvent(
            new CustomEvent('lang-changed')
        )
    },
    intercept: (callback) => {
        customEventDispatcher.addEventListener('lang-changed', (event) => { callback(event); })
    }
}