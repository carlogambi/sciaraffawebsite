import React from 'react';
import Image from './../../utility/Image'

import deviceDetector from '../../utility/device-detector';


const currentDevice = deviceDetector()

const bioPageStyle ={
    display:'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
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
    textAlign: currentDevice ==='mobile'?'justify':'unset'
}
const subTitleStyle = {
    width: 'fit-content'
};
const mainContentStyle = {
    width: 'fit-content'

};
const footerStyle = {
    fontStyle: 'italic',
    width: 'fit-content'
};
const imgStyle = {
    width: '100%'
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
        <h1>BIO</h1>
        {page.subTitle && <h4 style={subTitleStyle}>{page.subTitle}</h4>}
        {page.mainContent && <p style={mainContentStyle}>{page.mainContent}</p>}
        {page.footer && <p style={footerStyle}>{page.footer}</p>}
        </div>
    </div>
}
export default Bio