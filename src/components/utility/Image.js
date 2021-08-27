import React, { useState } from 'react';
import placeHolderGif from './../utility/placeholder.gif';
// import loadingplaceholder from './../utility/loadingimageplaceholder.png'
import styled from 'styled-components';
const Image = ({ src, style, alt }) => {
  const [isLoad, setisLoad] = useState(false);
  const Img = styled.img`
    ${style && style}
  `;
  return (
    <Img
      src={isLoad ? src : placeHolderGif}
      onLoad={() => setisLoad(true)}
      alt={alt ? alt : 'img'}
    />
  );
};

export default Image;
