import React from 'react';
import ProjectCard from './ProjectCard.jsx';

const projects = [
	{
		title: "3D Strip-Packing",
		description: "Packing algorithm for 3D boxes which optimizes for any combination of final container dimensions. Includes N-dimensional Constructive Solid Geometry (CSG) subtraction generator for Rust allowing the generalization of the main algorithm to N dimensions. O(N³) time, O(N) space",
		link: "https://github.com/R-Besson/n-dimensional-strip-packing",
		image: "https://github.com/R-Besson/n-dimensional-strip-packing/blob/main/img/example.png?raw=true",
		tags: ["Rust", "Python"],
		status: "Ongoing"
	},
	{
		title: "2D Strip-Packing",
		description: "C++ solver for the NP-Hard 2-Dimensional Strip-Packing problem implementing a novel method which led to personal research, with assistance from Prof. Danny Sleator | Carnegie Mellon University, USA and Prof. Malin Rau | Chalmers University of Technology, Sweden. Resulting in an asymptotically optimal, O(N³) time, O(N) space, algorithm",
		link: "https://github.com/R-Besson/strip-packing-cpp-rewritten",
		image: "https://github.com/R-Besson/strip-packing-cpp-rewritten/blob/main/src/example.png?raw=true",
		tags: ["C++", "Python", "Makefile"],
		status: "Ongoing"
	},
	{
		title: "Playlist Transfer",
		description: "Web app allowing for the transfer of playlists manually using authentication tokens between music services which allows for limitless transfer.",
		link: "https://github.com/R-Besson/playlist-transfer",
		tags: ["JavaScript", "HTML", "CSS", "APIs"]
	},
	{
		title: "Pathfinding Visualizer",
		description: "Pathfinding Algorithms Visualizer interface built in native JS/HTML/CSS.",
		link: "https://github.com/R-Besson/pathfinding.js",
		tags: ["JavaScript", "HTML", "CSS", "Animejs"]
	},
	{
		title: "This Website",
		description: "My github.io portfolio and website.",
		link: "https://github.com/R-Besson/r-besson.github.io",
		tags: ["Astro", "React", "JavaScript", "HTML", "CSS", "Tailwind"],
		status: "Ongoing"
	},
];

const ProjectsPanel = ({ isOpen, onClose }) => {
	return (
		<div
			onClick={onClose}
			className={`fixed inset-0 z-30 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className={`fixed bottom-0 right-0 h-full w-full max-w-4xl bg-transparent transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
			>
				<div className="p-4 md:p-8 h-full overflow-y-auto">
					<div className="flex justify-end mb-4">
						<button
							onClick={onClose}
							className="inline-flex items-center gap-4 text-4xl md:text-5xl text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors duration-300 cursor-pointer"
							aria-label="Close projects panel"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="size-10"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"></path>
							</svg>back
						</button>
					</div>

					<div>
						{projects.map((project, index) => (
							<ProjectCard key={index} project={project} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectsPanel;