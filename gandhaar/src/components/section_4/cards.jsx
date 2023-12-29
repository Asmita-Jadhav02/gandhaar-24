import React, { useState, useEffect, useRef } from 'react';
import './cards.css';

const Events = ({ items }) => {
  const [progress, setProgress] = useState(50);
  const [startX, setStartX] = useState(0);
  const [active, setActive] = useState(0);
  const [isDown, setIsDown] = useState(false);

  const speedWheel = 0.02;
  const speedDrag = -0.1;

  const carouselRef = useRef(null);

  const getZindex = (array, index) =>
    array.map((_, i) => (index === i ? array.length : array.length - Math.abs(index - i)));

  const displayItems = (item, index) => {
    const zIndex = getZindex([...items], active)[index];
    item.style.setProperty('--zIndex', zIndex);
    item.style.setProperty('--active', (index - active) / items.length);
  };

  const animate = () => {
    const clampedProgress = Math.max(0, Math.min(progress, 100));
    const newActive = Math.floor((clampedProgress / 100) * (items.length - 1));
    setActive(newActive);

    items.forEach((item, index) => {
      const itemElement = carouselRef.current.children[index];
      displayItems(itemElement, index);
    });
  };

  useEffect(() => {
    animate();
  }, [progress, active, items]);

  const handleItemClick = (index) => {
    setProgress((index / items.length) * 100 + 10);
    console.log(index);
  };

  const handleWheel = (e) => {
    const wheelProgress = e.deltaY * speedWheel;
    setProgress((prevProgress) => prevProgress + wheelProgress);
  };

  const handleMouseMove = (e) => {
    if (e.type === 'mousemove') {
      const cursors = carouselRef.current.querySelectorAll('.cursor');
      cursors.forEach((cursor) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      });
    }

    if (!isDown) return;

    const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const mouseProgress = (x - startX) * speedDrag;
    setProgress((prevProgress) => prevProgress + mouseProgress);
    setStartX(x);
  };

  const handleMouseDown = (e) => {
    setIsDown(true);
    const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    setStartX(x);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  useEffect(() => {
    const carousel = carouselRef.current;

    carousel.addEventListener('mousedown', handleMouseDown);
    carousel.addEventListener('mousemove', handleMouseMove);
    carousel.addEventListener('mouseup', handleMouseUp);
    carousel.addEventListener('touchstart', handleMouseDown);
    carousel.addEventListener('touchmove', handleMouseMove);
    carousel.addEventListener('touchend', handleMouseUp);

    return () => {
      carousel.removeEventListener('mousedown', handleMouseDown);
      carousel.removeEventListener('mousemove', handleMouseMove);
      carousel.removeEventListener('mouseup', handleMouseUp);
      carousel.removeEventListener('touchstart', handleMouseDown);
      carousel.removeEventListener('touchmove', handleMouseMove);
      carousel.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div ref={carouselRef} className="carousel">
      {items.map((item, index) => (
        <div key={index} className="carousel-item" onClick={() => handleItemClick(index)} style={{ display: index === 9 ? 'none' : 'block' }}>
          <div className="carousel-box">
            <div className="title">{item.title}
              <br></br>
              <a className="event-page-link" href={item.link} target="_blank" rel="noopener noreferrer">
                <span>See Events &#x2192;</span>
              </a>
            </div>
            <div className="num">{item.num}</div>
            <img alt={item.title} src={item.image} />
          </div>
        </div>
      ))}

      <div className="cursor"></div>
      <div className="cursor cursor2"></div>
    </div>
  );
};

export default Events