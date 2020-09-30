import React from 'react';
import  {Link} from 'react-router-dom';


export default ({langPack}) => {
    return <div>
        <Link to='/'><h1>home</h1></Link>
        {langPack.pages.filter(
            (page) => 
            page.tags.includes('mainmenu')
        ).map((p,i) =>
        <Link to={`mainpage${p.id}`}  key={i}>
        <h1>{p.title}</h1>
        </Link>
        )}
    </div>
}