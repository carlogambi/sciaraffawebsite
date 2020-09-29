import React, {useState} from 'react';

import './content-container.css'

import changePageEvent from '../../../../custom-events/change-page-event';
import pageManager from '../../../../utils/page-manager';

import Bio from './children/bio/bio';
import DownLoadPortfolio from './children/download-portfolio/download-portfolio';
import Home from './children/home/home';
import Pubblicazioni from './children/pubblicazioni/pubblicazioni';
import SubPage from './children/sub-page/sub-page';
import SubPageAccumulator from './children/sub-page-accumulator/sub-page-accumulator';

export default () => {
    const [currentPage, changePage] = useState(pageManager.getCurrentpage());
    changePageEvent.intercept(() => changePage(pageManager.getCurrentpage()));
    const page =() =>{  
    switch(currentPage.pageType) {

        case 'pageaggregator':
            return <SubPageAccumulator info={currentPage} />;
            
        case 'downloadportfolio':
            return <DownLoadPortfolio info={currentPage} />;

           
        case 'pubblicazioni':
            return <Pubblicazioni info={currentPage} />;
            
        case 'bio':
            return <Bio info={currentPage} />;
            
        case 'subPage':
            return <SubPage info={currentPage} />;
            
        default:
            return <Home info={currentPage} />;
        }
    }
        
    return <div
            id='content-container'
        >
        {page()}
    </div>
}








