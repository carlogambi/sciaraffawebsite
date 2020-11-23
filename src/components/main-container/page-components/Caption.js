import React, { useState } from 'react'
import {Link} from 'react-router-dom';

import loadingPlaceHolder from './../../utility/placeholder.gif'
import deviceDetector from '../../utility/device-detector';


const currentDevice = deviceDetector()

export const linkStyle = {
    textDecoration: 'none',
    position:'relative',
    color: 'unset',
    textTransform: 'uppercase',
    fontWeight: '700',
    letterSpacing: '3px',
    fontSize: '14pt',
    borderRight: currentDevice==='mobile'?'100px':'unset'

}

let captionStyle = {
    width: currentDevice === 'mobile'?'150px':'300px',
    minHeight: currentDevice==='mobile'?'200px':'150px',
    maxHeight: currentDevice==='mobile'?'200px':'150px',
    backgroundSize: currentDevice==='mobile'?'300%':'200%',
    backgroundPosition: 'center center',
    margin: '10px'
}

export let captionTextContainerStyle = {
    margin: '10px',
    backgroundColor: '#ffffff73',
    position: 'absolute',
    paddingTop: currentDevice==='mobile'?'unset':'55px',
    paddingLeft: currentDevice==='mobile'?'unset':'10px',
    paddingRight: currentDevice==='mobile'?'unset':'10px',
    top: '0px',bottom: '0px',left: '0px',right: '0px',
    fontSize: '5pt',
    maxWidth: '300px',
}


export const Caption = ({data}) => {
    const [hover, setHover] = useState(false)
    const [imgLoad, setImgLoad] = useState(false)
    
    const captionImg = new Image(100,100);
    captionImg.src = data.content.imgAnteprima;
    captionImg.onload = () => setImgLoad(true)

    captionStyle = {
        ...captionStyle,
        backgroundImage: `url(${imgLoad?captionImg.src:loadingPlaceHolder})`,
        // opacity: hover?'0.3':'1.0'
    }
    captionTextContainerStyle = {
        ...captionTextContainerStyle,
        transition: 'opacity 0.5s',
        opacity: hover?'1':'0',
    }
    return <Link style={linkStyle}to={`singlePage${data.id}`}>
        <div
            style={captionStyle}
            onMouseEnter={() => setHover(true)}    
            onTouchStart={() => setHover(true)}    
            onMouseLeave={() => setHover(false)}    
            onTouchEnd={() => setHover(false)}    
        >{
            // hover&&
            <div style={captionTextContainerStyle}>
                <h1>
                    {data.title}
                </h1>
                <h3 >
                    {data.content.subTitle}
                </h3>
            </div>}
        </div>
    </Link>
}

export default Caption