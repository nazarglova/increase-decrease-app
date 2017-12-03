import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import mainStore from './reducers';
import IncDecApp from './IncDecApp/';

const store = createStore(mainStore);

ReactDOM.render(
	<Provider store={store}>
		<IncDecApp />
	</Provider>,
	document.getElementById('root')
);
