import React from 'react';
import backToTop from './../../../../../../utils/back-to-top'

import './bio.css'

export default (props) => {
    backToTop()
    function title(){
        if(props.info.title){
            return <h1>{props.info.title}</h1>
        }
    }
    function subTitle(){
        if(props.info.subTitle){
            return <h3>{props.info.subTitle}</h3>
        }
    }
    function images(){
        if(props.info.images){
            return         <img 
            src={props.info.images[0]} 
            alt="bio"
        />
        }
    }
    function mainContent(){
        if(props.info.mainContent){
            return <p>{props.info.mainContent}</p>
        }
    }
    function footer(){
        if(props.info.footer){
            return  <p>
                     <i>{props.info.footer}</i>
                </p>
        }
    }
    return <div id='bio'>
        <div id='images'>
        {images()}
        </div>
        <div id='text'>
        {title()}
        {subTitle()}
        {mainContent()}
        {footer()}
        </div>

        {/* <br/><br/>dati_grezzi:<span dangerouslySetInnerHTML={{__html: JSON.stringify(props.info).replace(/,/gm, ',<br/>')}} /> */}
    </div>
    
}
