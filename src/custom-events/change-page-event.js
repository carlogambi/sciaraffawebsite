import customEventDispatcher from './custom-event-dispatcher';
import pageManager from './../utils/page-manager'

export default {
    trigger: (newPageId) => {
        pageManager.changePage(newPageId)
        customEventDispatcher.dispatchEvent(
            new CustomEvent('page-changed')
        )
    },
    intercept: (callback) => {
        customEventDispatcher.addEventListener('page-changed', (event) => { callback(event); })
    }
}