import React, { Component } from 'react';


import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
			<div class="app-container">
				<Header />
				<Body />
				<Footer />
			</div>
    );
  }
}

export default App;
