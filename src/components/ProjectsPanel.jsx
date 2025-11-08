import React from 'react';
import ProjectCard from './ProjectCard.jsx';

const projects = [
	{
		title: "3D Strip-Packing",
		description: "Packing algorithm for 3D boxes which optimizes for any combination of final container dimensions. Includes N-dimensional Constructive Solid Geometry (CSG) subtraction generator for Rust allowing the generalization of the main algorithm to N dimensions. O(N³) time, O(N) space",
		link: "https://github.com/R-Besson/n-dimensional-strip-packing",
		image: "https://github.com/R-Besson/n-dimensional-strip-packing/blob/main/img/example.png?raw=true",
		tags: ["Rust", "Python"],
		status: "ONGOING"
	},
	{
		title: "2D Strip-Packing",
		description: "C++ solver for the NP-Hard 2-Dimensional Strip-Packing problem implementing a novel method which led to personal research, with assistance from Prof. Danny Sleator | Carnegie Mellon University, USA and Prof. Malin Rau | Chalmers University of Technology, Sweden. Resulting in an asymptotically optimal, O(N³) time, O(N) space, algorithm",
		link: "https://github.com/R-Besson/strip-packing-cpp-rewritten",
		image: "https://github.com/R-Besson/strip-packing-cpp-rewritten/blob/main/src/example.png?raw=true",
		tags: ["C++", "Python", "Makefile"],
		status: "ONGOING"
	}
];

const ProjectsPanel = ({ isOpen, onClose }) => {
	return (
		<div
			className={`fixed inset-0 z-30 transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
		>
			<div
				className={`fixed bottom-0 right-0 h-full w-full max-w-4xl bg-transparent backdrop-blur-xl shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
			>
				<div className="p-4 md:p-8 h-full overflow-y-auto">
					<div className="flex justify-end mb-4">
						<button
							onClick={onClose}
							className="text-4xl md:text-5xl text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors duration-300 cursor-pointer"
							aria-label="Close projects panel"
						>
							&larr; back
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