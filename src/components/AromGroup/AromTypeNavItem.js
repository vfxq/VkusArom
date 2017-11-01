import React, {Component} from 'react'
import {Link} from 'react-router-dom'

function AromTypeNavItem(props){
	const {aromItem, aromCat, match} = props

	return(
		<div>
			<Link to={`${match.url}/${aromItem.acf.struct}`} className={`structItem green ${aromItem.acf.struct}`}>{aromItem.title.rendered}</Link>
		</div>
	)
}

export default AromTypeNavItem