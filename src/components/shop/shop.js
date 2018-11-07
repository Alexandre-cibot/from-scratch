import React, { Component } from 'react'
import style from './shop.style.js'

class Shop extends Component {
  
	constructor(props) {
		super(props)
		this.state = {
			items: [ 'item1', 'item2' ]
		}
		// Refs 
		this.input_item = React.createRef()
		// Binding
		this.addItem = this.addItem.bind(this)
		this.displayItems = this.displayItems.bind(this)
		this.handleKeyDown = this.handleKeyDown.bind(this)
	}
  
	addItem() {
		const item = this.input_item.current.value
		const items = [ ...this.state.items ]
		items.push(item)
		this.setState({ items })
		this.input_item.current.value = ''
    
	}
	
	displayItems() {
		const listItems = this.state.items.map((item, idx) => <li key={idx}>{item}</li>)	
		return listItems
	}
	
	handleKeyDown(event) {
		console.log('event.key', event.key)
		if (event.key === 'Enter') {
			this.addItem()
		}
	}	
	
	render() {
		return (
			<div style={style.shop}>
				<input type="text" ref={this.input_item} onKeyDown={this.handleKeyDown} placeholder="Your text"/>
				<button onClick={this.addItem}>Push</button>
				<ul>
					{this.displayItems()}
				</ul>
			</div>
		)
	}
}

export default Shop