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
        return () => {
            window.onscroll = () => {}
        }
    }, [scroll])
    const clickHandler = () => window.scrollTo({top: 0, behavior: 'smooth'})
    return (
        <div 
            style={sButtonStyle}
            onClick={() => clickHandler()}
        >
            {visible && '^'}
        </div>
    )
}

export default ScrollToTopButton
