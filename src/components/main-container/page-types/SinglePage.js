import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import langManager from '../../../lang-packs/lang-manager';
import deviceDetector from '../../utility/device-detector';
import Audio from '../page-components/Audio';
import loadingplaceholder from './../../utility/loadingimageplaceholder.png'




const currentDevice = deviceDetector();

let audioStyle, 
    videoStyle = {}

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
            height: '500px',
            margin: '30px'
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
    margin: (currentDevice === 'mobile')?'15px':'30px'

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
    fontSize: currentDevice==='mobile'?'12pt':'16pt',
}

const citStyle = {
    width: '60%',
    fontSize: currentDevice==='mobile'?'11pt':'18pt'
}
const footerStyle ={
    width: '60%',
    fontSize: currentDevice==='mobile'?'11pt':'18pt'
}

export default (props) => {
    const pageId = props.match.params.id;
    const page = langManager.currentLang.pages.find(p => p.id === pageId);
    const content = page.content;
    console.log(page);
    return <div style={pageStyle}>

        {page.title && 
            <h1>{page.title}</h1>}

        {content.date && 
            <h4>{content.date}</h4>}

        {content.subTitle && 
            <h3>{content.subTitle}</h3>}

        {content.images && 
            <img style={imgStyle} src={content.images[0]} alt='main-img' />}

        {content.audios && 
            content.audios
                .map((v, i) => <Audio key={i} url={v} style={audioStyle}/>)}

        {content.cit && 
            <p style={citStyle}><i>{content.cit.text}</i><br/>{content.cit.author}</p>}

        {content.mainContent && 
            <p style={mainContent}>{content.mainContent}</p>}

        {content.footer && 
            <p style={footerStyle}><i>{content.footer}</i></p>}

        {content.videos && 
            content.videos
                .map((v, i) => <VimeoVideo key={i} url={v} />)}

        {content.images && 
            content.images
                .map((img, i) => <img style={imgStyle} src={img} key={i} alt='main-img' />)}

        {}
    </div>
}