import React from 'react';
import changeLang from '../../../custom-events/change-lang';
import deviceDetector from '../../utility/device-detector';
import { langNameList, currentLang } from './../../../lang-packs/lang-manager';
import styled, { css } from 'styled-components';

const currentDevice = deviceDetector();

const CurrentLangButton = styled.span`
  background-color: black;
  color: white;
  padding: 10px;
  text-transform: uppercase;
  cursor: none;
  width: fit-content;
  margin: ${currentDevice === 'desktop' ? '10px' : 'unset'};
`;

const LangButton = styled.span`
  background-color: white;
  padding: 10px;
  cursor: pointer;
  width: fit-content;
  margin: ${currentDevice === 'desktop' ? '10px' : 'unset'};
`;

let LangMenuContainer;
switch (currentDevice) {
  case 'mobile':
    LangMenuContainer = css`
      margin: 20px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    `;
    break;
  case 'desktop':
    // margin: '30px',
    // border: 'solid 1px black',
    LangMenuContainer = css`
      display: flex;
      justify-content: space-between;
      width: fit-content;
      height: 60px;
    `;
    break;
  default:
    break;
}

LangMenuContainer = styled.div`
  ${LangMenuContainer}
`;

const LangMenu = () => {
  return langNameList.length > 1 ? (
    <LangMenuContainer>
      {langNameList.map((ln, i) =>
        ln === currentLang.name ? (
          <CurrentLangButton key={i}>{ln}</CurrentLangButton>
        ) : (
          <LangButton onClick={() => changeLang.trigger(ln)} key={i}>
            {ln}
          </LangButton>
        )
      )}
    </LangMenuContainer>
  ) : (
    <></>
  );
};
export default LangMenu;
