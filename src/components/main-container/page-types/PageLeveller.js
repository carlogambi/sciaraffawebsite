import React from 'react';

import {Link} from 'react-router-dom';
import  { currentLang } from '../../../lang-packs/lang-manager';
import deviceDetector from '../../utility/device-detector';
import Caption, {linkStyle} from './../page-components/Caption';

const currentDevice = deviceDetector()

let captionListStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
}  

let subTagStyle=  {
    ...linkStyle, 
    cursor: 'pointer'
}

let subTaglistStyle = {
    display:'flex',
    flexWrap: 'wrap',
    lineHeight: '40px',
    height: 'fit-content',
}

let mainContainerStyle = {
    display: 'flex',
    alignItems: 'top',
    justifyContent: 'space-between',
    width: '100%',
}

let titleStyle ={
    textTransform: 'uppercase',
    fontSize: '18pt',
    fontWeight: '700',
}

let subTagMainContainerStyle = {
    display:'flex',
    justifyContent: 'center'      
}

let subTagPageStyle = {
    ...captionListStyle,
}

switch (currentDevice) {
    case 'mobile':
        subTagStyle=  {
            ...subTagStyle,
            textAlign: 'left',
            margin: '20px',
            marginBottom: '0px',
            marginTop: '0px',
        }
        subTaglistStyle = {
            ...subTaglistStyle,
            borderRight: 'solid 1px white',
            width:'100%',
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'center',
            alignSelf: 'left',
            paddingRight: '0px',
        
        }
        mainContainerStyle = {
            ...mainContainerStyle,
            flexDirection: 'column',
            marginTop: '0px'
        }
        titleStyle = {
            ...titleStyle,
            textAlign: 'center',
            paddingLeft: '0%',
            width: '100%',
            letterSpacing: '5px',

        }
        captionListStyle = {
            ...captionListStyle,
            maxWidth: '100%',
            minWidth: '100%',
        }
        subTagPageStyle = {
            ...subTagPageStyle,
            minWidth: '100%',
            justifyContent: 'center',
        }
        break;
        case 'tablet':
        titleStyle = {
            ...titleStyle,
            textAlign: 'center',
            width: '100%',
            fontSize: '30pt',
            fontWeight: '500',
            letterSpacing: '15px',
        }
        subTagStyle=  {
            ...subTagStyle,
            fontSize: '15pt',
            paddingRight: '15px',
            paddingLeft: '15px',
        }
        mainContainerStyle = {
            ...mainContainerStyle,
            flexDirection: 'column',
            marginTop: '0px',
            alignItems: 'center'
        }
        break;

    default:
        subTagStyle=  {
            ...subTagStyle,
            textAlign: 'center',
        }
        subTaglistStyle = {
            ...subTaglistStyle,
            borderRight: 'solid 1px black',
            width: '17%',        
            flexDirection: 'column',        
            alignContent: 'flex-end',        
            paddingRight: '20px',        
        }
        mainContainerStyle = {
            ...mainContainerStyle,
            flexDirection: 'row',
            marginTop: '80px'
        }
        titleStyle = {
            ...titleStyle,
            textAlign: 'left',
            paddingLeft: '30%',
            letterSpacing: '20px',

        }
        captionListStyle = {
            ...captionListStyle,
            maxWidth: '75%',
            minWidth: '20%',
            justifyContent: 'left'
        }
        subTagPageStyle = {
            ...subTagPageStyle,
            minWidth: '70%',
        }
        break;
}

export  { captionListStyle }


const SubTag = ({tag}) => {
    const target = window.location.pathname.replace('mainpage', '')
    const link = `subTagAggregator${tag}${target}`
    return <Link style={subTagStyle} to={link}>
           {tag}
        </Link>
}

const SubTagList = ({data}) => {
    const list = (data.langPack.tagReference.find(mt => mt.mainTagName === data.id)).subtags
    return <div style={subTaglistStyle}>
        {list.map((st, i) => <SubTag tag={st} key={i} />)}
    </div>
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

    return <div style={{ width: '100%' }} >
        {props.match && (
            <h1 style={titleStyle}>
                <span 
                    style={{cursor: 'pointer', fontWeight: '300'}}
                    onClick={() => props.history.goBack()}
                >
                    {props.match.params.prev}/
                </span>
                {currentDevice==='mobile' && (<br/>)}
                {props.match.params.tag}
            </h1>
            )}
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
