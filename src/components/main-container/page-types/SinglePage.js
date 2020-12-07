import React from 'react';
import langManager from '../../../lang-packs/lang-manager';
import deviceDetector from '../../utility/device-detector';
import Audio from '../page-components/Audio';
import ScrollToTopButton from '../page-components/ScrollToTopButton';
import Video from '../page-components/Video';

const currentDevice = deviceDetector();

let audioStyle= {
    margin: '10px',
}
let titleStyle= {
    fontSize: '20px',
    textTransform: 'uppercase',
    marginBottom: '0px',
    width: '70%',
    textAlign: 'right'
}
let dateStyle= {
    width: '70%',
    // border: 'solid 1px black',
    fontWeight: '300',
    marginBottom: '0px',
    textAlign: 'right'
}
let subTitleStyle = {
    width: '70%',
    marginTop: '0px',
    fontWeight: '300',
    textAlign: 'right'
}

let imgStyle={
    alignSelf: 'center',
    marginBottom: '3px'
}

let pageStyle ={
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    pagging: '0%'
}

let mainContent = {
    textAlign: 'justify'
}

let citStyle = {
    width: '70%',
    textAlign: "right"
    
}
let footerStyle ={
    textAlign: 'justify',
}

let didaStyle = {
    fontSize: '8pt', 
    width: '70%',
    textAlign: 'right',
    marginTop: '0px'
}

switch (currentDevice) {
    case 'mobile':
        audioStyle= {
            ...audioStyle,
            minWidth: '100%',
        }
        mainContent = {
        ...mainContent, 
            width: '83%',
            fontSize: '12pt',
        }
        
        citStyle = {
        ...citStyle, 
            fontSize: '11pt',            
        }
        footerStyle = {
        ...footerStyle,
            width: '83%',
            fontSize: '11pt',
        }
        imgStyle=  {
        ...imgStyle,
                width: '100%',
                margin: '15px',
            }
        break;

    default: //desktop
        audioStyle ={
        ...audioStyle, 
            alignSelf: 'center',
            width: "70%"
        }
        mainContent ={
        ...mainContent, 
            width: '70%',
            fontSize: '9pt',
        }
        citStyle ={
        ...citStyle, 
            fontSize: '12pt',            
        }
        footerStyle ={
        ...footerStyle,
            width: '70%',
            fontSize: '9pt',
        }
        imgStyle= {
        ...imgStyle,
                width: '70%',
                margin: '30px',
            }
        break;
}


const SinglePage = (props) => {
    const pageId = props.match.params.id;
    const page = langManager.currentLang.pages.find(p => p.id === pageId);
    const content = page.content;
    
    return <div style={pageStyle}>
        {page.title && 
            <h5 style={titleStyle}>{page.title}</h5>}

        {content.date && 
            <h4 style={dateStyle}>{content.date}</h4>}

        {content.subTitle && 
            <h3 style={subTitleStyle}>{content.subTitle}</h3>}

        {content.images && 
            <>
                <img style={imgStyle} src={content.images[0].img} alt='anteprima-img-single-page' />
                {content.images[0].dida && (<i style={didaStyle}>{content.images[0].dida}</i>)}
            </>
        }

        {content.audios && 
            content.audios
                .map((v, i) => <Audio key={i} url={v} style={audioStyle}/>)}

        {content.cit && 
            <p style={citStyle}><i>{content.cit.text}</i><br/>{content.cit.author}</p>}

        {content.mainContent && 
            <p style={mainContent}>{content.mainContent}</p>}

        {content.footer && 
            <p style={footerStyle}>{content.footer}</p>}

        {content.videos && 
            content.videos
                .map((v, i) => <Video key={i} url={v} />)}

        {content.images && 
            content.images
                .filter((img, indx) => indx !== 0)
                .map((img, i) => (
                    <React.Fragment key={i}>
                        <img style={imgStyle} src={img.img}  alt={img.dida?img.dida:'single-page-img'} />
                        {img.dida && (<i style={didaStyle}>{img.dida}</i>)}
                    </React.Fragment>
                ))}

        {(currentDevice === 'desktop') && <ScrollToTopButton/>}
    </div>
}

export default SinglePage