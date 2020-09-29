import React , {useEffect}from 'react';
import langManager from '../../../../../../lang-packs/lang-manager';
import Caption from './children/caption-sub-page-accumulator';
import backToTop from '../../../../../../utils/back-to-top'

import './sub-page-accumulator.css';

export default ({info}) => {
    backToTop()
    let captionList = 
        langManager
            .getCurrentLangPack()
            .pages
            .filter(p => 
                p.aggregatorId === info.id
            ).map(
                (l, i) => 
                <Caption 
                key={i} 
                data={l} />
            );
    
    return <div id="sub-page-Accumulator">
        {info.title?<h3>{info.title}</h3>:null}
        {info.subTitle?<h5>{info.subTitle}</h5>:null}
        {info.mainContent?<p>{info.mainContent}</p>:null}
        {info.footer?<p>{info.footer}</p>:null}
        <div id="caption-container">
        {captionList}
        </div>
        {/* <br/><br/>dati_grezzi:<span dangerouslySetInnerHTML={{__html: JSON.stringify({info, listaCaptionLavori}).replace(/,/gm, ',<br/>')}} /> */}

    </div>
    
}

