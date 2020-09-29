import React, {useState} from 'react';
import backToTop from './../../../../../../utils/back-to-top'

import './download-portfolio.css';

export default ({info}) => {


    backToTop()
    
    const [psswCorrect, setPsswCorrect] = useState(false);
    const [firstTry, setFirstTry] = useState(true);

    let currentText;
    const psswList = info.password;
    
    const checkPssw = () => {
        if(firstTry)setFirstTry(false);
        currentText = document.getElementById('pssw-input').value;
        psswList.forEach(p => 
            (p === currentText)?setPsswCorrect(true):null
        );
    };

    const wrongPssw= 
    (!firstTry && !psswCorrect)?<span>!WRONG-PASSWORD!</span>:null;
        
    
    const insertPssw =<React.Fragment>
            {wrongPssw}<input type="password" id="pssw-input"/>{wrongPssw}
            <span id='dwnld-button' onClick={checkPssw}>{info.psswButtonText}</span>
            </React.Fragment>;

    

    const download= <a href={info.url} download>
                        {info.buttonText}
                    </a>;
    
    return <div id="download-portfolio">
            <h1>DOWNLOAD PORTFOLIO</h1>
            {psswCorrect?download:insertPssw}
            <br/>correct pssw: {JSON.stringify(info.password)}
        </div>;
}
