import React, {useState} from 'react';
import backToTop from './../../../../../../utils/back-to-top'

import './download-portfolio.css';

const PsswGate = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [firstTry, setFirstTry] = useState(true);
    const errTxt = 'WRONG PASSWORD';

return  <div>
            <p>{firstTry?'':errTxt}</p>
            <input 
            type="text" 
            id="pssw-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />
            <span 
                id='dwnld-button' 
                onClick={() => {
                    props.setPsswCorrect(inputValue);
                    setFirstTry(false);
                    }}
            >
                {props.info.psswButtonText}
            </span>
    </div>;
}

const Download = ({info}) => {
    return <a href={info.url} download>
                {info.buttonText}
            </a>;
}


export default ({info}) => {


    backToTop()
    
    const [psswCorrect, setPsswCorrect] = useState(false);

    const psswList = info.password;
    
    return <div id="download-portfolio">
            <h1>DOWNLOAD PORTFOLIO</h1>
            {psswCorrect?
                <Download 
                info={info}
                />
            :
                <PsswGate
                     setPsswCorrect={
                         (pssw) => 
                            psswList.includes(pssw)
                            ?
                            setPsswCorrect(true)
                            :
                            setPsswCorrect(false)
                        }
                    info={info}
                />}
            <br/>correct pssw: {JSON.stringify(info.password)}
        </div>;
}
