import { Image } from "@unpic/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Placeholder = {
	title: <div className="bg-background h-5 max-w-20 w-full rounded-md" />,
	content: <div className="bg-background h-8 w-full rounded-md" />,
};

export const Card_19 = () => {
	return (
		<Card className="relative overflow-hidden py-10 aspect-square">
			<div className="flex flex-col">
				{/* overlay */}
				<div className="absolute inset-0 from-background via-background/40 to-background/5 bg-linear-to-t transition-all duration-300 z-10 isolate"></div>
				<Image
					layout="fullWidth"
					className="size-full object-fill absolute inset-0 z-0 isolate"
					src="https://images.unsplash.com/photo-1761483548106-9f225d1e4313?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="..."
				/>
			</div>
			<div className="isolate z-50 flex flex-col gap-2 relative grow justify-end">
				<CardHeader>
					<CardTitle>{Placeholder.title}</CardTitle>
				</CardHeader>
				<CardContent>{Placeholder.content}</CardContent>
			</div>
		</Card>
	);
};
