import React, { useState } from 'react'
import loadingplaceholder from './../utility/loadingimageplaceholder.png'

const Image =({src, style, alt}) => {

    const [isLoad, setisLoad] = useState(false)
    return <img 
            style={style} 
            src={isLoad?src:loadingplaceholder} 
            onLoad = {() => setisLoad(true)}
            alt={alt?alt:'img'} 
            />
}

export default Image