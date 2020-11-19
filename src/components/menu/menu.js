import React from 'react';
import deviceDetector from '../utility/device-detector';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';


const Menu = (props) => {

    switch (deviceDetector()) {
        case 'desktop':
            return <DesktopMenu langPack={props.langPack} />
        
        case 'mobile':
            return <MobileMenu langPack={props.langPack} />
        
        default:
            return <MobileMenu langPack={props.langPack} />
    }

}
export default Menu