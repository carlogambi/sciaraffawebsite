import React from 'react';
import Image from './../../utility/Image'
import deviceDetector from '../../utility/device-detector';

const currentDevice = deviceDetector();

let imgStyle = {
}

let mainContentStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '8%'
}
let spaceInfoStyle = {

}
let contactsContainerStyle = {
    // border: 'solid 1px black',
    width: '90%'
}

let contactStyle = {
    borderBottom:'solid 1px black',
    display: 'flex',
    justifyContent: 'space-between',
    margin: 'auto',
    paddingTop:'40px',
    flexWrap: 'wrap',
    paddingBottom: '10px'
}

let contactItemStyle = {
}

let contactLinkStyle = {
    all:'unset',
    cursor: 'pointer'
}

switch (currentDevice) {
    case 'mobile':
        imgStyle = {
            ...imgStyle,
            width: '100%'
        }
        contactStyle = {
            ...contactStyle,
            maxWidth: '100%',
            flexDirection: 'column',
            alignItems: 'center',

        }
        contactItemStyle = {
            ...contactItemStyle,
            margin:'5px'
        }
        break
    case 'tablet':
        
        break

    default:
            imgStyle = {
                ...imgStyle,
                width: '400px'
            }
            contactStyle = {
                ...contactStyle,
                maxWidth: '100%',
                flexDirection: 'row',
                alignItems: 'baseline',
    
            }
            contactItemStyle = {
                ...contactItemStyle,
                // margin:'20px',
                width: '300px',
                // border: 'solid 1px black',
                textAlign: 'left'
            }
        break
}


const Contact = ({info}) => {
    return <div style={contactStyle}>
        {info.name && <h3 style={contactItemStyle}>{info.name}</h3>}
        {info.role && <p style={contactItemStyle}><i>{info.role}</i></p>}
        {info.mail && <h5 style={contactItemStyle}>{info.mail}</h5>}
        {/* al momento info.phone in realta contiene l'email >:\ */}
        {info.phone && <a href={info.phone} style={{...contactItemStyle, ...contactLinkStyle}} target='blank'>
            {
            info.phone.replace(/(http:\/\/www.)|(https:\/\/www.)|\//g,'')
            }
            </a>}
    </div>
}

const Contacts = ({langPack}) => {
    const page = langPack.content;

    const contactsList = page.contacts.map((c,i) => <Contact info={c} key={i} />)

    return (
    <div style={mainContentStyle}>
        {langPack.title && <h1>{langPack.title.toUpperCase()}</h1>}
        {page.mainContent && 
            <p style={mainContentStyle}>{page.mainContent}</p>
            }
        {page.image&& 
            <Image style={imgStyle} src={`/${page.image}`} alt='contacts-img' />
        }
        {page.spaceInfo &&
            <div style={spaceInfoStyle}>
                <h4>
                    {page.spaceInfo.name}
                </h4>
                {page.spaceInfo.address}
            </div>
            }
        <div style={contactsContainerStyle}>
            {contactsList}
        </div>
    </div>)
}
export default Contacts