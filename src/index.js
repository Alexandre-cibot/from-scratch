import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// Components
import Header from './components/Header.js';

class App extends Component {
  render() {
    return (
      <Header title="Titre du Header" subtitle="Subtitle du header"/>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
