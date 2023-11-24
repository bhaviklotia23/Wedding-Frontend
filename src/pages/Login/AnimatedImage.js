import React, { useState, useEffect } from 'react';
import './animation.css';
import Gallery1 from '../../images/g1.jpg';
import Gallery2 from '../../images/g2.jpg';
import Gallery3 from '../../images/g3.jpg';

const AnimatedImage = () => {
  const [animation, setAnimation] = useState({
    bgUrlBefore: `url(${Gallery1})`, // Corrected URL syntax
    keyframeBefore: 'fade-in',
    bgUrlAfter: `url(${Gallery2})`, // Corrected URL syntax
    keyframeAfter: 'fade-out',
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimation({
        ...animation,
        keyframeBefore: 'fade-out',
        keyframeAfter: 'fade-in',
        bgUrlAfter: `url(${Gallery3})`, // Corrected URL syntax
      });

      // Toggle class after a delay
      const appElement = document.getElementById('app');
      if (appElement) {
        appElement.classList.remove('animated-image');
        setTimeout(() => {
          appElement.classList.add('animated-image');
        }, 200);
      }
    }, 10000);

    return () => clearTimeout(timeout);
  }, [animation]);

  return (
    <div id="app" className="animated-image">
      <div
        className="animated-image"
        style={{
          '--bg-url-before': animation.bgUrlBefore,
          '--keyframe-before': animation.keyframeBefore,
          '--bg-url-after': animation.bgUrlAfter,
          '--keyframe-after': animation.keyframeAfter,
        }}
      />
    </div>
  );
};

export default AnimatedImage;
