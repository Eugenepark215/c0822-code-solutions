import React from 'react';
import ReactDOM from 'react-dom/client';

const languages = [
  { topic: 'Hypertext Markup Language', details: 'Hypertext Markup Language (HTML)' },
  { topic: 'Cascading Style Sheets', details: 'Cascading Style Sheets (CSS)' },
  { topic: 'JavaScript', details: 'JavaScript, often abbreviated as JS,' }
];
const languageTopics = (
  <ul>
    {languages.map(language =>
      <li key={languages.topic}>{languages.topic}</li>
    )}
  </ul>
);
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(languageTopics);
