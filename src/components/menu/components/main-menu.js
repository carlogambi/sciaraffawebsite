import React from 'react';
import  {Link} from 'react-router-dom';
import deviceDetector from '../../utility/device-detector';

const currentDevice = deviceDetector()

let linkStyle;
let h1Style;
let mainMenuStyle;

 switch (currentDevice) {
    case 'tablet':
        linkStyle ={
            textDecoration: 'none',
            color: 'black',
            textAlign: 'left',
        };
        h1Style = {
            paddingLeft: '30px',
            fontSize: '25pt',
            fontWeight: '500',
            textTransform: 'uppercase',
            margin : '20px'
            // border: 'solid 1px black'
        }
        break;
    case 'mobile':
        linkStyle ={
            textDecoration: 'none',
            color: 'black',
            textAlign: 'left',
        };
        h1Style = {
            paddingLeft: '30px',
            fontSize: '20pt',
            fontWeight: '400',
            textTransform: 'uppercase',
            margin : '0px'
            // border: 'solid 1px black'
        }
        break;
    case 'desktop':
        linkStyle ={
            textDecoration: 'none',
            color: 'black',
            textAlign: 'left',
        };
        h1Style = {
            // paddingLeft: '30px',
            fontSize: '18px',
            fontWeight: '300',

        }
        mainMenuStyle={
            display: 'flex',
            justifyContent: 'space-between',
            width: '98%',
            flexWrap: 'wrap',
            textTransform: 'uppercase',
            // paddingLeft: '3%',
            // paddingRight: '3%',

        }
        break;

    default:
        break;
}


const MainMenu = (props) => {

    return <div style={mainMenuStyle}>
        
        {props.langPack.pages.filter(
            (page) => 
            page.tags.includes('mainmenu')
        ).map((p,i) =>(<Link to={`../mainpage${p.id}`} style={linkStyle} key={i}>
                    <h1 style={h1Style}
                        onClick={() => 
                            ((currentDevice === 'mobile' ||
                            currentDevice === 'tablet') &&
                             props.setOpen(false))}
                    >{p.title}</h1>
                </Link>)
            
        )}
    </div>
}


export default MainMenu