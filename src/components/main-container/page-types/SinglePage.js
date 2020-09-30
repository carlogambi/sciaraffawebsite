import React from 'react';
import langManager from '../../../lang-packs/lang-manager';

export default (props) => {
    const pageId = props.match.params.id;
    const page = langManager.currentLang.pages.find(p => p.id === pageId);
    console.log(page);
    return <div>
        {page.title?<h1>{page.title}</h1>:null}
        {page.content?<p>{page.content}</p>:null}
        <h1>pagina singola</h1>
    </div>
}