import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import './static/i18n/config.js';
import StoreProvider from '@/store';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<StoreProvider>
		<Router>
			<App />
		</Router>
	</StoreProvider>
);
