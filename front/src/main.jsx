import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './css/index.css';

// import store from './redux/store.js';
// import {Provider} from 'react-redux';

import {AuthProvider} from './context/authContext.jsx';

import {BrowserRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
	// <Provider store={store}>
	<AuthProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</AuthProvider>
	// </Provider>
);
