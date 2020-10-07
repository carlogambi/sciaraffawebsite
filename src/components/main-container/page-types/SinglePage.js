import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import langManager from '../../../lang-packs/lang-manager';
import deviceDetector from '../../utility/device-detector';
import loadingplaceholder from './../../utility/loadingimageplaceholder.png'

const currentDevice = deviceDetector();

let audioStyle = {
    margin: '10px',
    alignSelf: 'center',
    width: "70%"
}
if(currentDevice === 'mobile'){
    audioStyle = null;
    audioStyle={
        minWidth: '100%',
        margin: '10px'
    }

}

const Audio = ({url}) => 
    <ReactPlayer 
    style={audioStyle} 
    width='70%' 
    height='150px' 
    url={url}
    />;

let videoStyle = {
    alignSelf: 'center',
    width: '70%',
    height: '500px',
    margin: '30px'
}
if(currentDevice === 'mobile'){
    videoStyle = null;
    videoStyle = {
        alignSelf: 'center',
        width: '100%',
        height: '230px',
        margin: '15px'
    }
}
const VimeoVideo = ({url}) => {
    const [loaded, setloaded] = useState(false)

    return <React.Fragment>
        {loaded?<ReactPlayer 
                height={videoStyle.height} 
                width={videoStyle.width} 
                style={videoStyle} 
                url={url} 
                
                />:<img 
                style={videoStyle} 
                src={loadingplaceholder} 
                onLoad = {() => setloaded(true)}
                alt='laoding-img' 
                />}
        </React.Fragment>
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
    width: '60%',
    fontSize:'16pt'
}

const citStyle = {
    width: '60%',
    fontSize: '18pt'
}
const footerStyle ={
    width: '60%',
    fontSize: '16pt'
}

export default (props) => {
    const pageId = props.match.params.id;
    const page = langManager.currentLang.pages.find(p => p.id === pageId);
    const content = page.content;
    console.log(page);
    return <div style={pageStyle}>
        {page.title?<h1>{page.title}</h1>:null}
        {content.date?<h4>{content.date}</h4>:null}
        {content.subTitle?<h3>{content.subTitle}</h3>:null}
        {content.images?<img style={imgStyle} src={content.images[0]} alt='main-img' />:null}
        {content.audios?content.audios.map((v, i) => <Audio key={i} url={v} />):null}
        {content.cit?<p style={citStyle}><i>{content.cit.text}</i><br/>{content.cit.author}</p>:null}
        {content.mainContent?<p style={mainContent}>{content.mainContent}</p>:null}
        {content.footer?<p style={footerStyle}><i>{content.footer}</i></p>:null}
        {content.videos?content.videos.map((v, i) => <VimeoVideo key={i} url={v} />):null}
        {content.images?content.images.map((img, i) => <img style={imgStyle} src={img} key={i} alt='main-img' />):null}
        {}
    </div>
}