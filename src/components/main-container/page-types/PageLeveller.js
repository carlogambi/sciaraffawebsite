import React from 'react';

import {Link} from 'react-router-dom';
import  { currentLang } from '../../../lang-packs/lang-manager';
import deviceDetector from '../../utility/device-detector';
import Caption, {linkStyle} from './../page-components/Caption';

const currentDevice = deviceDetector()

const subTagStyle=  {
    ...linkStyle, 
    textAlign: currentDevice==='mobile'?'left':'center',
    margin: currentDevice==='mobile'?'20px':'unset',
    marginBottom: currentDevice==='mobile'?'0px':'unset',
    marginTop: currentDevice==='mobile'?'0px':'unset',
    cursor: 'pointer'
}

const SubTag = ({tag}) => {
    const link = `subTagAggregator${tag}${window.location.pathname.replace('mainpage', '')}`
    return <Link style={subTagStyle} to={link}>
           {tag}
        </Link>
}

const subTaglistStyle = {
    borderRight: currentDevice==='mobile'?'solid 1px white':'solid 1px black',
    display:'flex',
    flexWrap: 'wrap',
    lineHeight: '40px',
    height: 'fit-content',
    width:currentDevice==='mobile'?'100%':'17%',
    flexDirection: currentDevice==='mobile'?'row':'column',
    alignContent: currentDevice==='mobile'?'center':'flex-end',
    justifyContent: currentDevice==='mobile'?'center':'unset',
    alignSelf: currentDevice==='mobile'?'left':'',
    // paddingLeft: '20px',
    paddingRight: currentDevice==='mobile'?'0px':'20px',
    
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
    justifyContent: 'center'
}   

const mainContainerStyle = {
    display: 'flex',
    flexDirection: currentDevice === 'mobile'?'column':'row',
    alignItems: 'top',
    justifyContent: 'space-between',
    width: '100%',
    // border: 'solid 1px black',
    marginTop: currentDevice === 'mobile'?'0px':'20px'
}

const titleStyle ={
    // border: 'solid 1px black',
    textAlign: currentDevice === 'mobile'?'center':'center',
    // paddingLeft: '17%',
    paddingTop: currentDevice === 'mobile'?'0%':'3%',
    paddingBottom: currentDevice === 'mobile'?'0%':'%',
    width: currentDevice === 'mobile'?'100%':'',
    textTransform: 'uppercase',
    // letterSpacing: '6px',
    letterSpacing: currentDevice === 'mobile'?'5px':'20px',
    fontSize: '18pt',
    fontWeight: '700',
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
    const subTagPageStyle = {
        ...captionListStyle,
        justifyContent: 'center',
        minWidth: currentDevice === 'mobile'?'100%':'70%',
        // backgroundColor: 'red'
    }
    const subTagMainContainerStyle = {
        // backgroundColor: 'green',
        display:'flex',
        justifyContent: 'center'      
    }
    return <div
            style={{
                // border: 'solid 1px black',
                width: '100%'
            }}
        >
        {props.match && props.match.params.prev && currentDevice === 'mobile' &&
            (<span style={subTagStyle}  onClick={() => props.history.goBack()} >  {props.match.params.prev.replace('mainpage', '')} </span>)}
        {props.match && (<h1 style={titleStyle}>{props.match.params.tag}</h1>)}
        {props.id && (<h1 style={{...titleStyle, marginTop:'0px'}}>{props.id}</h1>)}
        <div style={props.match?subTagMainContainerStyle:mainContainerStyle}>
        {!props.match&&<SubTagList data={props} />}
        <div style={props.match?subTagPageStyle:captionListStyle}>
            {pageList.map(
                (p,i) =>
                <Caption data={p} key={i} />
            )}
        </div>
        </div>
    </div>
}

export default PageLeveller;
