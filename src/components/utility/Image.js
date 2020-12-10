import React, { useState } from 'react'
import placeHolderGif from './../utility/placeholder.gif'
// import loadingplaceholder from './../utility/loadingimageplaceholder.png'

const Image =({src, style, alt}) => {

    const [isLoad, setisLoad] = useState(false)
    return <img 
            style={style} 
            src={isLoad?src:placeHolderGif} 
            onLoad = {() => setisLoad(true)}
            alt={alt?alt:'img'} 
            />
}

export default Image