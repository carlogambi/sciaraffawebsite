import React from 'react';
import backToTop from './../../../../../../utils/back-to-top'

import './sub-page.css'

export default ({info}) => {
    backToTop()

    const gallery= 
        info.images?
            <div className="gallery">
                {info
                    .images
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

    const videoContents= 
        info.videoContents?
            <div className="video-contents">
                {info
                    .videoContents
                    .map((vidUrl,i) => 
                        <p key={i}>VIDEO! link-{vidUrl}</p>
                    )
                }
            </div>
        :null;

    const audioContents= 
        info.audioContents?
            <div className="audio-contents">
                {info
                    .audioContents
                    .map((auUrl,i) => 
                        <p key={i}>AUDIO! link- {auUrl}</p>
                    )
                }
            </div>
        :null;

    const downloads= 
        info.downloads?
            <div className="downloads">
                {info
                    .downloads
                    .map((dwnldUrl,i) => 
                        <React.Fragment key={i}>
                            <a key={i} href={dwnldUrl} download>{dwnldUrl.replace('download/', '')}</a>
                        <br/>
                        </React.Fragment>
                    )
                }
            </div>
        :null;

    const links= 
        info.links?
            <div className="links">
                {info
                    .links
                    .map((link,i) => 
                        <React.Fragment key={i}>
                            <a key={i} href={link} target='blank'>{link}</a>
                        <br/>
                        </React.Fragment>
                    )
                }
            </div>
        :null;

    return <div>
        {info.title?<h1>{info.title}</h1>:null}
        {info.subTitle?<h2>{info.subTitle}</h2>:null}
        {gallery}
        {videoContents}
        {audioContents}
        {info.mainContent?<p>{info.mainContent}</p>:null}
        {info.footer?<p><i>{info.footer}</i></p>:null}
        {downloads}
        {links}
        <br/><br/>dati_grezzi:<span dangerouslySetInnerHTML={{__html: JSON.stringify({info}).replace(/,/gm, ',<br/>')}} />

    </div>
    
}
