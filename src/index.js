import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
// Once the store is created, we can make it available to our React components 
// by putting a React-Redux <Provider> around our application in src/index.js
ReactDOM.render(
	<React.StrictMode>
		{/* pass our store as a prop through our provider */}
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
