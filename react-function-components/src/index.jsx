import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  return <button>{props.text}</button>;
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
const text = <CustomButton text="Click Me!"/>;
root.render(text);
