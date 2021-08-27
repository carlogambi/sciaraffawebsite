import React from 'react';
import Image from './../../utility/Image';

import deviceDetector from '../../utility/device-detector';
import styled, { css } from 'styled-components';

const currentDevice = deviceDetector();

let bioPageStyle = css`
  width: '100%';
  display: 'flex';
  justify-content: 'space-around';
  flex-wrap: 'wrap';
`;
const imgContainer = css`
  margin: 20px;
  width: fit-content;
`;
let textContainer = css`
  ${imgContainer}
  border: solid 1px black;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
`;

let imgStyle = {};

switch (currentDevice) {
  case 'mobile':
    bioPageStyle = css`
      ${bioPageStyle}
      flex-direction: 'column';
      align-items: 'center';
    `;
    textContainer = css`
      ${textContainer}
      width: 85%;
      padding: 5px;
    `;
    imgStyle = {
      width: '100%',
    };
    break;

  case 'tablet':
    bioPageStyle = css`
      ${bioPageStyle}
      flex-direction: column;
      align-items: center;
    `;
    textContainer = css`
      ${textContainer}
      width: 80%;
      padding: 10px;
    `;
    imgStyle = {
      width: '100%',
    };
    break;

  default:
    bioPageStyle = css`
      ${bioPageStyle}
      flex-direction: row;
    `;
    textContainer = css`
      ${textContainer}
      width: 600px;
      padding: 10px;
    `;
    imgStyle = {
      width: '700px',
    };
    break;
}

const BioPage = styled.div`
  ${bioPageStyle}
`;
const Img = styled.div`
  ${imgContainer}
`;
const TextContainer = styled.div`
  ${textContainer}
`;
const SubTitle = styled.h1`
  width: fit-content;
  font-weight: 500;
  letter-spacing: 10px;
`;
const MainContent = styled.p`
  font-weight: 400;
  width: fit-content;
`;
const Footer = styled.p`
  font-weight: 300;
  font-style: italic;
  width: fit-content;
`;

const Bio = ({ langPack }) => {
  const page = langPack.content;
  const images = page.images.map((img, i) => (
    <Image src={img} style={imgStyle} key={i} />
  ));

  return (
    <BioPage>
      <Img>{images}</Img>
      <TextContainer>
        {page.subTitle && <SubTitle>{page.subTitle}</SubTitle>}
        {page.mainContent && <MainContent>{page.mainContent}</MainContent>}
        {page.footer && <Footer>{page.footer}</Footer>}
      </TextContainer>
    </BioPage>
  );
};
export default Bio;
