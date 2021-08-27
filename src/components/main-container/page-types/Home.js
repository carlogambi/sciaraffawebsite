import React from 'react';
import deviceDetector from '../../utility/device-detector';
import { captionListStyle } from './PageLeveller';
import Caption from './../page-components/Caption';
import { currentLang } from './../../../lang-packs/lang-manager';
import styled, { css } from 'styled-components';
const currentDevice = deviceDetector();

let style = css`
  ${captionListStyle}
  justify-content: center;
`;
switch (currentDevice) {
  case 'tablet':
    style = css`
      ${style}
      min-width: 100%;
    `;
    break;
  case 'mobile':
    style = css`
      ${style}
      width: 100%;
    `;
    break;
  default:
    style = css`
      ${style}
      min-width: 75%;
      width: 100px;
    `;
}

const MainContainer = styled.div`
  ${style}
`;
const Home = () => {
  const pages = currentLang.pages.filter((p) => !p.tags.includes('mainmenu'));
  return (
    <MainContainer align='center'>
      {pages.map((p, i) => (
        <Caption data={p} key={i} />
      ))}
    </MainContainer>
  );
};
export default Home;
