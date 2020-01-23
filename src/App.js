import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <div className="Profile">
          <span>Samuel Josseanph Pinangay</span>
          <span>Jr Web Developer | Computer Science | Software Engineer</span>
          <span>New York, NY</span>

        </div>

      </div>
    );
  }
}

