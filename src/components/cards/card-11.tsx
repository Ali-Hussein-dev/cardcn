import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Placeholder = {
	title: <div className="bg-secondary h-8 max-w-40 w-full rounded-md" />,
	content: <div className="bg-secondary h-20 w-full rounded-md" />,
};

export const Card_11 = () => {
	return (
		<div className="relative overflow-hidden rounded-xl">
			<div
				className="absolute inset-2 z-0 rounded-lg"
				style={{
					backgroundImage:
						"radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)",
					backgroundSize: "16px 16px",
				}}
			/>
			<Card className="z-10 isolate bg-transparent border-border border-dashed border-2">
				<CardHeader>
					<CardTitle>{Placeholder.title}</CardTitle>
				</CardHeader>
				<CardContent>{Placeholder.content}</CardContent>
			</Card>
		</div>
	);
};
