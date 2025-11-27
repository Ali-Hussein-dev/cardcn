export const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		// biome-ignore lint/correctness/useUniqueElementIds: <explanation>
		<div
			id="start-of-content"
			className="max-w-6xl mx-auto px-2 md:px-5 lg:px-10"
		>
			<div className="grid lg:grid-cols-2 gap-x-4 md:gap-x-8 lg:gap-x-20">
				{children}
			</div>
		</div>
	);
};
