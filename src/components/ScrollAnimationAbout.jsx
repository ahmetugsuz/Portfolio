import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import './AboutMe/AboutElements.css';
const ScrollAnimationAbout = () => {
    const [animate, setAnimate] = useState(false);
    const { ref, inView } = useInView({
        threshold: 1 , delay: 100
    });


    useEffect(() => {
        if (!inView) {
            setAnimate(false);
        };
        if(inView){
            setAnimate(true);
        }
    }, [inView]);
    

  return (
    <div className={`headingMarker headingMarkerBlack ${animate ? 'animate' : ''}`} ref={ref}>
      {/* Your content here */}
    </div>
  );
};

export default ScrollAnimationAbout;