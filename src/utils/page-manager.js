import langManager from './../lang-packs/lang-manager';
import changeLangEvent from './../custom-events/change-lang-event';
import changePageEvent from './../custom-events/change-page-event';
import defaultVals from './dafeult-vals';

function findPage(newPageId){
    return langManager
    .getCurrentLangPack()
    .pages
    .find(p => p.id === newPageId);
}

const defaultPage = defaultVals.defaultPage;

let currentPage= findPage(defaultPage);

let pageHistory = [];

changeLangEvent.intercept(() => {
    changePageEvent.trigger(currentPage.id);
})


export default {
    changePage: (newPageId) => {
        currentPage = findPage(newPageId)
        if(!currentPage){
            currentPage = findPage(defaultPage);
        }
        pageHistory
            .push(currentPage);
    },
    getCurrentpage: () => {
        return currentPage;
    },
    getuPageHistory: () => {
        return pageHistory;
    },
    setpageHistory: (newHistory) => {
        pageHistory = newHistory;
    }
}