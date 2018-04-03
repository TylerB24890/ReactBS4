import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import 'popper.js/dist/umd/popper.js';
import 'bootstrap';
import './styles/index.css';

import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

class App extends Component {

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
