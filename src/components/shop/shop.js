import React, { Component } from 'react'
import PropTypes from 'prop-types'
import style from './shop.style.js'

class Shop extends Component {
  
	constructor(props) {
		super(props)
		this.state = {
			items: this.props.items || [ 'item1', 'item2' ]
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
		if (item.trim().length) {
			const items = [ ...this.state.items ]
			items.push(item)
			this.setState({ items })
			this.input_item.current.value = ''	
		}
	}
	
	displayItems() {
		return this.state.items.map(
			(item, idx) => {
				return <li key={idx}>{item}</li>
			}
		)	
	}
	
	handleKeyDown(event) {
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

Shop.propTypes = {
	items: PropTypes.array
}
export default Shop