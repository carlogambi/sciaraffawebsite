import React, { useState } from 'react'
import loadingplaceholder from './../utility/loadingimageplaceholder.png'

export default ({img, style, alt}) => {

    const [isLoad, setisLoad] = useState(false)
    console.log(isLoad);
    return <img 
            style={style} 
            src={isLoad?`/${img}`:loadingplaceholder} 
            onLoad = {() => setisLoad(true)}
            alt={alt?alt:'img'} 
            />
}