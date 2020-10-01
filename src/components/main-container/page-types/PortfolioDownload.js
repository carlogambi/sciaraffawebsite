import React, {useState} from 'react';
import Image from './../../utility/Image'
const buttonStyle = {
    border: 'solid 1px black',
    padding: '3px',
    margin: '20px',
    cursor: 'pointer'
};
const inputStyle = {
    margin: '20px'
};
const downldButtonStyle = {
    textDecoration:'none',
    color: 'black',
    border: 'solid 1px black',
    padding: '3px',
    cursor: 'pointer',

};
const downldContainer = {

    margin: '50px',

};

const errStyle = {
    color: 'red'
};
const pageStyle = {

};
const imgStyle = {
    width: 'auto',
    maxHeight: '300px'
}

const Psswgate = (props) => {
    const [inputvalue, setinputValue] = useState('');
    const [firstTry, setFirstTry] = useState(true);
    const errText = '!WRONG PASSWORD!'
    return <div>
            {firstTry?null:<span style={errStyle}>{errText}</span>}
            <input 
            type='password'
            style={inputStyle}
            onChange={e => setinputValue(e.target.value)}
            />
            {firstTry?null:<span style={errStyle}>{errText}</span>}
            <br/>
            <span
                style={buttonStyle}
                onClick={() => {
                    props.setPsswCorrect(inputvalue);
                    setFirstTry(false)
                }}
            >
                {props.info.psswButtonText}
            </span>
    </div>
}

const Download = ({info}) => {
    return <div style={downldContainer}>
             <a
            style={downldButtonStyle}
            href={info.url}
            download
            >
                {info.buttonText}
            </a>
        </div>
}

export default ({langPack}) => {
    const info= langPack.content;
    const psswList = info.password;
    const [psswCorrect, setPsswCorrect] = useState(false);


    return <div style={pageStyle}>
            <h1>portfolio download</h1>
            {info.image?<Image src={info.image} alt='dwnld-img' style={imgStyle} />:null}
            {psswCorrect?
                <Download info={info} />
            :
                <Psswgate info={info}
                    setPsswCorrect={
                        pssw => 
                        psswList.includes(pssw)?
                        setPsswCorrect(true)
                        :
                        setPsswCorrect(false)
                    }    
                />
            }
            <br/>correct passwords: {psswList.map((p,i) => <p key={i}>{p}</p>)}
    </div>;
}


