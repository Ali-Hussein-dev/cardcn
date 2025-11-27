import { Image } from "@unpic/react";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Placeholder = {
	title: <div className="bg-secondary h-6 max-w-20 w-full rounded-md" />,
	description: <div className="bg-secondary h-5 max-w-56 w-full rounded-md" />,
	content: <div className="bg-secondary h-8 w-full rounded-md" />,
	action: <div className="bg-secondary h-6 w-full rounded-md px-2" >$</div>,
};

export const Card_23 = () => {
	return (
		<Card className="group relative overflow-hidden aspect-square pt-2">
			<div className="px-2">
				<div className="relative aspect-video">
					<Image
						layout="fullWidth"
						className="size-full object-cover absolute inset-0 z-0 rounded-t-lg"
						src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2198&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="..."
					/>
				</div>
			</div>
			<CardHeader>
				<CardTitle>{Placeholder.title}</CardTitle>
			</CardHeader>
			<CardContent>{Placeholder.content}</CardContent>
		</Card>
	);
};
