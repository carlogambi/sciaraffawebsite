import React from 'react';
import Image from './../../utility/Image'
const imgStyle = {
    width: '400px'
};
const mainContentStyle = {

};
const spaceInfoStyle = {

};
const contactsContainerStyle = {

};
const contactStyle = {
    borderBottom:'solid 1px black',
    maxWidth: '700px',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 'auto',
    paddingTop:'40px',
    alignItems: 'baseline',
    flexWrap: 'wrap'

};

const Contact = ({info}) => {
    return <div style={contactStyle}>
        {info.name?<h3>{info.name}</h3>:null}
        {info.role?<p><i>{info.role}</i></p>:null}
        {info.mail?<h5>{info.mail}</h5>:null}
        {info.phone?<p>{info.phone}</p>:null}
    </div>
}

const Contacts = ({langPack}) => {
    const page = langPack.content;
    const contactsList = page.contacts.map(
        (c,i) => <Contact info={c} key={i} />
    );
    return <div>
        {langPack.title && <h1>{langPack.title.toUpperCase()}</h1>}
        {page.mainContent?
            <p style={mainContentStyle}>{page.mainContent}</p>
            :null
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