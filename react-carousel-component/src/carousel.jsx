import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      count: 'images/007.png'
    };
  }

  handleClick(event) {
    if (event.target.getAttribute('id') !== this.state.count) {
      this.setState({ count: event.target.getAttribute('id') });
    }
  }

  render() {
    // this.interval = setInterval(() => {
    //   this.setState({ count: this.state.count + 1 });
    // }, 1000);
    const imagesArray = ['images/007.png', 'images/158.png', 'images/258.png', 'images/393.png', 'images/501.png', 'images/656.png', 'images/728.png', 'images/816.png'];
    return (
      <div className='container'>
        <div className='row'>
          <div className='column-one-third'>
            <i id="chevron-left" className="fa-solid fa-chevron-left fa-2xl"></i>
          </div>
          <div className='column-one-third'>
            {imagesArray.map(image => {
              const something = image === this.state.count ? '' : 'hidden';
              return (<img key={image} className={`${something}`} src={image}></img>);
            })}
          </div>
          <div className='column-one-third'>
            <i id="chevron-right" className="fa-solid fa-chevron-right fa-2xl"></i>
          </div>
        </div>
        <div className='row justify-center space-between'>
          <div className='column'>
            <button className='first' id="images/007.png"></button>
          </div>
          <div className='column'>
            <button id="images/158.png" onClick={this.handleClick}></button>
          </div>
          <div className='column'>
            <button id="images/258.png" onClick={this.handleClick}></button>
          </div>
          <div className='column'>
            <button id="images/393.png" onClick={this.handleClick}></button>
          </div>
          <div className='column'>
            <button id="images/501.png" onClick={this.handleClick}></button>
          </div>
          <div className='column'>
            <button id="images/656.png" onClick={this.handleClick}></button>
          </div>
          <div className='column'>
            <button id="images/728.png" onClick={this.handleClick}></button>
          </div>
          <div className='column'>
            <button id="images/816.png" onClick={this.handleClick}></button>
          </div>
        </div>
      </div>
    );
  }
}
