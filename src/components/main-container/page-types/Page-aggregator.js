import React from 'react';

import Bio from './Bio';
import Pageleveller from './PageLeveller';
import Publications from './Publications';
import PortfolioDownload from './PortfolioDownload';
import Contacts from './Contacts';
import { currentLang } from '../../../lang-packs/lang-manager';

const PageAggregator = (props) => {
    const id = props.match.params.id;
    const findPage = id => currentLang.pages.find(p => p.id === id)
    
    let currentPage;
    switch (id) {
        case 'bio':
        currentPage = <Bio langPack={findPage('bio')}/>
        break;
        case 'contacts':
        currentPage = <Contacts langPack={findPage('contacts')}/>
        break;
        case 'publications':
            currentPage = <Publications langPack={findPage('publications')}/>
        break;
        case 'portfoliodownload':
            currentPage = <PortfolioDownload langPack={findPage('portfoliodownload')}/>;
        break;
        default:
            currentPage = <Pageleveller langPack={currentLang} id={id}  subTagRef={false}/>
            break;
        }
        
    return <>
        {currentPage}
    </>
}

export default PageAggregator