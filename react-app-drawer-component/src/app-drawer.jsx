import React from 'react';

export default class AppDrawer extends React.Component {
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

  handleClickMenuIcon() {

  }

  render() {
    if (!this.state.isClicked) {
      return (
      <div>
        <i className="fa-solid fa-bars" onClick={this.handleClick}></i>
      </div>
      );
    } else if (this.state.isClicked) {
      return (
      <div className='container'>
        <div className='menu'>
          <h1 onClick={this.handleClick}>Menu</h1>
          <h3 onClick={this.handleClick}>About</h3>
          <h3 onClick={this.handleClick}>Get Started</h3>
          <h3 onClick={this.handleClick}>Sign In</h3>
        </div>
        <div className='transparent' onClick={this.handleClick}></div>
      </div>
      );
    }
  }
}
