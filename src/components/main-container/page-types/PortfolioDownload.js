import React, { useState } from 'react';
import deviceDetector from '../../utility/device-detector';
import Image from './../../utility/Image';
import styled, { css } from 'styled-components';

const Button = styled.span`
  border: solid 1px black;
  padding: 3px;
  margin: 20px;
  cursor: pointer;
`;
const Input = styled.input`
  margin: 20px;
`;
const DownloadButton = styled.a`
  text-decoration: none;
  color: black;
  border: solid 1px black;
  padding: 3px;
  cursor: pointer;
`;
const DownloadContainer = styled.div`
  margin: 50px;
`;
const Error = styled.span`
  color: red;
`;
const imgStyle = css`
  width: ${deviceDetector() === 'desktop' ? '40%' : '70%'};
`;

const Psswgate = (props) => {
  const [inputvalue, setinputValue] = useState('');
  const [firstTry, setFirstTry] = useState(true);
  const errText = '!WRONG PASSWORD!';
  return (
    <div>
      {firstTry ? null : <Error>{errText}</Error>}
      <Input type='password' onChange={(e) => setinputValue(e.target.value)} />
      {firstTry ? null : <Error>{errText}</Error>}
      <br />
      <Button
        onClick={() => {
          props.setPsswCorrect(inputvalue);
          setFirstTry(false);
        }}
      >
        {props.info.psswButtonText}
      </Button>
    </div>
  );
};

const Download = ({ info }) => {
  return (
    <DownloadContainer>
      <DownloadButton href={info.url} download>
        {info.buttonText}
      </DownloadButton>
    </DownloadContainer>
  );
};

const PortfolioDownload = ({ langPack }) => {
  const info = langPack.content;
  const psswList = info.password;
  const [psswCorrect, setPsswCorrect] = useState(false);

  return (
    <div>
      <h1>portfolio download</h1>
      {info.image ? (
        <Image src={info.image} alt='dwnld-img' style={imgStyle} />
      ) : null}
      {psswCorrect ? (
        <Download info={info} />
      ) : (
        <Psswgate
          info={info}
          setPsswCorrect={(pssw) =>
            psswList.includes(pssw)
              ? setPsswCorrect(true)
              : setPsswCorrect(false)
          }
        />
      )}
      <br />
      correct passwords:{' '}
      {psswList.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
};

export default PortfolioDownload;
