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
      imageSrc: 'https://i.pinimg.com/736x/f1/3c/1a/f13c1ac2b78a6bc9a29b5597377ed060.jpg',
      theme: 'Wordly Wardrobes',
      desc: 'Explore the diversity of the world, through cultures, places and much more.'
    },
    {
      day_no: 'Day 2',
      imageSrc: 'https://cdn.shopify.com/s/files/1/0070/7032/files/start-a-clothing-line-sarah-donofrio-drawing_b2e177e7-405f-4304-82c4-dd7214135a46.jpg?v=1693936691',//'https://i.pinimg.com/736x/60/ec/54/60ec54bbcec73952c8a812adf36c0519.jpg',
      theme: 'Time Travel: \nA Fashion Journey through Decades',
      desc: 'Let\'s celebrate the fashion trends of the 80s, 90s, 2000s and 2010s!'
    },
    {
      day_no: 'Day 3',
      imageSrc: 'https://i.dailymail.co.uk/1s/2019/05/18/08/13648248-7042225-image-m-25_1558163413971.jpg',
      theme: 'Oscar Night',
      desc: 'Red Carpet like never before! Let\'s unleash the creative elegance of all. '
    },
    {
      day_no: 'Day 4',
      imageSrc: 'https://i.pinimg.com/736x/63/5f/68/635f6843641eaa51d7e9c2935786dc35.jpg',
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
