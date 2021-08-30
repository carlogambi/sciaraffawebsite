import React, { useState } from "react";
import ReactPlayer from "react-player";
import deviceDetector from "../../utility/device-detector";
// import loadingplaceholder from "./../../utility/loadingimageplaceholder.png";
import loadingplaceholderGif from "./../../utility/placeholder.gif";
import styled, { css } from "styled-components";
const currentDevice = deviceDetector();

let videoContainerStyle = css`
  align-self: center;
`;
let PlaceHolder = styled.img`
  width: 100%;
  min-height: 100%; ;
`;
switch (currentDevice) {
  case "mobile":
    videoContainerStyle = css`
      ${videoContainerStyle}
      width:100%;
      height: 230px;
      margin: 15px;
    `;
    break;

  case "tablet":
    videoContainerStyle = css`
      ${videoContainerStyle}
      width:70%;
      height: 300px;
      margin: 3px;
    `;
    break;
  default:
    videoContainerStyle = css`
      ${videoContainerStyle}
      width:70%;
      height: 600px;
      margin: 30px;
    `;
    break;
}

const VideoContainer = styled.div`
  ${videoContainerStyle}
`;

const Video = ({ url }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <VideoContainer>
      <ReactPlayer
        height="100%"
        width="100%"
        style={loaded ? "inherit" : "none"}
        url={url}
        onReady={() => setLoaded(true)}
      />
      {!loaded && (
        <PlaceHolder
          src={loadingplaceholderGif}
          alt="laoding-img"
        />
      )}
    </VideoContainer>
  );
};

export default Video;
