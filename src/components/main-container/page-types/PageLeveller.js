import React from 'react';

import {Link} from 'react-router-dom';
import  { currentLang } from '../../../lang-packs/lang-manager';
import deviceDetector from '../../utility/device-detector';
import Caption, {linkStyle} from './../page-components/Caption'

const currentDevice = deviceDetector()



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



export const captionListStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: currentDevice === 'mobile'?'100%':'75%',
    minWidth: currentDevice === 'mobile'?'100%':'20%',
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
