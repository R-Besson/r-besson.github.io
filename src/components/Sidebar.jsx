import React, { useState, useEffect } from 'react';
import ProjectsPanel from './ProjectsPanel.jsx';

const Sidebar = () => {
	const [isProjectsOpen, setProjectsOpen] = useState(false);
	const openPanel = () => {
		setProjectsOpen(true);
	};
	
	const closePanel = () => {
		setProjectsOpen(false);
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

	const navLinkClasses = isProjectsOpen
		? 'opacity-0 pointer-events-none'
		: 'opacity-100 pointer-events-auto';

	return (
		<>
			<nav className="fixed top-0 right-0 z-20 h-full flex items-start justify-end pointer-events-none">
				<div className="flex flex-col items-end gap-2 md:gap-4 p-4 md:p-8 text-right">
					<button
						onClick={openPanel}
						disabled={isProjectsOpen}
						className={`text-4xl md:text-6xl lg:text-7xl text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-all duration-300 ease-in-out cursor-pointer ${navLinkClasses}`}
					>
						projects
					</button>
					<a
						href="mailto:romainbesson8@gmail.com"
						tabIndex={isProjectsOpen ? -1 : 0}
						className={`text-4xl md:text-6xl lg:text-7xl text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-all duration-300 ease-in-out ${navLinkClasses}`}
					>
						contact
					</a>
					<a
						href="https://github.com/R-Besson"
						target="_blank"
						rel="noopener noreferrer"
						tabIndex={isProjectsOpen ? -1 : 0}
						className={`text-4xl md:text-6xl lg:text-7xl text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-all duration-300 ease-in-out ${navLinkClasses}`}
					>
						github
					</a>
				</div>
			</nav>
			<ProjectsPanel isOpen={isProjectsOpen} onClose={closePanel} />
		</>
	);
};

export default Sidebar;