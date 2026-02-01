import React from 'react';
import './LandingPage.css';
import NavBar from './components/NavBar';
import Bumpups from './components/Bumpups';
import Footer from './components/Footer';
import Timestamp from './components/Timestamp';

const LandingPage = () => {
	return (
		<div className="landing-page-container">
			<div className="landing-content-wrapper">
				<NavBar />
				<Bumpups />
				<Timestamp />
				<Footer />
			</div>
		</div>
	);
};

export default LandingPage;

