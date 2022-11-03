import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    this.state = {
      current: 0
    };
    //     this.handleClick() {
    // .this.setState()
    //     }
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='column-one-third'>
            <i id="chevron-left" className="fa-solid fa-chevron-left fa-2xl"></i>
          </div>
          <div className='column-one-third '>
            <img src="images/007.png"></img>
          </div>
          <div className='column-one-third'>
            <i id="chevron-right" className="fa-solid fa-chevron-right fa-2xl"></i>
          </div>
        </div>
        <div className='row justify-center space-between'>
          <div className='column'>
            <button className='first' id="first"></button>
          </div>
          <div className='column'>
            <button id="second"></button>
          </div>
          <div className='column'>
            <button id="third"></button>
          </div>
          <div className='column'>
            <button id="fourth"></button>
          </div>
          <div className='column'>
            <button id="fifth"></button>
          </div>
          <div className='column'>
            <button id="sixth"></button>
          </div>
          <div className='column'>
            <button id="seventh"></button>
          </div>
          <div className='column'>
            <button id="eighth"></button>
          </div>
        </div>
      </div>
    );
  }
}
