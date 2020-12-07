import React from 'react'
import deviceDetector from '../../utility/device-detector';
import {captionListStyle} from './PageLeveller'
import Caption from './../page-components/Caption'
import  {currentLang} from './../../../lang-packs/lang-manager'

const currentDevice = deviceDetector()

let style = {
    ...captionListStyle,
    justifyContent: 'center'
}
switch(currentDevice){
    case 'tablet':
        style = {
            ...style,
            minWidth: '100%',
        }
    break
    case 'mobile':
        style = {
            ...style,
            width: '100%'
        }
    break
    default:
        style = {
            ...style,
            minWidth: '75%',
            width: '100px'
        }

}
 const Home = () => {
    const pages = currentLang.pages.filter(p => !(p.tags.includes('mainmenu')));
    return <div style={style} align='center'>
    {pages.map(
        (p,i) =>
        <Caption data={p} key={i} />
    )}
</div>
}
export default Home
