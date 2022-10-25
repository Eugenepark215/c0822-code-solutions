import React from 'react';

export default class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: 0 };
  }

  handleClick() {
    this.setState(HotButton);
  }

  render() {
    if (this.state.isClicked < 3) {
      return <button className='three-clicks' onClick={(this.handleClick)}>HOT!</button>;
    } else if (this.state.isClicked < 6) {
      return <button className='six-clicks' onClick={(this.handleClick)}>HOT!</button>;
    } else if (this.state.isClicked < 9) {
      return <button className='nine-clicks' onClick={(this.handleClick)}>HOT!</button>;
    } else if (this.state.isClicked < 12) {
      return <button className='twelve-clicks' onClick={(this.handleClick)}>HOT!</button>;
    } else if (this.state.isClicked < 15) {
      return <button className='fifteen-clicks' onClick={(this.handleClick)}>HOT!</button>;
    } else {
      return <button className='eighteen-clicks' onClick={(this.handleClick)}>HOT!</button>;
    }
  }
}

function HotButton(props) {
  return props.isClicked++;
}
