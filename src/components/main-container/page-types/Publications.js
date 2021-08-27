import React from 'react';
import styled from 'styled-components';

const PubblicationContainer = styled.div`
  border-left: solid 1px black;
  padding-left: 50px;
  width: 300px;
  text-align: left;
  line-height: 3px;
  margin: 15px;
  padding-bottom: 10px;
`;

const Publication = ({ info }) => {
  return (
    <PubblicationContainer>
      {info.title ? <h4>{info.title}</h4> : null}
      {info.author ? <h5>{info.author}</h5> : null}
      {info.magazine ? (
        <p>
          <i>{info.magazine}</i>
        </p>
      ) : null}
      {info.link ? (
        <a href={info.link} target='blank'>
          {info.link}
        </a>
      ) : null}
    </PubblicationContainer>
  );
};

const PublicationsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Publications = ({ langPack }) => {
  let page = langPack.content;
  page = [...page, ...page, ...page];
  console.log(page);
  return (
    <div>
      {langPack.title ? (
        <h1 style={{ marginBottom: '100px' }}>{langPack.title}</h1>
      ) : null}
      <PublicationsContainer>
        {page ? page.map((p, i) => <Publication info={p} key={i} />) : null}
      </PublicationsContainer>
    </div>
  );
};
export default Publications;
