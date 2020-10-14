import React from 'react';

const PublicationStyle ={
    borderLeft: 'solid 1px black',
    paddingLeft: '50px',
    width: '300px',
    textAlign: 'left',
    lineHeight: '3px',
    margin: '15px',
    paddingBottom: '10px'
}

const Publication = ({info}) => {
    return <div style={PublicationStyle}>
                {info.title?<h4>{info.title}</h4>:null}
                {info.author?<h5>{info.author}</h5>:null}
                {info.magazine?<p><i>{info.magazine}</i></p>:null}
                {info.link?
                    <a href={info.link} target="blank">
                        {info.link}
                    </a>
                    :null}
        </div>
}

const publicationsContainerStyle = {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    // border: 'solid 1px black',
    justifyContent: 'center'
}

export default ({langPack}) => {
    let page = langPack.content
    page = [...page, ...page, ...page]
    console.log(page);
    return <div>
        {langPack.title?<h1 style={{marginBottom: '100px'}}>{langPack.title}</h1>:null}
        <div style={publicationsContainerStyle}>
            {page?page.map((p,i) => <Publication info={p} key={i} />):null}
        </div>
    </div>
}