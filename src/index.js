import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { routingStore, history } from './Stores/RoutingStore';

const stores = {
	routing: routingStore
};

ReactDOM.render((
	<Provider {...stores}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>
), document.getElementById('root'));
registerServiceWorker();
