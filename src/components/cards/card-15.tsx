import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Placeholder = {
	title: <div className="bg-secondary h-8 max-w-40 w-full rounded-md" />,
	content: <div className="bg-secondary h-20 w-full rounded-md" />,
};

export const Card_15 = () => {
	return (
		<div className="relative">
			<div className="absolute scale-x-95 inset-0 -rotate-[5deg] rounded-xl border-border/50 bg-muted/30 py-10 z-0 isolate border" />
			<Card className="z-10 isolate">
				<CardHeader>
					<CardTitle>{Placeholder.title}</CardTitle>
				</CardHeader>
				<CardContent>{Placeholder.content}</CardContent>
			</Card>
		</div>
	);
};


// make input squirrle and show them on Formcn