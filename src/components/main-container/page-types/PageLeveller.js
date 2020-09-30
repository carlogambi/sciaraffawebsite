import React from 'react';

import {Link} from 'react-router-dom';
import  { currentLang } from '../../../lang-packs/lang-manager';

const linkStyle = {
    textDecoration: 'none',
    color: 'unset'
}

const SubTag = ({tag}) => {
    return <Link style={linkStyle} to={`subTagAggregator${tag}`}>
            <span>{tag}</span>
        </Link>
}

const subTaglistStyle = {
    display:'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width:'80%',
    marginBottom: '80px'
}

const SubTagList = ({data}) => {
    let list = data.langPack.pages.filter(p => p.subtags);
    list = list.filter(p => p.subtags.parentTag === data.id)
    list = list.map(p => p.subtags.tags).flat();
    list = [...new Set(list)]
    
    return <div style={subTaglistStyle}>
        {list.map((st, i) => <SubTag tag={st} key={i} />)}
    </div>
}

const captionStyle = {
    border: 'solid 1px black',
    width: '300px',
    minHeight: '250px',
    maxHeight: '250px',
    margin: '10px'
}



const Caption = ({data}) => {
    return <Link style={linkStyle}to={`singlePage${data.id}`}>
        <div style={captionStyle}>
            <h1>{data.title}</h1>
            <h4>{JSON.stringify(data.tags)}</h4>
            <h5>{JSON.stringify(data.subtags)}</h5>
            <p>{data.content}</p>
        </div>
    </Link>
}


const captionListStyle = {
    display: 'flex',
    flexWrap: 'wrap'
}

 const PageLeveller = (props) => {
    const mainTagsList = () => props.langPack.pages.filter(p => p.tags.includes(props.id));
    const subTagList = () => {
        let pages = currentLang.pages.filter(p => p.subtags)
        pages = pages.filter(p => {              
            return p.subtags.tags.includes(props.match.params.tag)
        })
        return pages;
    } 
    const pageList = props.match?subTagList():mainTagsList();
    // const pageList = props.langPack.pages.filter(p => p.tags.includes(props.id));
    console.log({pageList});
    return <div>
        <h1>{props.match?props.match.params.tag:props.id}</h1>
        {props.match?null:<SubTagList data={props} />}
        <div style={captionListStyle}>
            {pageList.map(
                (p,i) =>
                <Caption data={p} key={i} />
            )}
        </div>
    </div>
}

export default PageLeveller;