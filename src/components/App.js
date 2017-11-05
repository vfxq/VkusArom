import React, {Component} from 'react' 
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import Menu from './Menu'
import ImgMenu from './ImgMenu'
import About from './About'
import Contacts from './Contacts'
import News from './News'
import Assortment from './Assortment'
import Distribs from './Distribs'
import Vendors from './Vendors'
import Footer from './Footer'
import {loadContacts} from '../ducks/contacts'
import {CONTACTS} from '../config.js'
import history from '../history'
import AromGroup from './AromGroup'
import NotFound from './NotFound'

class App extends Component {

	componentDidMount(){
		this.props.loadContacts(CONTACTS)
	}
	
	render(){

		return (
			<div>
				<ConnectedRouter history={history}>
					<div>
						<Route path="/" component={Menu} />
						<Route path="/" component={ImgMenu} exact/>
						<Route path="/" component={About} exact/>
						<Route path="/" component={News} exact/>
						<Route path="/news" component={ImgMenu} exact/>
						<Route path="/news" component={About} exact/>
						<Route path="/news" component={News} exact/>
						<Route path="/catalogue" component={ImgMenu } exact/>
						<Route path="/catalogue/:type" component={AromGroup} />
						<Route path="/assortment" component={Assortment} exact/>
						<Route path="/distribs" component={Distribs} exact/>
						<Route path="/vendors" component={Vendors} exact/>
						<Route path="/contacts" component={Contacts} exact/>	
					</div>					
				</ConnectedRouter>
				<Footer />
			</div>
		)
	}
}

export default connect(null, {loadContacts})(App)