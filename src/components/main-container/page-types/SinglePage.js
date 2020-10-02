import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import langManager from '../../../lang-packs/lang-manager';
import deviceDetector from '../../utility/device-detector';
import loadingplaceholder from './../../utility/loadingimageplaceholder.png'

const audioStyle = {
    margin: '10px',
    alignSelf: 'center'
}

const Audio = ({url}) => <ReactPlayer style={audioStyle} width='70%' height='150px' url={url}/>;

let videoStyle = {
    alignSelf: 'center',
    width: '70%',
    height: '500px',
    margin: '30px'
}
if(deviceDetector() === 'mobile'){
    videoStyle = null;
    videoStyle = {
        alignSelf: 'center',
        width: '90%',
        height: '170px',
        margin: '30px'
    }
}
const VimeoVideo = ({url}) => {
    const [loaded, setloaded] = useState(false)

    return <React.Fragment>
        {loaded?<ReactPlayer 
                height={videoStyle.height} 
                width={videoStyle.width} 
                style={videoStyle} url={url} 
                
                />:<img 
                style={videoStyle} 
                src={loadingplaceholder} 
                onLoad = {() => setloaded(true)}
                alt='laoding-img' 
                />}
        </React.Fragment>
            }

const imgStyle={
    width: '70%',
    alignSelf: 'center',
    margin: '30px'

}

const pageStyle ={
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%'
}

export default (props) => {
    const pageId = props.match.params.id;
    const page = langManager.currentLang.pages.find(p => p.id === pageId);
    const content = page.content;
    console.log(page);
    return <div style={pageStyle}>
        {page.title?<h1>{page.title}</h1>:null}
        {content.subTitle?<h3>{content.subTitle}</h3>:null}
        {content.images?<img style={imgStyle} src={content.images[0]} alt='main-img' />:null}
        {content.audios?content.audios.map((v, i) => <Audio key={i} url={v} />):null}
        {content.mainContent?<p>{content.mainContent}</p>:null}
        {content.footer?<p><i>{content.footer}</i></p>:null}
        {content.videos?content.videos.map((v, i) => <VimeoVideo key={i} url={v} />):null}
        {content.images?content.images.map((img, i) => <img style={imgStyle} src={img} key={i} alt='main-img' />):null}
        {}
    </div>
}