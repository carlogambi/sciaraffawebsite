import React, {useState} from  'react';
import './main-container.css'

import MenuContainer from './children/menu/menu-container'
import langManager from '../../lang-packs/lang-manager';
import changeLangEvent from '../../custom-events/change-lang-event';
import ContentContainer from './children/content-container/content-container'


export default () => {

    const [currentData, setCurrentData] = useState(langManager.getCurrentLangPack());

    changeLangEvent.intercept(() => setCurrentData(langManager.getCurrentLangPack()));

    return <div id="main-container">

            <MenuContainer langPack= {currentData}/>
            <ContentContainer langPack = {currentData} />
        </div>
}

// export default class mainContainer extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             langPack: langManager.getCurrentLangPack()
//         }
//     };
    
//     componentDidMount(){
//             changeLangEvent.intercept(() => {
//             this.setState({
//                 langPack: langManager.getCurrentLangPack()
//             })
//         });
//     }

//     render(){
//         return <div id="main-container">
//             <h1>
//             device: desktop
//             </h1>
//             <MenuContainer langPack= {this.state.langPack}/>
//             <ContentContainer langPack = {this.state.langPack} />
//         </div>
//     }
// }