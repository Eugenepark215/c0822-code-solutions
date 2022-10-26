import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      error: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.password === '') {
      this.setState({ error: 'A password is required' });
    } else if (this.state.password.length < 8) {
      this.setState({ error: 'Your password is too short' });
    } else {
      this.setState({ error: '' });
    }
  }

  render() {
    if (this.state.error !== '') {
      return (
        <div className='swag'>
          <div className='container'>
            <form onSubmit={this.handleSubmit}>
              <label>Password</label>
              <input type="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
              <p>{this.state.error}</p>
            </form>
          </div>
          <i className="fa-solid fa-xmark"></i>
        </div>
      );
    } else if (this.state.password.length >= 8) {
      return (
        <div className='swag'>
          <div className='container'>
            <form onSubmit={this.handleSubmit}>
              <label>Password</label>
              <input type="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
              <p>{this.state.error}</p>
            </form>
          </div>
          <i className="fa-solid fa-check"></i>
        </div>
      );
    }
    return (
      <div className='container'>
      <form onSubmit={this.handleSubmit}>
        <label>Password</label>
        <input type="password" value={this.state.password} onChange={this.handlePasswordChange}></input>
      </form>
    </div>
    );
  }
}
