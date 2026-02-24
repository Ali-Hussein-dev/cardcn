import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Placeholder = {
	title: <div className="bg-background h-8 max-w-40 w-full rounded-md" />,
	content: <div className="bg-background h-20 w-full rounded-md" />,
};

export const Card_14 = () => {
	return (
		<div className="relative overflow-hidden rounded-xl bg-background">
			<div
				className="absolute inset-0 rounded-lg"
				style={{
					backgroundImage: `
        radial-gradient(ellipse at 20% 30%, rgba(56, 189, 248, 0.2) 0%, transparent 60%),
        radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.1) 0%, transparent 70%),
        radial-gradient(ellipse at 60% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
        radial-gradient(ellipse at 40% 80%, rgba(59, 189, 248, 0.1) 0%, transparent 65%)
      `,
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
