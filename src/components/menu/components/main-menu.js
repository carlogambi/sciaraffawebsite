import React from 'react';
import { Link } from 'react-router-dom';
import deviceDetector from '../../utility/device-detector';
import styled, { css } from 'styled-components';
const currentDevice = deviceDetector();

let linkStyle;
let Title;
let MainMenuContainer;

switch (currentDevice) {
  case 'tablet':
    linkStyle = {
      textDecoration: 'none',
      color: 'black',
      textAlign: 'left',
    };
    Title = css`
      padding-left: 30px;
      font-size: 25pt;
      font-weight: 500;
      text-transform: uppercase;
      margin: 20px;
    `;
    break;
  case 'mobile':
    linkStyle = {
      textDecoration: 'none',
      color: 'black',
      textAlign: 'left',
    };
    Title = css`
      padding-left: 30px;
      font-size: 20pt;
      font-weight: 400;
      text-transform: uppercase;
      margin: 0px;
    `;
    break;
  case 'desktop':
    linkStyle = {
      textDecoration: 'none',
      color: 'black',
      textAlign: 'left',
    };

    Title = css`
      font-size: 18px;
      font-weight: 300;
    `;

    MainMenuContainer = css`
      display: flex;
      justify-content: space-between;
      width: 98%;
      flex-wrap: wrap;
      text-transform: uppercase;
    `;
    break;

  default:
    break;
}

Title = styled.h1`
  ${Title}
`;
MainMenuContainer = styled.div`
  ${MainMenuContainer}
`;

const MainMenu = (props) => {
  return (
    <MainMenuContainer>
      {props.langPack.pages
        .filter((page) => page.tags.includes('mainmenu'))
        .map((p, i) => (
          <Link to={`../mainpage${p.id}`} style={linkStyle} key={i}>
            <Title
              onClick={() =>
                (currentDevice === 'mobile' || currentDevice === 'tablet') &&
                props.setOpen(false)
              }
            >
              {p.title}
            </Title>
          </Link>
        ))}
    </MainMenuContainer>
  );
};

export default MainMenu;
