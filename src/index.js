import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import mainStore from './reducers';
import Result from "./Result";
import Controls from "./Controls";

const store = createStore(mainStore);
store.subscribe(() => {
	console.log("subscribe currentValue: ", store.getState().counter.currentValue)
});

class IncDecApp extends React.Component {
	render() {
		return (
			<div >
				<h1>Supper App</h1>
				<Result/>
				<Controls/>
			</div>
		)
	}
}

ReactDOM.render(
	<Provider store={store}>
		<IncDecApp />
	</Provider>,
	document.getElementById('root')
);
