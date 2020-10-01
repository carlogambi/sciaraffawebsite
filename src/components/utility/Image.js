import React, { useState } from 'react'
import loadingplaceholder from './../utility/loadingimageplaceholder.png'

export default ({src, style, alt}) => {

    const [isLoad, setisLoad] = useState(false)
    console.log(isLoad);
    return <img 
            style={style} 
            src={isLoad?src:loadingplaceholder} 
            onLoad = {() => setisLoad(true)}
            alt={alt?alt:'img'} 
            />
}