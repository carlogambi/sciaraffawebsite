import React from 'react'
import {Caption, captionListStyle} from './PageLeveller'

// § NOT WORKING §

export default (props) => {
    const pages = props.data.langPack.pages.filter(p => !(p.tags.includes('mainmenu')));
    console.log(props.data.langPack.pages)
    return         <div style={captionListStyle}>
    {pages.map(
        (p,i) =>
        <Caption data={p} key={i} />
    )}
</div>
}
