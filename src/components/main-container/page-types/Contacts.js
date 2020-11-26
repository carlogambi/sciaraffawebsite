import React from 'react';
import Image from './../../utility/Image'
import deviceDetector from '../../utility/device-detector';

const currentDevice = deviceDetector();

const imgStyle = {
    width: currentDevice === 'mobile'?'100%':'400px'
};
const mainContentStyle = {

};
const spaceInfoStyle = {

};
const contactsContainerStyle = {

};
const contactStyle = {
    borderBottom:'solid 1px black',
    maxWidth: currentDevice === 'mobile'?'100%':'100%',
    flexDirection: currentDevice === 'mobile'?'column':'row',
    alignItems: currentDevice === 'mobile'?'center':'baseline',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 'auto',
    paddingTop:'40px',
    flexWrap: 'wrap',
    paddingBottom: '10px'
};

const contactItemStyle = {
    margin:currentDevice === 'mobile'?'5px':'20px'
}

const contactLinkStyle = {
    all:'unset',
    cursor: 'pointer'
}

const Contact = ({info}) => {
    return <div style={contactStyle}>
        {info.name && <h3 style={{...contactItemStyle}}>{info.name}</h3>}
        {info.role && <p style={{...contactItemStyle}}><i>{info.role}</i></p>}
        {info.mail && <h5 style={{...contactItemStyle}}>{info.mail}</h5>}
        {/* al momento info.phone in realta contiene l'email >:\ */}
        {info.phone && <a href={info.phone} style={{...contactItemStyle, ...contactLinkStyle}}>{info.phone.replace('https://www.','')}</a>}
    </div>
}

const Contacts = ({langPack}) => {
    const page = langPack.content;
    const contactsList = page.contacts.map(
        (c,i) => <Contact info={c} key={i} />
    );
    return <div style={{width: '100%'}}>
        {langPack.title && <h1>{langPack.title.toUpperCase()}</h1>}
        {page.mainContent && 
            <p style={mainContentStyle}>{page.mainContent}</p>
            }
        {page.image&& 
            <Image style={imgStyle} src={`/${page.image}`} alt='contacts-img' />
            
        }
        {page.spaceInfo?
            <div style={spaceInfoStyle}>
                <h4>
                    {page.spaceInfo.name}
                </h4>
                {page.spaceInfo.address}
            </div>
            :null
            }
        <div style={contactsContainerStyle}>

        </div>
        {contactsList}
    </div>
}
export default Contacts