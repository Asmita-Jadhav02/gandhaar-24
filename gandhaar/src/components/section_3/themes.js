import React, { useState } from 'react';
import './themes.css'

const Themes = () => {
  const [activeCard, setActiveCard] = useState(null);

  const updateActiveCard = (clickedCard) => {
    setActiveCard(clickedCard === activeCard ? null : clickedCard);
  };

  const Data = [
    {
      day_no: 'Day 1',
      imageSrc: 'https://www.shutterstock.com/shutterstock/photos/2281822545/display_1500/stock-photo-high-angle-of-blue-stationary-telephone-with-handset-and-orange-buttons-placed-on-table-against-2281822545.jpg',
      theme: 'Wordly Wardrobes',
      desc: 'Explore the diversity of the world, through cultures, places and much more.'
    },
    {
      day_no: 'Day 2',
      imageSrc: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg',
      theme: 'Time Travel: \nA Fashion Journey through Decades',
      desc: 'Let\'s celebrate the fashion trends of the 80s, 90s, 2000s and 2010s!'
    },
    {
      day_no: 'Day 3',
      imageSrc: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg',
      theme: 'Oscar Night',
      desc: 'Red Carpet like never before! Let\'s unleash the creative elegance of all. '
    },
    {
      day_no: 'Day 4',
      imageSrc: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg',
      theme: 'Traditional Treasures',
      desc: 'Celebration of our culture, traditions and outfits.'
    },
    
  ];

  return React.createElement(
    'div',
    { className: 'cards' },
    Data.map((day, index) =>
      React.createElement(
        'div',
        {
          key: index,
          className: `card ${activeCard === index ? 'active' : ''}`,
          onClick: () => updateActiveCard(index),
        },
        React.createElement('img', { src: day.imageSrc, alt: '', className: 'card__image' }),
        React.createElement(
          'div',
          { className: 'card__infos' },
          React.createElement('h3', { className: 'card__day' }, day.day_no),
          React.createElement('h2', { className: 'card__theme'}, day.theme),
          React.createElement('div', { className: 'card__theme desc' }, day.desc)
        )
      )
    )
  );
};

export default Themes
