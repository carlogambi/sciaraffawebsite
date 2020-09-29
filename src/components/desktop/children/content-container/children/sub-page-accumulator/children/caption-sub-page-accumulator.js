import React, {useState} from 'react';
import changePageEvent from '../../../../../../../custom-events/change-page-event';
import './caption-sub-page-accumulator.css'

export default ({data}) => {
    
    const [hover, setHover] = useState(false);
    const className = hover?"caption-sub-page-accumulator-d caption-sub-page-accumulator-hover-d":"caption-sub-page-accumulator-d";

    return <div 
        className={className}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => changePageEvent.trigger(data.id)}
        >
        <img src={data.images[0]} alt="caption-img" />
        <div
        className="popup-caption-sub-page-accumulator-d"
        >
        {hover?<h5>{data.title}</h5>:''}
        {hover?<h5>{data.subTitle}</h5>:''}
        </div>
    </div>
}