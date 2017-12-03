import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import mainStore from '../../reducers';
import './styles.css';
import Result from "./Result";
import Controls from "./Controls";

const store = createStore(mainStore);

const IncDecApp = (props) => {
	return (
		<Provider store={store}>
			<div className="inc-dec-app">
				<h1>Supper App</h1>
				<Result />
				<Controls />
			</div>
		</Provider>
	)
};

export default IncDecApp;