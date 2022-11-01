import React from 'react';

export default class Accordian extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      lang: ''
    };
  }

  handleClick(event) {
    if (event.target.textContent !== this.state.lang) {
      this.setState({ lang: event.target.textContent });
    } else {
      this.setState({ lang: '' });
    }
  }

  render() {
    return (
  <div>
    {this.props.languages.map(prop => {
      const something = prop.topic === this.state.lang ? '' : 'hidden';
      return (
      <div key={prop.topic}>
        <div className ='topic' onClick={this.handleClick}>{prop.topic}</div>
        <div className= {`details ${something}`}>{prop.details}</div>
      </div>);
    })}
  </div>
    );
  }
}
