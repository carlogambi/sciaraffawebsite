import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import langManager from '../../../lang-packs/lang-manager';
import deviceDetector from '../../utility/device-detector';
import Audio from '../page-components/Audio';
import ScrollToTopButton from '../page-components/ScrollToTopButton';
import loadingplaceholder from './../../utility/loadingimageplaceholder.png'




const currentDevice = deviceDetector();

let audioStyle, 
    videoStyle,
    titleStyle,
    dateStyle,
subTitleStyle = {}

switch (currentDevice) {
    case 'mobile':
        audioStyle={
            minWidth: '100%',
            margin: '10px'
        }
        videoStyle = {
            alignSelf: 'center',
            width: '100%',
            height: '230px',
            margin: '15px'
        }
        titleStyle = {}
        dateStyle = {}
        subTitleStyle = {}
        break;

    default:
        audioStyle = {
            margin: '10px',
            alignSelf: 'center',
            width: "70%"
        }
        videoStyle = {
            alignSelf: 'center',
            width: '70%',
            height: '600px',
            margin: '30px',
            // border: 'solid 1px black',
        }
        titleStyle = {
            fontSize: '20px',
            textTransform: 'uppercase',
            marginBottom: '0px',
            width: '70%',
            textAlign: 'right'
        }
        dateStyle = {
            width: '70%',
            // border: 'solid 1px black',
            fontWeight: '300',
            marginBottom: '0px',
            textAlign: 'right'
        }
        subTitleStyle = {
            width: '70%',
            marginTop: '0px',
            fontWeight: '300',
            textAlign: 'right'
        }
        break;
}

const VimeoVideo = ({url}) => {
    const [loaded, setloaded] = useState(false)

    return (
        loaded
            ?
            <ReactPlayer 
                height={videoStyle.height}
                width={videoStyle.width}
                style={videoStyle}
                url={url} 
                />
            :
            <img 
                style={videoStyle} 
                src={loadingplaceholder} 
                onLoad = {() => setloaded(true)}
                alt='laoding-img' 
                />
            )
        
    }

const imgStyle={
    width: (currentDevice === 'mobile')?'100%':'70%',
    alignSelf: 'center',
    margin: (currentDevice === 'mobile')?'15px':'30px',
    marginBottom: '3px'

}

const pageStyle ={
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    pagging: '0%'
}

const mainContent = {
    width: currentDevice==='mobile'?'97%':'70%',
    fontSize: currentDevice==='mobile'?'12pt':'9pt',
    textAlign: 'justify'
}

const citStyle = {
    fontSize: currentDevice==='mobile'?'11pt':'12pt',
    // border: 'solid 1px black',
    width: '70%',
    textAlign: "right"
    
}
const footerStyle ={
    width: '70%',
    // border: 'solid 1px black',
    fontSize: currentDevice==='mobile'?'11pt':'9pt',
    textAlign: 'justify',
    // fontStyle: 'italic'
}

const didaStyle = {
    // border: 'solid 1px black', 
    fontSize: '8pt', 
    width: '70%',
    textAlign: 'right',
    marginTop: '0px'
}

export default (props) => {
    const pageId = props.match.params.id;
    const page = langManager.currentLang.pages.find(p => p.id === pageId);
    const content = page.content;
    console.log(page);
    return <div style={pageStyle}>

        {page.title && 
            <h5 style={titleStyle}>{page.title}</h5>}

        {content.date && 
            <h4 style={dateStyle}>{content.date}</h4>}

        {content.subTitle && 
            <h3 style={subTitleStyle}>{content.subTitle}</h3>}

        {content.images && 
                    <>
                        <img style={imgStyle} src={content.imgAnteprima} alt='anteprima-img-single-page' />
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
                .map((v, i) => <VimeoVideo key={i} url={v} />)}

        {content.images && 
            content.images
                .map((img, i) => (
                    <React.Fragment key={i}>
                        <img style={imgStyle} src={img.img}  alt={img.dida?img.dida:'single-page-img'} />
                        {img.dida && (<i style={didaStyle}>{img.dida}</i>)}
                    </React.Fragment>
                ))}

        {(currentDevice === 'desktop') && <ScrollToTopButton/>}
    </div>
}