import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: true };
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
      <div className='container'>
        <div className='background-off'>
          <button onClick={(this.handleClick)}></button>
        </div>
        <p className='on'>OFF</p>
      </div>
      );
    }
    return (
      <div className='container'>
        <div className='background-on'>
          <button onClick={(this.handleClick)}></button>
        </div>
        <p className='off'>ON</p>
      </div>
    );
  }
}
