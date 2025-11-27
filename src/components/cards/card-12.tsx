import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Placeholder = {
	title: <div className="bg-secondary h-8 max-w-40 w-full rounded-md" />,
	content: <div className="bg-secondary h-20 w-full rounded-md" />,
};

export const Card_12 = () => {
	return (
		<div className="relative overflow-hidden rounded-xl">
			<div
				className="absolute inset-0 -z-1 rounded-lg opacity-50"
				style={{
					backgroundImage: `
        linear-gradient(45deg, transparent 49%, var(--border) 49%, var(--border) 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, var(--border) 49%, var(--border) 51%, transparent 51%)
      `,
					backgroundSize: "22px 22px",
				}}
			/>
			<Card className="z-10 isolate bg-transparent border-border">
				<CardHeader>
					<CardTitle>{Placeholder.title}</CardTitle>
				</CardHeader>
				<CardContent>{Placeholder.content}</CardContent>
			</Card>
		</div>
	);
};
