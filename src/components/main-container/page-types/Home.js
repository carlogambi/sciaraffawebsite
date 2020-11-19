import React from 'react'
import deviceDetector from '../../utility/device-detector';
import {captionListStyle} from './PageLeveller'
import Caption from './../page-components/Caption'
import  {currentLang} from './../../../lang-packs/lang-manager'

const currentDevice = deviceDetector()

 const Home = () => {
    const pages = currentLang.pages.filter(p => !(p.tags.includes('mainmenu')));
    let style = {
        ...captionListStyle,

        width:currentDevice==='mobile'?'100%':'1000px',
        justifyContent: 'center'
    }
    return <div style={style} align='center'>
    {pages.map(
        (p,i) =>
        <Caption data={p} key={i} />
    )}
</div>
}
export default Home
