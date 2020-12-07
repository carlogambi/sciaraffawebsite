import React from 'react';
import Image from './../../utility/Image'

import deviceDetector from '../../utility/device-detector';


const currentDevice = deviceDetector()

let bioPageStyle ={
    width:'100%',
    display:'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
};
const imgContainer = {
    margin: '20px',
    width: 'fit-content'
};
let textContainer = {
    ...imgContainer,
    border: 'solid 1px black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
let imgStyle = {}

switch (currentDevice) {
    case 'mobile':
            bioPageStyle ={
                ...bioPageStyle,
                flexDirection: 'column',
                alignItems:'center'
            }
            textContainer = {
                ...textContainer,
                width: '85%',
                padding: '5px',
            }
            imgStyle = {
                width: '100%'
            }
        break;

    case 'tablet':
        bioPageStyle ={
            ...bioPageStyle,
            flexDirection: 'column',
            alignItems: 'center'
        }
        textContainer = {
            ...textContainer,
            width: '80%',
            padding: '10px',
        }
        imgStyle = {
            width: '100%'
        }
        break;
        
        default:
            bioPageStyle ={
                ...bioPageStyle,
                flexDirection: 'row',
            }
            textContainer = {
                ...textContainer,
                width: '600px',
                padding: '10px',
            }
            imgStyle = {
                width: '700px'
            }
        break;
}




const Bio = ({langPack}) => {
    const page = langPack.content;
    const images = page.images.map(
        (img,i) => <Image src={img} style={imgStyle} key={i} />);

    return <div style={bioPageStyle}>
        <div style={imgContainer}>
        {images}
        </div>
        <div style={textContainer}>
        {page.subTitle && <h1 style={subTitleStyle}>{page.subTitle}</h1>}
        {page.mainContent && <p style={mainContentStyle}>{page.mainContent}</p>}
        {page.footer && <p style={footerStyle}>{page.footer}</p>}
        </div>
    </div>
}
export default Bio