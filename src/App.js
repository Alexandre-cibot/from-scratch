import React, { Component } from 'react'
// Components
import Header from './components/Header.js'
import Shop from './components/shop/shop.js'

class App extends Component {
	render() {
		return (
			<div id="app">
				<Header title="Lorem" subtitle="Lorem"/>
				<Shop />
			</div>
		)
	}
}

export default App