import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from '../Pages/Home';
import About from '../Pages/About';

class Body extends Component {
	render() {
		return(
			<div>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
			</div>
		)
	}
}

export default Body;
