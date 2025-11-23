import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Placeholder = {
	title: <div className="bg-secondary h-8 max-w-40 w-full rounded-md" />,
	content: <div className="bg-secondary h-20 w-full rounded-md" />,
};

export const Card_16 = () => {
	return (
		<div className="relative">
			<div
				className="bg-muted/20 absolute size-full rounded-xl border scale-y-[1.16] scale-x-90 -top-4 border-border/50"
				style={{
					transformOrigin: "top center",
				}}
			/>
			<Card className="z-10 isolate">
				<CardHeader>
					<CardTitle>{Placeholder.title}</CardTitle>
				</CardHeader>
				<CardContent>{Placeholder.content}</CardContent>
			</Card>
		</div>
	);
};
