import React from 'react';

import Bio from './Bio';
import Pageleveller from './PageLeveller';
import Publications from './Publications';
import PortfolioDownload from './PortfolioDownload';
import Contacts from './Contacts';
import { currentLang } from '../../../lang-packs/lang-manager';

export default (props) => {
    const id = props.match.params.id;
    
    let currentPage;
    switch (id) {
        case 'bio':
        currentPage = <Bio langPack={currentLang}/>
        break;
        case 'contacts':
        currentPage = <Contacts langPack={currentLang}/>
        break;
        case 'publications':
            currentPage = <Publications langPack={currentLang}/>
        break;
        case 'portfoliodownload':
            currentPage = <PortfolioDownload langPack={currentLang}/>;
        break;
        default:
            currentPage = <Pageleveller langPack={currentLang} id={id}  subTagRef={false}/>
            break;
        }
        
    return <div>
        {currentPage}
    </div>
}