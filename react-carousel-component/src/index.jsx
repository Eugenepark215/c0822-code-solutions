import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel.jsx';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Carousel/>);
