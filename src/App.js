import React, { useState, createContext, useEffect } from 'react';
import './App.css';
import 'animate.css';

import { Routes, Route } from "react-router-dom"

import Homepage from './pages/Homepage';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
			</Routes>
		</div>
	);
}

export default App;