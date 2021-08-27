import React from 'react';
import Image from './../../utility/Image';
import deviceDetector from '../../utility/device-detector';
import styled, { css } from 'styled-components';

const currentDevice = deviceDetector();

let imgStyle = {};

let MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8%;
`;
let ContactsContainer = styled.div`
  // border: 'solid 1px black',
  width: 90%;
`;

let contactStyle = css`
  border-bottom: solid 1px black;
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding-top: 40px;
  flex-wrap: wrap;
  padding-bottom: 10px;
`;

let contactItemStyle = {};

let contactLinkStyle = css`
  all: unset;
  cursor: pointer;
`;

switch (currentDevice) {
  case 'mobile':
    imgStyle = css`
      ${imgStyle}
      width: 100%;
    `;
    contactStyle = css`
      ${contactStyle}
      max-width:100%;
      flex-direction: column;
      align-items: center;
    `;
    contactItemStyle = css`
      ${contactItemStyle}
      margin: 5px;
    `;
    break;
  case 'tablet':
    break;

  default:
    imgStyle = css`
      ${imgStyle}
      width: 400px;
    `;
    contactStyle = css`
      ${contactStyle}
      max-width:100%;
      flex-direction: row;
      align-items: baseline;
    `;
    contactItemStyle = css`
      ${contactItemStyle}
      // margin:'20px',
      width: 300px;
      // border: solid 1px black;
      text-align: left;
    `;
    break;
}

const ContactContainer = styled.div`
  ${contactStyle}
`;

const ContactTitle = styled.h3`
  ${contactItemStyle}
`;

const ContactRole = styled.p`
  ${contactItemStyle}
`;

const ContactPhone = styled.a`
  ${contactItemStyle}
  ${contactLinkStyle}
`;

const ContactMail = styled.h5`
  ${{ contactItemStyle }}
`;

const Contact = ({ info }) => {
  return (
    <ContactContainer>
      {info.name && <ContactTitle>{info.name}</ContactTitle>}
      {info.role && (
        <ContactRole>
          <i>{info.role}</i>
        </ContactRole>
      )}
      {info.mail && <ContactMail>{info.mail}</ContactMail>}
      {/* al momento info.phone in realta contiene l'email >:\ */}
      {info.phone && (
        <ContactPhone href={info.phone} target='blank'>
          {info.phone.replace(/(http:\/\/www.)|(https:\/\/www.)|\//g, '')}
        </ContactPhone>
      )}
    </ContactContainer>
  );
};

const Contacts = ({ langPack }) => {
  const page = langPack.content;

  const contactsList = page.contacts.map((c, i) => (
    <Contact info={c} key={i} />
  ));

  return (
    <MainContent>
      {langPack.title && <h1>{langPack.title.toUpperCase()}</h1>}
      {page.mainContent && <MainContent>{page.mainContent}</MainContent>}
      {page.image && (
        <Image style={imgStyle} src={`/${page.image}`} alt='contacts-img' />
      )}
      {page.spaceInfo && (
        <div>
          <h4>{page.spaceInfo.name}</h4>
          {page.spaceInfo.address}
        </div>
      )}
      <ContactsContainer>{contactsList}</ContactsContainer>
    </MainContent>
  );
};
export default Contacts;
