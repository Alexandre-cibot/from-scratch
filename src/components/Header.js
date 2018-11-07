import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
	constructor(props) {
		super(props)
		this.state =  {
			arr: []
		}
		this.changeArr = this.changeArr.bind(this)
	}
	UNSAFE_componentWillMount() {
		console.log('component will mount')
	}
	changeArr() {
		// Only to see if babbel will convert it to .concat function.clear
		const newArr = [1,2,3]
		this.setState({arr: [...newArr]})
	}
	render() {
		return (
			<header onClick={this.changeArr} style={{border: '1px solid black'}}>
				<h1>{this.props.title}</h1>
				<p>{this.props.subtitle}</p>
				<ul>
					{
						this.state.arr.map((e, idx) => <li key={idx}>{e}</li>)
					}
				</ul>
			</header>
		)
	}
}

Header.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string
}

export default Header