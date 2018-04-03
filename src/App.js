import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import 'popper.js/dist/umd/popper.js';
import $ from 'jquery';
import 'bootstrap';
import './styles/index.css';

import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

class App extends Component {

	constructor(props) {
		super(props);

		var pathArray = window.location.href.split( '/' );

		this.state = {
			siteUrl: pathArray[0] + '//' + pathArray[2]
		}
	}

	componentDidMount() {
		var siteUrl = this.state.siteUrl;
		$('a').each(function() {
			$(this).attr('target', (this.href.match( siteUrl )) ? '_self' :'_blank');
		});
	}

  render() {

    return (
			<Router>
				<div className="app-container">
					<Header />
					<Body />
					<Footer />
				</div>
			</Router>
    );
  }
}

export default App;
