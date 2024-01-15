import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import './KnowledgeSection/KnowledgeElements.css';
const ScrollAnimation = () => {
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
    <div className={`headingMarker headingMarkerWhite ${animate ? 'animate' : ''}`} ref={ref}>
      {/* Your content here */}
    </div>
  );
};

export default ScrollAnimation;
