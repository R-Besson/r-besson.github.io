import React, { useState, useEffect } from 'react';
import ProjectsPanel from './ProjectsPanel.jsx';

const Sidebar = () => {
	const [isProjectsOpen, setProjectsOpen] = useState(false);

	const toggleProjectsPanel = () => {
		setProjectsOpen(!isProjectsOpen);
	};

	useEffect(() => {
		if (isProjectsOpen) {
			document.body.classList.add('sidebar-open');
		} else {
			document.body.classList.remove('sidebar-open');
		}
		return () => {
			document.body.classList.remove('sidebar-open');
		};
	}, [isProjectsOpen]);

	return (
		<>
			<nav className="fixed top-0 right-0 z-20 h-full flex items-start justify-end pointer-events-none">
				<div className="flex flex-col items-end gap-2 md:gap-4 p-4 md:p-8 text-right">
					<button
						onClick={toggleProjectsPanel}
						className="text-4xl md:text-6xl lg:text-7xl text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors duration-300 pointer-events-auto cursor-pointer"
					>
						projects
					</button>
					<a
						href="mailto:romainbesson8@gmail.com"
						className="text-4xl md:text-6xl lg:text-7xl text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors duration-300 pointer-events-auto"
					>
						contact
					</a>
					<a
						href="https://github.com/R-Besson"
						target="_blank"
						rel="noopener noreferrer"
						className="text-4xl md:text-6xl lg:text-7xl text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors duration-300 pointer-events-auto"
					>
						github
					</a>
				</div>
			</nav>
			<ProjectsPanel isOpen={isProjectsOpen} onClose={toggleProjectsPanel} />
		</>
	);
};

export default Sidebar;