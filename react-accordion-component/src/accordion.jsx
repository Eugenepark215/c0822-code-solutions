import React from 'react';

export default class Accordian extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isClicked: false
    };
  }

  handleClick() {
    if (!this.state.isClicked) {
      this.setState({ isClicked: true });
    } else if (this.state.isClicked) {
      this.setState({ isClicked: false });
    }
  }

  render() {
    const languages = [
      { topic: 'Hypertext Markup Language', details: 'Hypertext Markup Language (HTML)' },
      { topic: 'Cascading Style Sheets', details: 'Cascading Style Sheets (CSS)' },
      { topic: 'JavaScript', details: 'JavaScript, often abbreviated as JS,' }
    ];
    if (!this.state.isClicked) {
      return (
  <ul>
    {languages.map(languages =>
      <li className ='topic' key={languages.topic} onClick={this.handleClick}>{languages.topic}
      </li>
    )}
  </ul>);
    } else if (this.state.isClicked) {
      return (
  <ul>
    {languages.map(languages =>
      <li className ='topic' key={languages.topic} onClick={this.handleClick}>{languages.topic}
        <li className='details' onClick={this.handleClick}>{languages.details}</li>
      </li>
    )}
  </ul>);
    }
  }
}

// need to target the key
