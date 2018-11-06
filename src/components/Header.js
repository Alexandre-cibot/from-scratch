import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state =  {
      x: 4
    }
  }
  componentWillMount() {
    console.log('component will mount')
  }
  render() {
    return (
      <header style={{border: '1px solid black'}}>
        <h1>{this.props.title}</h1>
        <p>{this.props.subtitle}</p>
      </header>
    )
  }
}

export default Header;