import React, { Component } from 'react';


import Header from './Components/Header';
import Body from './Components/Body';

class App extends Component {
  render() {
    return (
			<div class="app-container">
				<Header />
				<Body />
			</div>
    );
  }
}

export default App;
