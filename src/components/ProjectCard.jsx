import React from 'react';

const ProjectCard = ({ project }) => {
	const hasLink = !!project.link;
	const Tag = hasLink ? 'a' : 'div';
	const tagProps = hasLink
		? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
		: {};

	return (
		<Tag
			{...tagProps}
			className="group block p-4 mb-4 rounded-sm bg-[var(--color-primary)]/5 backdrop-blur-sm transition-all duration-300 hover:bg-[var(--color-primary)]/10 hover:shadow-lg"
		>
			{project.image && (
				<img
					src={project.image}
					alt={`Screenshot of ${project.title}`}
					className="w-full h-auto max-h-72 object-cover mb-3 rounded-md"
					loading="lazy"
				/>
			)}

			<div className="flex justify-between items-baseline mb-2">
				<h3 className="text-2xl md:text-3xl text-[var(--color-primary)] transition-colors duration-300 group-hover:text-[var(--color-accent)]">
					{project.title}
					{hasLink && <span className="inline-block ml-2 text-xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>}
				</h3>
				{project.status && (
					<span className="border border-[var(--color-primary)]/50 px-2 py-1 text-xs text-[var(--color-secondary)] whitespace-nowrap rounded-full">
						{project.status}
					</span>
				)}
			</div>

			{project.tags && project.tags.length > 0 && (
				<div className="flex flex-wrap gap-2 mb-3">
					{project.tags.map(tag => (
						<span key={tag} className="border border-[var(--color-primary)]/50 px-2.5 py-1 text-xs text-[var(--color-secondary)] rounded-full">
							{tag}
						</span>
					))}
				</div>
			)}

			<p className="font-main text-[var(--color-secondary)] text-base">
				{project.description}
			</p>
		</Tag>
	);
};

export default ProjectCard;