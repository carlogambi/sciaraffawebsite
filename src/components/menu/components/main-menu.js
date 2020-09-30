import React from 'react';
import  {Link} from 'react-router-dom';

const linkStyle ={
    textDecoration: 'none',
    color: 'black',
    textAlign: 'left',
};
const h1Style = {
    paddingLeft: '30px'
}

export default ({langPack, setOpen}) => {
    return <div>
        <Link 
            style={linkStyle} to='/'><h1 style={h1Style}>home</h1></Link>
        {langPack.pages.filter(
            (page) => 
            page.tags.includes('mainmenu')
        ).map((p,i) =>
                <Link to={`mainpage${p.id}`} style={linkStyle} key={i}>
                    <h1 style={h1Style}
                        onClick={() => setOpen(false)}
                    >{p.title}</h1>
                </Link>
        )}
    </div>
}