import React, {useState} from 'react';

import {Link} from 'react-router-dom';
import  { currentLang } from '../../../lang-packs/lang-manager';
import deviceDetector from '../../utility/device-detector';
import loadingPlaceHolder from './../../utility/placeholder.gif'

const currentDevice = deviceDetector()

const linkStyle = {
    textDecoration: 'none',
    position:'relative',
    color: 'unset',
    textTransform: 'uppercase',
    fontWeight: '700',
    letterSpacing: '3px',
    fontSize: '14pt',
    borderRight: currentDevice==='mobile'?'100px':'unset'

}

const SubTag = ({tag}) => {
    return <Link style={{...linkStyle, textAlign: currentDevice==='mobile'?'left':'right'}} to={`subTagAggregator${tag}`}>
           {tag}
        </Link>
}

const subTaglistStyle = {
    borderRight: currentDevice==='mobile'?'solid 1px white':'solid 1px black',
    display:'flex',
    flexWrap: 'wrap',
    lineHeight: '40px',
    height: 'fit-content',
    width:currentDevice==='mobile'?'70%':'17%',
    flexDirection: 'column',
    alignContent: currentDevice==='mobile'?'flex-start':'flex-end',
    alignSelf: currentDevice==='mobile'?'left':'',
    paddingLeft: '20px',
    paddingRight: currentDevice==='mobile'?'0px':'20px'
}

const SubTagList = ({data}) => {
    const list = (data.langPack.tagReference.find(mt => mt.mainTagName === data.id)).subtags
    return <div style={subTaglistStyle}>
        {list.map((st, i) => <SubTag tag={st} key={i} />)}
    </div>
}

let captionStyle = {
    width: currentDevice === 'mobile'?'150px':'300px',
    minHeight: currentDevice==='mobile'?'200px':'150px',
    maxHeight: currentDevice==='mobile'?'200px':'150px',
    margin: '10px'
}

export const captionTextContainerStyle = {
    margin: '10px',
    backgroundColor: '#ffffff73',
    position: 'absolute',
    paddingTop: currentDevice==='mobile'?'unset':'55px',
    paddingLeft: currentDevice==='mobile'?'unset':'10px',
    paddingRight: currentDevice==='mobile'?'unset':'10px',
    top: '0px',bottom: '0px',left: '0px',right: '0px',
    fontSize: '5pt',
    maxWidth: '300px',
}


export const Caption = ({data}) => {
    const [hover, setHover] = useState(false)
    const [imgLoad, setImgLoad] = useState(false)
    
    const captionImg = new Image(100,100);
    captionImg.src = data.content.imgAnteprima;
    captionImg.onload = () => setImgLoad(true)

    captionStyle = {
        ...captionStyle,
        backgroundImage: `url(${imgLoad?captionImg.src:loadingPlaceHolder})`,
        backgroundSize: '200%',
        backgroundPosition: 'center center',
        // opacity: hover?'0.3':'1.0'
    }
    
    return <Link style={linkStyle}to={`singlePage${data.id}`}>
        <div
            style={captionStyle}
            onMouseEnter={() => setHover(true)}    
            onMouseLeave={() => setHover(false)}    
        >{hover?<div style={captionTextContainerStyle}><h1>{data.title}</h1>
        <h3 >{data.content.subTitle}</h3></div>:null}
        </div>
    </Link>
}

export const captionListStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '75%',
    // border: 'solid 1px black'
}   

const mainContainerStyle = {
    display: 'flex',
    flexDirection: currentDevice === 'mobile'?'column':'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: currentDevice === 'mobile'?'0px':'80px'
}

const titleStyle ={
    // border: 'solid 1px black',
    textAlign: currentDevice === 'mobile'?'center':'left',
    // paddingLeft: '17%',
    paddingLeft: currentDevice === 'mobile'?'0%':'40%',
    width: currentDevice === 'mobile'?'100%':'',
    textTransform: 'uppercase',
    // letterSpacing: '6px',
    letterSpacing: currentDevice === 'mobile'?'2px':'20px',
    fontSize: '30pt'
}

 const PageLeveller = (props) => {
     console.log(currentDevice);
    const mainTagsList = () => props.langPack.pages.filter(p => p.tags.includes(props.id));
    const subTagList = () => {
        let pages = currentLang.pages.filter(p => p.subtags)
        pages = pages.filter(p => {              
            return p.subtags.includes(props.match.params.tag)
        })
        return pages;
    } 
    const pageList = props.match?subTagList():mainTagsList();
    console.log(pageList);
    return <div>
        {props.match && (<h1 style={titleStyle}>{props.match.params.tag}</h1>)}
        <div style={mainContainerStyle}>
        {props.match?null:<SubTagList data={props} />}
        <div style={props.match?{...captionListStyle,justifyContent: 'center',width:'100%'}:captionListStyle}>
            {pageList.map(
                (p,i) =>
                <Caption data={p} key={i} />
            )}
        </div>
        </div>
    </div>
}

export default PageLeveller;
