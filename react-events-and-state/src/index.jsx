import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    const isClicked = this.state.isClicked;
    let button;
    if (isClicked) {
      button = <ThanksButton onClick={this.handleClick}/>;
    } else {
      button = <ClickButton onClick={this.handleClick}/>;
    }
    return button;
  }
}

function ClickButton(props) {
  return (
    <button onClick={props.onClick}>
      Click Me!
    </button>
  );
}

function ThanksButton(props) {
  return (
    <button onClick={props.onClick}>
      Thanks!
    </button>
  );
}
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<CustomButton />);
