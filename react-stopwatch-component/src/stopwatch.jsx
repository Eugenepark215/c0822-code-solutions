import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickBackGround = this.handleClickBackGround.bind(this);
    // another eventlister for body
  }

  handleClick() {
    if (!this.state.isClicked) {
      this.setState({ isClicked: true });
      this.interval = setInterval(() => {
        this.setState({ count: this.state.count + 1 });
      }, 1000);
    } else if (this.state.isClicked) {
      this.setState({ isClicked: false });
      clearInterval(this.interval);
    }
  }

  handleClickBackGround() {
    if (!this.state.isClicked) {
      this.setState({ count: 0 });
    }
  }

  render() {
    if (!this.state.isClicked) {
      return (
        <div className='container'>
          <div className='background' onClick={this.handleClickBackGround}>
            <p>{this.state.count}</p>
          </div>
          <i className="fa-solid fa-play" onClick={this.handleClick}></i>
        </div>
      );
    } return (
      <div className='container'>
          <div className='background' onClick={this.handleClickBackGround}>
            <p>{this.state.count}</p>
          </div>
          <i className="fa-solid fa-pause" onClick={this.handleClick}></i>
        </div>
    );
  }
}
