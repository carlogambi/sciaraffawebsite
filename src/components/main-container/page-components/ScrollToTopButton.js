import React, {useState, useEffect} from 'react'

const sButtonStyle = {
    position: 'fixed',
    bottom: '1%',
    right: '3%',
    fontSize: '30pt',
    cursor: 'pointer',
    fontWeight: '800'
}

const ScrollToTopButton = () => {
    const [scroll, setScroll] = useState(window.scrollY)
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        window.onscroll = () => setScroll(window.scrollY)
        if(scroll > 300){
            setVisible(true)
        }else{
            setVisible(false)
        }
    }, [scroll])
    return (
        (visible && <div 
            style={sButtonStyle}
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
            ^
        </div>)
    )
}

export default ScrollToTopButton
