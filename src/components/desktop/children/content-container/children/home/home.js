import React from 'react';
// import SubPageAccumulator from './../sub-page-accumulator/sub-page-accumulator'
// import langManager from '../../../../../../lang-packs/lang-manager';
import backToTop from './../../../../../../utils/back-to-top'

export default ({info}) => {
    backToTop();

    // const PSdata = langManager.getCurrentLangPack().pages.find(p => p.id === 'archiviolavori');
    // const ALdata = langManager.getCurrentLangPack().pages.find(p => p.id === "progettispeciali");

    const gallery= 
    info.media.images?
        <div className="gallery">
            {info
                .media.images
                .map((img,i) => 
                <img 
                    key={i} 
                    src={img} 
                    alt="gallery-element"
                />
                )
            }
        </div>
    :null;

    const audioContents= 
    info.media.audio?
        <div className="audio-contents">
                {info
                    .media.audio
                    .map((auUrl,i) => 
                        <p key={i}>AUDIO! link- {auUrl}</p>
                    )
                }
        </div>
    :null;

    const videoContents= 
        info.media.video?
            <div className="video-contents">
                {info
                    .media.video
                    .map((vidUrl,i) => 
                        <p key={i}>VIDEO! link-{vidUrl}</p>
                    )
                }
            </div>
        :null;

    return <div>
        {/* <h3>
        {'Al momento oltre alle informazioni specifiche la homepage contiene in successione le pagine di archivio lavori e progetti speciali'.toUpperCase()}
        </h3> */}
        {info.title?<h1>{info.title}</h1>:null}
        {info.subTitle?<h3>{info.subTitle}</h3>:null}
        {gallery?gallery:null}
        {audioContents}
        {videoContents}
        {info.mainContent?<p>{info.mainContent}</p>:null}
        {info.footer?<p><i>{info.footer}</i></p>:null}
        {/* <SubPageAccumulator info= {PSdata} />
        <SubPageAccumulator info= {ALdata} /> */}
    </div>
    
}
