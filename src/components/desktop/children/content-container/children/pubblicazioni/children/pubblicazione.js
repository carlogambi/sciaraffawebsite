import React from 'react';

import './pubblicazione.css'

export default ({data}) => {
    
    const title= () => {
        if(data.title){
            return <h3>{data.title}</h3>
        }
    }
    const press= () => {
        if(data.press){
            return <h5>{data.press}</h5>
        }
    }
    const caption= () => {
        if(data.caption){
            return <p>{data.caption}</p>
        }
    }
    const img= () => {
        if(data.img){
            return <img 
                    width="100px" 
                    src={data.img} 
                    alt="img pubb"/>
        }
    }
    const link= () => {
        if(data.link){
            return <a href={data.link} 
                    target="blank">
                        link to website
                    </a>
        }
    }
    return <div className='pubblication'>
        {img()}
        <div>
        {title()}
        {caption()}
        {press()}
        {link()}
        </div>
    </div>
}