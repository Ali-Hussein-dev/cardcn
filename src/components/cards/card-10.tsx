import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Placeholder = {
	title: <div className="bg-secondary h-8 max-w-40 w-full rounded-md" />,
	content: <div className="bg-secondary h-20 w-full rounded-md" />,
};
export const Card_10 = () => {
	return (
		<div className="relative overflow-hidden rounded-xl">
		<div
			className="absolute inset-1 z-0 rounded-lg"
			style={{
				backgroundImage:
					"repeating-linear-gradient(45deg, transparent, transparent 2px, var(--border) 2px, var(--border) 4px)",
				opacity: 0.5, // Adjust this value (0.0 to 1.0) to change opacity
			}}
		/>
			<Card className="z-10 isolate bg-transparent border-border border-2 ">
				<CardHeader>
					<CardTitle>{Placeholder.title}</CardTitle>
				</CardHeader>
				<CardContent>{Placeholder.content}</CardContent>
			</Card>
		</div>
	);
};
