import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();

const stores = {
	routing: routingStore
};

const history = syncHistoryWithStore(browserHistory, routingStore);

ReactDOM.render((
	<Provider {...stores}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>
), document.getElementById('root'));
registerServiceWorker();
