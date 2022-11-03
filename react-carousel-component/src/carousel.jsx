import React from 'react';
const imagesArray = ['images/007.png', 'images/158.png', 'images/258.png', 'images/393.png', 'images/501.png', 'images/656.png', 'images/728.png', 'images/816.png'];

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.chevronClickRight = this.chevronClickRight.bind(this);
    this.chevronClickLeft = this.chevronClickLeft.bind(this);
    this.state = {
      index: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ index: this.state.index + 1 });
      if (this.state.index === 7) {
        this.setState({ index: 0 });
      }
    }, 3000);
  }

  autoPlay() {
    this.interval = setInterval(() => {
      this.setState({ index: this.state.index + 1 });
      if (this.state.index === 7) {
        this.setState({ index: 0 });
      }
    }, 3000);
  }

  handleClick(event) {
    if (event.target.matches('button')) {
      const newIndex = Number(event.target.getAttribute('id'));
      this.setState({ index: newIndex });
    }
    clearInterval(this.interval);
    this.autoPlay();
  }

  chevronClickRight(event) {
    if (this.state.index === imagesArray.indexOf('images/816.png')) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: this.state.index + 1 });
    }
    clearInterval(this.interval);
    this.autoPlay();
  }

  chevronClickLeft(event) {
    if (this.state.index === imagesArray.indexOf('images/007.png')) {
      this.setState({ index: 7 });
    } else {
      this.setState({ index: this.state.index - 1 });
    }
    clearInterval(this.interval);
    this.autoPlay();
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='column-one-third'>
            <i id="chevron-left" className="fa-solid fa-chevron-left fa-2xl" onClick={this.chevronClickLeft}></i>
          </div>
          <div className='column-one-third'>
            {imagesArray.map(image => {
              const something = imagesArray.indexOf(image) === this.state.index ? '' : 'hidden';
              return (<img key={image} className={`${something}`} src={image}></img>);
            })}
          </div>
          <div className='column-one-third'>
            <i id="chevron-right" className="fa-solid fa-chevron-right fa-2xl" onClick={this.chevronClickRight}></i>
          </div>
        </div>
        <div className='row justify-center space-between'>
          {imagesArray.map((image, index) => {
            const something = imagesArray.indexOf(image) === this.state.index ? 'black' : 'color-none';
            return (
                <div className='column' key={image}>
                  <button id={index} className={`${something}`} onClick={this.handleClick}></button>
                </div>
            );
          })}
        </div>
      </div>
    );
  }
}
