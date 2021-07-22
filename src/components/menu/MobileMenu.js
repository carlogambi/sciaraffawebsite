import React, { useState } from 'react';
import LangMenu from './components/lang-menu';
import MainMenu from './components/main-menu';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuContainerWrapper = styled.div`
  position: fixed;
  top: 10%;
  transition: left 1s;
  width: 100%;
  background-color: white;
  z-index: 10;
  font-weight: 300;
  left: ${({ open }) => (open ? '0px' : '100%')};
`;

const MenuContainer = ({ langPack, open, setOpen }) => {
  return (
    <MenuContainerWrapper open={open}>
      <LangMenu langPack={langPack} />
      <MainMenu langPack={langPack} setOpen={(oc) => setOpen(oc)} open={open} />
    </MenuContainerWrapper>
  );
};

const Button = styled.div`
  position: fixed;
  top: 0.2%;
  right: 10px;
  font-size: 30pt;
  border-radius: 100%;
  min-height: 60px;
  max-height: 60px;
  width: 60px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
  font-weight: 800;
`;

const ToggleButton = ({ openClose, open, text }) => (
  <Button onClick={() => openClose(!open)}>{text}</Button>
);

const Title = styled.h2`
  text-align: left;
  padding-left: 3px;
  width: fit-content;
  max-width: 80%;
  font-weight: 500;
`;

const MobileMenu = (props) => {
  const [open, setOpen] = useState(false);
  const bttnTxt = open ? '>' : '=';

  return (
    <React.Fragment>
      <Link
        to='/'
        style={{ textDecoration: 'none', color: 'black', textAlign: 'left' }}
      >
        <Title>{'alessandro sciaraffa'.toUpperCase()}</Title>
      </Link>
      <ToggleButton
        text={bttnTxt}
        openClose={(state) => setOpen(state)}
        open={open}
      />
      <MenuContainer
        langPack={props.langPack}
        open={open}
        setOpen={(oc) => setOpen(oc)}
      />
    </React.Fragment>
  );
};
export default MobileMenu;
