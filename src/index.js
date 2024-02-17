import React from 'react';
import ReactDOM from 'react-dom/client';
//import reportWebVitals from './reportWebVitals';

import '../src/css/styles.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Login, ResidentInfo } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<BrowserRouter>
		<Routes>
			<Route path='/resident-info/*' element={<ResidentInfo />} />
			<Route path='/' element={<Home/>} />
			<Route path='/login' element={<Login />} />
		</Routes>
	</BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
