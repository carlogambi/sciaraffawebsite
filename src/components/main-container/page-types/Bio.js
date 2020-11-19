import React from 'react';
import Image from './../../utility/Image'
const bioPageStyle ={
    display:'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
};
const bioSection = {
    margin: '20px',
    width: '600px'
};
const bioSectionText = {
    ...bioSection,
    border: 'solid 1px black',
    width: '600px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px'
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