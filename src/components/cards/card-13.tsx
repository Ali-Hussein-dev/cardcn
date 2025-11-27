import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Placeholder = {
	title: <div className="bg-white h-8 max-w-40 w-full rounded-md" />,
	content: <div className="bg-white h-20 w-full rounded-md" />,
};

export const Card_13 = () => {
	return (
		<div className="relative overflow-hidden rounded-xl bg-white">
			<div
				className="absolute inset-0 rounded-lg"
				style={{
					backgroundImage: `
        radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
        radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)`,
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
