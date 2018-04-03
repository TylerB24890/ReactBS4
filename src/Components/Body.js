import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../Pages/Home';
import About from '../Pages/About';

const Body = () => (
	<div>
		<Route exact path="/" component={Home} />
		<Route path="/about" component={About} />
	</div>
)

export default Body;
