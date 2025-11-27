import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Placeholder = {
	title: <div className="bg-accent h-8 max-w-40 w-full rounded-md" />,
	content: <div className="bg-accent h-20 w-full rounded-md" />,
};

export const Card_1 = () => {
	return (
		<Card className="shadow-[5px_5px_0px_0px_var(--border)]">
			<CardHeader>
				<CardTitle>{Placeholder.title}</CardTitle>
			</CardHeader>
			<CardContent>{Placeholder.content}</CardContent>
		</Card>
	);
};
