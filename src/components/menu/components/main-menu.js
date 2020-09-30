import React from 'react';
import  {Link} from 'react-router-dom';


export default ({langPack, open, setOpen}) => {
    return <div>
        <Link to='/'><h1>home</h1></Link>
        {langPack.pages.filter(
            (page) => 
            page.tags.includes('mainmenu')
        ).map((p,i) =>
        <Link to={`mainpage${p.id}`}  key={i}>
        <h1
            onClick={() => setOpen(false)}
        >{p.title}</h1>
        </Link>
        )}
    </div>
}