import React from 'react';

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
    alignItems: 'center'
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


export default ({langPack}) => {
    const page = langPack.content;
    console.log(langPack);
    const images = page.images.map(
        (img,i) =>
         <img style={imgStyle} src={`/${img}`} key={i} alt='bio-img' />
         );

    return <div style={bioPageStyle}>
        <div style={bioSection}>
        {images}
        </div>
        <div style={bioSectionText}>
        <h1>bio</h1>
        {page.subTitle?<h4 style={subTitleStyle}>{page.subTitle}</h4>:null}
        {page.mainContent?<p style={mainContentStyle}>{page.mainContent}</p>:null}
        {page.footer?<p style={footerStyle}>{page.footer}</p>:null}
        </div>
    </div>
}