import { Image } from "@unpic/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Placeholder = {
	title: <div className="bg-muted h-6 max-w-20 w-full rounded-md" />,
	content: <div className="bg-muted h-8 w-full rounded-md" />,
};

export const Card_22 = () => {
	return (
		<Card className="group relative overflow-hidden aspect-square pt-0">
			<div className="relative aspect-video">
				<Image
					layout="fullWidth"
					className="size-full object-cover absolute inset-0 z-0"
					src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2198&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Abstract gradient background"
				/>
			</div>
			<CardHeader>
				<CardTitle>{Placeholder.title}</CardTitle>
			</CardHeader>
			<CardContent>{Placeholder.content}</CardContent>
		</Card>
	);
};
