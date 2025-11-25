import React from 'react';
import './LandingPage.css';
import NavBar from './components/NavBar';
import Bumpups from './components/Bumpups';
import Footer from './components/Footer';
import Timestamp from './components/Timestamp';

export default function LandingPage() {
	return (
		<div className="landing-root">
			<div className="landing-card">
				<div className="landing-page-container">
					<NavBar />
					<h1 className="landing-title">Hello Landing Page</h1>
					<Bumpups />
					<Timestamp />
					<Footer />
				</div>
			</div>
		</div>
	);
}

