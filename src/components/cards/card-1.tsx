import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const Placeholder = {
	title: <div className="bg-accent h-8 max-w-40 w-full rounded-md" />,
	content: <div className="bg-accent h-20 w-full rounded-md" />,
};

export const Card_1 = () => {
	return (
		<Card className="border border-primary relative shadow-[4px_4px_0px_0px_var(--primary)]">
			<CardHeader>
				<CardTitle>{Placeholder.title}</CardTitle>
			</CardHeader>
			<CardContent>
				{Placeholder.content}
			</CardContent>
		</Card>
	);
};
