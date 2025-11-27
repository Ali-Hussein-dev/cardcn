import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Placeholder = {
	title: <div className="bg-muted h-6 max-w-20 w-full rounded-md" />,
	content: <div className="bg-secondary h-20 w-full rounded-md" />,
};

export const Card_26 = () => {
	return (
		<div className="border-4 rounded-xl dark:border-card border-foreground/80 p-px dark:p-0.5">
			<Card className="rounded-lg border-none bg-foreground/80 dark:bg-card shadow-none">
				<CardHeader>
					<CardTitle>{Placeholder.title}</CardTitle>
				</CardHeader>
				<CardContent>{Placeholder.content}</CardContent>
			</Card>
		</div>
	);
};
