import React from 'react';
import './main-menu-item.css'


import changePageEvent from './../../../../../../custom-events/change-page-event';

import $ from 'jquery'

const genRndmId = () => Math.round(Math.random()*100000);
 
function Item (props) {

    const subMenuEnabled = true;

    
    const id = genRndmId();

    function whenClicked(){
        changePageEvent.trigger(props.item.id);
    }

    function buildButton() {
        return <div 
                className="menu-button-d"
                onClick={whenClicked}

                >
                {props.item.itemName}
            </div>
    }
    if(props.item.subitems.length === 0){
        return buildButton();
    }else{
        return <div 
        
        className='main-menu-item-container-d'
        onMouseEnter={() => $('#'+id).slideDown()}
        onMouseLeave={() => $('#'+id).slideUp()}
        
        >
                
                {buildButton()}
                    {subMenuEnabled?                
                    <div 
                    id={id}
                    className = "menu-sub-container"
                    >
                    {
                        props.item.subitems.map(
                            (item, index) => 
                            <Item item={item} key={index}/>
                        )
                    }
                </div>:
                null
                }
            </div>
    }
}

export default Item;