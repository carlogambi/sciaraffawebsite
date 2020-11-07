import React from 'react'
import ReactPlayer from 'react-player';

const Audio = ({url, style}) => 
    <ReactPlayer 
    style={style} 
    width='70%' 
    height='150px' 
    url={url}
    />;

export default Audio
