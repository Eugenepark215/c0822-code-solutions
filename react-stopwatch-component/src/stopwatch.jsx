import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (!this.state.isClicked) {
      this.setState({ isClicked: true });
      setInterval(this.state.count + 1, 1000);
    } else if (this.state.isClicked) {
      this.setState({ isClicked: false });
    // clearInterval
    }
  }

  render() {
    if (!this.state.isClicked) {
      return (
        <div className='container'>
          <div className='background'>
            <p>{this.state.count}</p>
          </div>
          <i className="fa-solid fa-play" onClick={this.handleClick}></i>
        </div>
      );
    } return (
      <div className='container'>
          <div className='background'>
            <p>{this.state.count}</p>
          </div>
          <i className="fa-solid fa-pause" onClick={this.handleClick}></i>
        </div>
    );
  }
}
