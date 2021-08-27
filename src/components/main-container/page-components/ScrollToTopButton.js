import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Button = styled.div`
  position: fixed;
  bottom: 1%;
  right: 3%;
  font-size: 30pt;
  cursor: pointer;
  font-weight: 800;
`;

const ScrollToTopButton = () => {
  const [scroll, setScroll] = useState(window.scrollY);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    window.onscroll = () => setScroll(window.scrollY);
    if (scroll > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
    return () => {
      window.onscroll = () => {};
    };
  }, [scroll]);
  const clickHandler = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return <Button onClick={() => clickHandler()}>{visible && '^'}</Button>;
};

export default ScrollToTopButton;
