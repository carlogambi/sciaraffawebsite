import React, {useState} from 'react';

import {Link} from 'react-router-dom';
import  { currentLang } from '../../../lang-packs/lang-manager';

const linkStyle = {
    textDecoration: 'none',
    position:'relative',
    color: 'unset',
    textTransform: 'uppercase',
    fontWeight: '700',
    letterSpacing: '3px',
    fontSize: '14pt',
    paddingRight:'10px',

}

const SubTag = ({tag}) => {
    return <Link style={{...linkStyle, textAlign: 'right'}} to={`subTagAggregator${tag}`}>
            <span>{tag}</span>
        </Link>
}

const subTaglistStyle = {
    borderRight: 'solid 1px black',
    display:'flex',
    flexWrap: 'wrap',
    lineHeight: '40px',
    height: 'fit-content',
    width:'17%',
    flexDirection: 'column',
    alignContent: 'flex-end'
}

const SubTagList = ({data}) => {
    const list = (data.langPack.tagReference.find(mt => mt.mainTagName === data.id)).subtags
    return <div style={subTaglistStyle}>
        {list.map((st, i) => <SubTag tag={st} key={i} />)}
    </div>
}

let captionStyle = {
    width: '300px',
    minHeight: '250px',
    maxHeight: '250px',
    margin: '10px'
}

export const captionTextContainerStyle = {
    backgroundColor: '#ffffff73',
    position: 'absolute',
    top: '0px',bottom: '0px',left: '0px',right: '0px',
}

export const Caption = ({data}) => {
    const [hover, setHover] = useState(false)
    captionStyle = {
        ...captionStyle,
        backgroundImage: `url(${data.content.images[0]})`,
        backgroundSize: '150%',
        backgroundPosition: 'center center',
    }
    
    return <Link style={linkStyle}to={`singlePage${data.id}`}>
        <div
            style={captionStyle}
            onMouseEnter={() => setHover(true)}    
            onMouseLeave={() => setHover(false)}    
        >{hover?<div style={captionTextContainerStyle}><h1>{data.title}</h1>
        <h4>{data.content.subTitle}</h4></div>:null}
        </div>
    </Link>
}


export const captionListStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '75%'
}

const minContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
}

const titleStyle ={
    // border: 'solid 1px black',
    textAlign: 'left',
    // paddingLeft: '17%',
    paddingLeft: '40%',
    textTransform: 'uppercase',
    // letterSpacing: '6px',
    letterSpacing: '20px',
    fontSize: '30pt'
}

 const PageLeveller = (props) => {
    const mainTagsList = () => props.langPack.pages.filter(p => p.tags.includes(props.id));
    const subTagList = () => {
        let pages = currentLang.pages.filter(p => p.subtags)
        pages = pages.filter(p => {              
            return p.subtags.includes(props.match.params.tag)
        })
        return pages;
    } 
    const pageList = props.match?subTagList():mainTagsList();
    return <div>
        <h1 style={titleStyle}>{props.match?props.match.params.tag:props.id}</h1>
        <div style={minContainerStyle}>
        {props.match?null:<SubTagList data={props} />}
        <div style={captionListStyle}>
            {pageList.map(
                (p,i) =>
                <Caption data={p} key={i} />
            )}
        </div>
        </div>
    </div>
}

export default PageLeveller;
