import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faComments,
	faVideo,
	faLaptopCode,
	faArrowUpFromBracket,
	faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import './Bumpups.css';

const cards = [
	{
		title: 'Local Videos',
		icon: faArrowUpFromBracket,
		url: 'https://bumpups.com/local-feature'
	},
	{
		title: 'Video Chat',
		icon: faComments,
		url: 'https://bumpups.com/workspace-feature'
	},
	{
		title: 'AI YouTube',
		icon: faVideo,
		url: 'https://bumpups.com/creator-feature'
	},
	{
		title: 'API',
		icon: faLaptopCode,
		url: 'https://bumpups.com/startup'
	}
];

const Bumpups = () => {
	return (
		<section className="bumpups-grid" aria-label="Bumpups features">
			{cards.map((card) => (
				<article className="bumpups-card" key={card.title}>
					<div className="bumpups-content">
						<span className="bumpups-tag">{card.title}</span>
						<a
							className="bumpups-cta"
							href={card.url}
							target="_blank"
							rel="noreferrer"
						>
							<span>Learn more</span>
							<span className="cta-icon" aria-hidden="true">
								<FontAwesomeIcon icon={faArrowRight} />
							</span>
						</a>
					</div>
					<div className="bumpups-illustration" aria-hidden="true">
						<FontAwesomeIcon icon={card.icon} size="3x" />
					</div>
				</article>
			))}
		</section>
	);
};

export default Bumpups;

