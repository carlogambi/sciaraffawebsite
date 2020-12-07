import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import deviceDetector from '../../utility/device-detector';
import loadingplaceholder from './../../utility/loadingimageplaceholder.png'

const currentDevice = deviceDetector();

let videoContainerStyle= {
    alignSelf: 'center',
}
let placeHolderStyle= {
    width: '100%',
    minHeight: '100%'
}
let videoStyle = {}
switch (currentDevice) {
    case 'mobile':
            videoContainerStyle = {
            ...videoContainerStyle, 
                width: '100%',
                height: '230px',
                margin: '15px'
                }
        break;
        
        case 'tablet':
            videoContainerStyle = {
                ...videoContainerStyle, 
                width: '70%',
                height: '300px',
                margin: '3px',
            }
        break;
    default:
            videoContainerStyle ={
                ...videoContainerStyle, 
                width: '70%',
                height: '600px',
                margin: '30px',
            }
        break;
}

const Video = ({url}) => {
    const [loaded, setLoaded] = useState(false)
    videoStyle = {
        display: loaded?'inherit':'none'
    }

    return (<div style={videoContainerStyle}>
            <ReactPlayer 
                height='100%'
                width='100%'
                style={videoStyle}
                url={url} 
                onReady={() => {
                    console.log('video ready')
                    setLoaded(true)
                }}
                />
            {!loaded && (<img 
                style={placeHolderStyle} 
                src={loadingplaceholder} 
                alt='laoding-img' 
                />)}
            </div>
            )
        
    }

    export default Video