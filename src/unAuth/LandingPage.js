import React from 'react';
import './LandingPage.css';

export default function LandingPage() {
	return (
		<main className="landing-root">
			<div className="landing-card">
				<h1 className="landing-title">Hello Landing</h1>
				<p className="landing-sub">Welcome to the landing page.</p>
				<a className="landing-cta" href="/">Go home</a>
			</div>
		</main>
	);
}

