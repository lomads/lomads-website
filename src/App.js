import React, { useState, createContext, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Homepage />
		</div>
	);
}

export default App;