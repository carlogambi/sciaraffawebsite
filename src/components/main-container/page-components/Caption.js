import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import loadingPlaceHolder from './../../utility/placeholder.gif';
import deviceDetector from '../../utility/device-detector';

import styled, { css } from 'styled-components';

const currentDevice = deviceDetector();

export const linkStyle = css`
  text-decoration: none;
  position: relative;
  color: unset;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 3px;
  font-size: 14pt;
  border-right: ${currentDevice === 'mobile' ? '100px' : 'unset'};
`;

let captionStyle = css`
  width: ${currentDevice === 'mobile' ? '150px' : '300px'};
  min-height: ${currentDevice === 'mobile' ? '200px' : '150px'};
  max-height: ${currentDevice === 'mobile' ? '200px' : '150px'};
  background-size: ${currentDevice === 'mobile' ? '300%' : '200%'};
  background-position: center center;
  margin: 10px;
`;

export let captionTextContainerStyle = css`
  margin: 10px;
  background-color: #ffffff73;
  position: absolute;
  padding-top: ${currentDevice === 'mobile' ? 'unset' : '55px'};
  padding-left: ${currentDevice === 'mobile' ? 'unset' : '10px'};
  padding-right: ${currentDevice === 'mobile' ? 'unset' : '10px'};
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  font-size: 5pt;
  max-width: 300px;
`;

export const Caption = ({ data }) => {
  const [hover, setHover] = useState(false);
  const [imgLoad, setImgLoad] = useState(false);

  const captionImg = new Image(100, 100);
  captionImg.src = data.content.imgAnteprima;
  captionImg.onload = () => setImgLoad(true);

  const CaptionContainer = styled.div`
    ${captionStyle}
    background-image: url(${imgLoad ? captionImg.src : loadingPlaceHolder});
    // opacity: hover?'0.3':'1.0'
  `;
  const CaptionTextContainer = styled.div`
    ${captionTextContainerStyle}
    transition: opacity 0.5s;
    opacity: ${hover ? '1' : '0'};
  `;
  const CustomLink = styled(Link)`
    ${linkStyle}
  `;
  return (
    <CustomLink to={`../singlePage${data.id}`}>
      <CaptionContainer
        onMouseEnter={() => setHover(true)}
        onTouchStart={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onTouchEnd={() => setHover(false)}
      >
        {
          // hover&&
          <CaptionTextContainer>
            <h1>{data.title}</h1>
            <h3>{data.content.subTitle}</h3>
          </CaptionTextContainer>
        }
      </CaptionContainer>
    </CustomLink>
  );
};

export default Caption;
