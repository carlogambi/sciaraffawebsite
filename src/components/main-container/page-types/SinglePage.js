import React from "react";
import langManager from "../../../lang-packs/lang-manager";
import deviceDetector from "../../utility/device-detector";
import Audio from "../page-components/Audio";
import ScrollToTopButton from "../page-components/ScrollToTopButton";
import Text from "../page-components/Text";
import Video from "../page-components/Video";
import Image from "./../../utility/Image";
import styled, { css } from "styled-components";
const currentDevice = deviceDetector();

let audioStyle = css`
  margin: 10px;
`;
let titleStyle = css`
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 0px;
  width: 70%;
  text-align: right;
`;

let imgStyle = css`
  align-self: center;
  margin-bottom: 3px;
`;



let mainContent = css`
  text-align: justify;
`;

let citStyle = css`
  width: 70%;
  text-align: right;
`;

let footerStyle = css`
  text-align: justify;
`;


switch (currentDevice) {
  case "mobile":
    audioStyle = css`
      ${audioStyle}
      min-width: 100%;
    `;

    mainContent = css`
      ${mainContent}
      width: 83%;
      font-size: 12pt;
    `;

    citStyle = css`
      ${citStyle}
      font-size: 11pt;
    `;

    footerStyle = css`
      ${footerStyle}
      width: 83%;
      font-size: 11pt;
    `;

    imgStyle = css`
      ${imgStyle}
      width: 100%;
      margin: 15px;
    `;

    break;

  default:
    //desktop
    audioStyle = css`
      ${audioStyle}
      align-self: center;
      width: 70%;
    `;

    mainContent = css`
      ${mainContent}
      width: 70%;
      font-size: 9pt;
    `;

    citStyle = css`
      ${citStyle}
      font-size: 12pt;
    `;

    footerStyle = css`
      ${footerStyle}
      width: 70%;
      font-size: 9pt;
    `;

    imgStyle = css`
      ${imgStyle}
      width: 70%;
      margin: 30px;
    `;

    break;
}

const DateContainer = styled.h4`
  width: 70%;
  font-weight: 300;
  margin-bottom: 0px;
  text-align: right;
`;

const Title = styled.h5`
  ${titleStyle}
`;

const SubTitle = styled.h3`
  width: 70%;
  margin-top: 0px;
  font-weight: 300;
  text-align: right;
`;

const Cit = styled.p`
  ${citStyle}
`;

const MainContent = styled.p`
  ${mainContent}
`;

const Footer = styled.p`
  ${footerStyle}
`;

const StyledAudio = styled(Audio)`
  ${audioStyle}
`;

const StyledImg = styled(Image)`
  ${imgStyle}
`;

let Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0%;
`;


let Dida = styled.i`
  font-size: 8pt;
  width: 70%;
  text-align: right;
  margin-top: 0px;
`;

const SinglePage = (props) => {
  const pageId = props.match.params.id;
  const page = langManager.currentLang.pages.find((p) => p.id === pageId);
  const content = page.content;

  return (
    <Page>
      {page.title && <Title>{page.title}</Title>}

      {content.date && <DateContainer>{content.date}</DateContainer>}

      {content.subTitle && <SubTitle>{content.subTitle}</SubTitle>}

      {content.images && (
        <>
          <StyledImg
            src={content.images[0].img}
            alt="anteprima-img-single-page"
          />
          {content.images[0].dida && (
            <Dida>{content.images[0].dida}</Dida>
          )}
        </>
      )}

      {content.audios &&
        content.audios.map((v, i) => <StyledAudio key={i} url={v} />)}

      {content.cit && (
        <Cit>
          <i>
            <Text content={content.cit.text} />
          </i>
          <br />
          {content.cit.author}
        </Cit>
      )}

      {content.mainContent && (
        <MainContent>
          <Text content={content.mainContent} />
        </MainContent>
      )}

      {content.footer && (
        <Footer>
          <Text content={content.footer} />
        </Footer>
      )}

      {content.videos &&
        content.videos.map((v, i) => <Video key={i} url={v} />)}

      {content.images &&
        content.images
          .filter((img, indx) => indx !== 0)
          .map((img, i) => (
            <React.Fragment key={i}>
              <StyledImg
                src={img.img}
                alt={img.dida ? img.dida : "single-page-img"}
              />
              {img.dida && <Dida>{img.dida}</Dida>}
            </React.Fragment>
          ))}
      {currentDevice === "desktop" && <ScrollToTopButton />}
    </Page>
  );
};

export default SinglePage;
