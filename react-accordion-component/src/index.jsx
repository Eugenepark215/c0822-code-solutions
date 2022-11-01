import React from 'react';
import ReactDOM from 'react-dom/client';
import Accordian from './accordion';

const languages = [
  { topic: 'Hypertext Markup Language', details: 'Hypertext Markup Language (HTML)' },
  { topic: 'Cascading Style Sheets', details: 'Cascading Style Sheets (CSS)' },
  { topic: 'JavaScript', details: 'JavaScript, often abbreviated as JS,' }
];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Accordian languages = {languages}/>);
