import React from 'react';

import { Link } from 'react-router-dom';
import { currentLang } from '../../../lang-packs/lang-manager';
import deviceDetector from '../../utility/device-detector';
import Caption, { linkStyle } from './../page-components/Caption';

import styled, { css } from 'styled-components';

const currentDevice = deviceDetector();

let captionListStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

let subTagStyle = css`
  ${linkStyle}
  cursor: pointer;
`;

let subTaglistStyle = css`
  display: flex;
  flex-wrap: wrap;
  line-height: 40px;
  height: fit-content;
`;

let mainContainerStyle = css`
  display: flex;
  align-items: top;
  justify-content: space-between;
  width: 100%;
`;

let titleStyle = css`
  text-transform: uppercase;
  font-size: 18pt;
  font-weight: 700;
`;

let subTagMainContainerStyle = css`
  display: flex;
  justify-content: center;
`;

let subTagPageStyle = css`
  ${captionListStyle}
`;

switch (currentDevice) {
  case 'mobile':
    subTagStyle = css`
      ${subTagStyle}
      text-align:left;
      margin: 20px;
      margin-bottom: 0px;
      margin-top: 0px;
    `;
    subTaglistStyle = css`
      ${subTaglistStyle}
      border-right:solid 1px white;
      width: 100%;
      flex-direction: row;
      align-content: center;
      justify-content: center;
      align-self: left;
      padding-right: 0px;
    `;
    mainContainerStyle = css`
      ${mainContainerStyle}
      flex-direction:column;
      margin-top: 0px;
    `;
    titleStyle = css`
      ${titleStyle}
      text-align:center;
      padding-left: 0%;
      width: 100%;
      letter-spacing: 5px;
    `;
    captionListStyle = css`
      ${captionListStyle}
      max-width:100%;
      min-width: 100%;
    `;
    subTagPageStyle = css`
      ${subTagPageStyle}
      min-width:100%;
      justify-content: center;
    `;
    break;
  case 'tablet':
    titleStyle = css`
      ${titleStyle}
      text-align:center;
      width: 100%;
      font-size: 30pt;
      font-weight: 500;
      letter-spacing: 15px;
      min-width: 100%;
      justify-content: center;
    `;
    subTagStyle = css`
      ${subTagStyle}
      font-size:15pt;
      padding-right: 15px;
      padding-left: 15px;
    `;
    mainContainerStyle = css`
      ${mainContainerStyle}
      flex-direction:column;
      margin-top: 0px;
      align-items: center;
    `;
    break;

  default:
    subTagStyle = css`
      ${subTagStyle}
      text-align: center;
    `;
    subTaglistStyle = css`
      ${subTaglistStyle}
      border-right:solid 1px black;
      width: 17%;
      flex-direction: column;
      align-content: flex-end;
      padding-right: 20px;
    `;
    mainContainerStyle = css`
      ${mainContainerStyle}
      flex-direction:row;
      margin-top: 80px;
    `;
    titleStyle = css`
      ${titleStyle}
      text-align: left;
      padding-left: 30%;
      letter-spacing: 20px;
    `;
    captionListStyle = css`
      ${captionListStyle}
      text-align:left;
      padding-left: 30%;
      letter-spacing: 20px;
    `;
    subTagPageStyle = css`
      ${subTagPageStyle}
      min-width: 70%;
    `;
    break;
}

export { captionListStyle };

const CustomLink = styled(Link)`
  ${subTagStyle}
`;

const SubTag = ({ tag }) => {
  const target = window.location.pathname.replace('mainpage', '');
  const link = `subTagAggregator${tag}${target}`;
  return <CustomLink to={link}>{tag}</CustomLink>;
};

const SubTagListContainer = styled.div`
  ${subTaglistStyle}
`;

const SubTagList = ({ data }) => {
  const list = data.langPack.tagReference.find(
    (mt) => mt.mainTagName === data.id
  ).subtags;
  return (
    <SubTagListContainer>
      {list.map((st, i) => (
        <SubTag tag={st} key={i} />
      ))}
    </SubTagListContainer>
  );
};

const SubTagCaptionListContainer = styled.div`
  ${(props) => (props.match ? subTagPageStyle : captionListStyle)}
`;

const LevellerMainContainer = styled.div`
  ${(props) => (props.match ? subTagMainContainerStyle : mainContainerStyle)}
`;

const Title = styled.h1`
  ${titleStyle}
`;

const PageLeveller = (props) => {
  const mainTagsList = () =>
    props.langPack.pages.filter((p) => p.tags.includes(props.id));
  const subTagList = () => {
    let pages = currentLang.pages.filter((p) => p.subtags);
    pages = pages.filter((p) => {
      return p.subtags.includes(props.match.params.tag);
    });
    return pages;
  };
  const pageList = props.match ? subTagList() : mainTagsList();

  return (
    <div style={{ width: '100%' }}>
      {props.match && (
        <Title>
          <span
            style={{ cursor: 'pointer', fontWeight: '300' }}
            onClick={() => props.history.goBack()}
          >
            {props.match.params.prev}/
          </span>
          {currentDevice === 'mobile' && <br />}
          {props.match.params.tag}
        </Title>
      )}
      {props.id && <Title style={{ marginTop: '0px' }}>{props.id}</Title>}
      <LevellerMainContainer>
        {!props.match && <SubTagList data={props} />}
        <SubTagCaptionListContainer {...props}>
          {pageList.map((p, i) => (
            <Caption data={p} key={i} />
          ))}
        </SubTagCaptionListContainer>
      </LevellerMainContainer>
    </div>
  );
};

export default PageLeveller;
