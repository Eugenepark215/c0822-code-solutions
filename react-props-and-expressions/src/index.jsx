import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(prop) {
  return (
    <button>{prop.text}</button>
  );
}

const element = (
  <div>
    <CustomButton text="I" />
    <CustomButton text="know" />
    <CustomButton text="React!" />
  </div>
);

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
