import React from 'react';

import deviceDetector from '../utils/device-detector';

import DesktopSite from './desktop/main-container'
// import TabletSite from './tablet/main-container'
// import MobileSite from './mobile/main-container'

export default () => {

    // alert('supported device: desktop, tablet, mobile')

    switch (deviceDetector()) {

        // case "tablet":

        //     return <TabletSite />;
            
        // case "mobile":

        //     return <MobileSite />;

        case 'desktop':

            return <DesktopSite />;
        
        default :
        return 'this device is not supported';
    }
}