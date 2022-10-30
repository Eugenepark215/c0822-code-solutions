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
    if (!this.state.isClicked) {
      return (
  <>{this.props.map(prop => (
    <>
    <div className ='topic' key={prop.topic} onClick={this.handleClick}>{prop.topic}</div>
    <div className='details' key={prop.details}>{prop.details}</div>
    </>
  ))}
  </>
      );
    }
  }
}
