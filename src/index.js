import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import mainStore from './reducers';
import Result from "./Result";
import Controls from "./Controls";

const store = createStore(mainStore);

const IncDecApp = (props) => {
	return (
		<div className="inc-dec-app">
			<h1>Supper App</h1>
			<Result/>
			<Controls/>
		</div>
	)
};

ReactDOM.render(
	<Provider store={store}>
		<IncDecApp />
	</Provider>,
	document.getElementById('root')
);
