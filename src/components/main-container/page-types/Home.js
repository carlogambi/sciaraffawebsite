import React from 'react'
import {Caption, captionListStyle} from './PageLeveller'


export default (props) => {
    const pages = props.data.langPack.pages.filter(p => !(p.tags.includes('mainmenu')));
    let style = {
        ...captionListStyle,

        width:'100%',
        // border: 'solid 1px black',
        justifyContent: 'center'
    }
    return <div style={style}>
    {pages.map(
        (p,i) =>
        <Caption data={p} key={i} />
    )}
</div>
}
