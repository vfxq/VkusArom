import React from 'react'
import Menu from '../Menu'
import ImgMenu from '../ImgMenu'
import About from '../About'
import News from '../News'

export default function RouteRoot(props){
	return (
		<div>
			<ImgMenu />
			<About />
			<News {...props}/>
		</div>
	)
}