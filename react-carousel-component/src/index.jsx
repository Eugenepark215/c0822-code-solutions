import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel.jsx';

// const imagesArray = ['images/007.png', 'images/155.png', 'images/258.png', 'images/393.png', 'images/501.png', 'images/656.png', 'images/728.png', 'images/816.png'];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Carousel/>);
