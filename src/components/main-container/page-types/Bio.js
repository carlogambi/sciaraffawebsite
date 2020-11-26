import React from 'react';
import Image from './../../utility/Image'

import deviceDetector from '../../utility/device-detector';


const currentDevice = deviceDetector()

const bioPageStyle ={
    width:'100%',
    display:'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    flexDirection: currentDevice ==='mobile'?'column':'row',
};
const bioSection = {
    margin: '20px',
    width: '100%'
};
const bioSectionText = {
    ...bioSection,
    border: 'solid 1px black',
    width: currentDevice ==='mobile'?'100%':'600px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: currentDevice ==='mobile'?'5px':'10px',
    textAlign: 'justify'
}
const subTitleStyle = {
    width: 'fit-content',
    fontWeight: '500',
    letterSpacing: '10px'
};
const mainContentStyle = {
    fontWeight: '400',
    width: 'fit-content'
    
};
const footerStyle = {
    fontWeight: '300',
    fontStyle: 'italic',
    width: 'fit-content'
};
const imgStyle = {
    width: currentDevice ==='mobile'?'100%':'700px'
}




const Bio = ({langPack}) => {
    const page = langPack.content;
    const images = page.images.map(
        (img,i) => <Image src={img} style={imgStyle} key={i} />);

    return <div style={bioPageStyle}>
        <div style={bioSection}>
        {images}
        </div>
        <div style={bioSectionText}>
        {page.subTitle && <h1 style={subTitleStyle}>{page.subTitle}</h1>}
        {page.mainContent && <p style={mainContentStyle}>{page.mainContent}</p>}
        {page.footer && <p style={footerStyle}>{page.footer}</p>}
        </div>
    </div>
}
export default Bio