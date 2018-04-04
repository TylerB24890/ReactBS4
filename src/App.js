import React, { Component } from 'react';

import 'popper.js/dist/umd/popper.js';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
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
			<div className="app-container">
				<Header location={this.props.location}/>
				<Body />
				<Footer />
			</div>
    );
  }
}

export default App;
