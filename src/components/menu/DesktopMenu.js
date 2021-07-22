import React from 'react';
import LangMenu from './components/lang-menu';
import MainMenu from './components/main-menu';
import deviceDetector from './../../components/utility/device-detector';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const currentDevice = deviceDetector();

const DesktopMenu = styled.header`
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
  margin-top: 20px;
`;

const TitleContainerStyle = styled.div``;

const TitleText = styled.span`
  font-size: 20pt;
  text-transform: uppercase;
  letter-spacing: 15px;
  font-weight: 400;
  cursor: pointer;
  margin: 0px;
  display: flex;
  width: 100%;
`;
//titolo da centrare

const linkStyle = {
  textDecoration: 'unset',
  color: 'unset',
};

const Title = () => (
  <Link style={linkStyle} to='/'>
    <TitleText>Alessandro Sciaraffa</TitleText>
  </Link>
);

const MenuContainer = ({ langPack }) => {
  return (
    <DesktopMenu>
      <TitleContainerStyle>
        {currentDevice === 'desktop' && <Title />}
        <MainMenu langPack={langPack} />
      </TitleContainerStyle>
      <LangMenu langPack={langPack} />
    </DesktopMenu>
  );
};

export default MenuContainer;
