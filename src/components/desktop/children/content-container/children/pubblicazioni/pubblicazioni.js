import React from 'react';
import './pubblicazioni.css';
import backToTop from './../../../../../../utils/back-to-top'

import Pubblication from './children/pubblicazione'


export default ({info}) => {
    backToTop()
    function title(){
       if(info.title){
           return <h1>{info.title}</h1>
       }
    }
    function mainContent(){
        if(info.mainContent){
            return <p>{info.mainContent}</p>
        }
    }
    function buildPublications(){
        return info
                .publications
                .map((p,i) => <Pubblication key={i} data={p}/>)
    }

    return <div>
        {title()}
        {mainContent()}
        <div id='publications'>
            {buildPublications()}
        </div>
        <br/><br/>dati_grezzi:<span dangerouslySetInnerHTML={{__html: JSON.stringify(info).replace(/,/gm, ',<br/>')}} />

    </div>
    
}
