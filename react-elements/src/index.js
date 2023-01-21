import React from 'react';
import * as ReactDOM from 'react-dom/client';

const h1 = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

console.log(React.createElement(
  'h1',
  null,
  'Hello, React!'
));
var container = document.querySelector('#root');

const root = ReactDOM.createRoot(container);
root.render(h1);
