import React, { Suspense, lazy } from 'react';
import './App.css';
import 'animate.css';

import { Routes, Route } from "react-router-dom"
import LogoLoader from './components/Loader';

function App() {
	const Homepage = lazy(() => import('./pages/Homepage'));
	const EarlyAccessForm = lazy(() => import('./pages/Homepage/forms/EarlyAccess'));
	const PartnerForm = lazy(() => import('./pages/Homepage/forms/Partner'));
	const PrivacyPolicy = lazy(() => import('./pages/Privacy'));
	const TermsOfService = lazy(() => import('./pages/Tnc'));

	return (
		<div className="App">
			<Suspense fallback={<LogoLoader />}>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/earlyAccess" element={<EarlyAccessForm />} />
					<Route path="/partner" element={<PartnerForm />} />
					<Route path="/termsOfService" element={<TermsOfService />} />
					<Route path="/privacyPolicy" element={<PrivacyPolicy />} />
				</Routes>
			</Suspense>
		</div>
	);
}

export default App;