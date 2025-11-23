import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Placeholder = {
	title: <div className="bg-secondary h-8 max-w-40 w-full rounded-md" />,
	content: <div className="bg-secondary h-20 w-full rounded-md" />,
};

export const Card_17 = () => {
	return (
		<div className="relative h-full">
			<div
				className="absolute size-full rounded-xl border bg-muted/30 scale-y-[.75] top-6 scale-x-[1.01]"
				style={{
					transformOrigin: "top center",
				}}
			/>
			<Card className="scale-95">
				<CardHeader>
					<CardTitle>{Placeholder.title}</CardTitle>
				</CardHeader>
				<CardContent>{Placeholder.content}</CardContent>
			</Card>
		</div>
	);
};
