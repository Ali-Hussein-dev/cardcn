import { Image } from "@unpic/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Placeholder = {
	title: <div className="bg-background h-5 max-w-20 w-full rounded-md" />,
	content: <div className="bg-background h-8 w-full rounded-md" />,
};

export const Card_20 = () => {
	return (
		<Card className="group relative overflow-hidden aspect-square">
			{/* Background image */}
			<Image
				layout="fullWidth"
				className="size-full object-cover absolute inset-0 z-0"
				src="https://images.unsplash.com/photo-1651863548695-b474e99ffcb9?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHByb2R1Y3RzfGVufDB8fDB8fHwy"
				alt="Abstract gradient background"
			/>
			{/* Overlay gradient */}
			<div className="absolute inset-0 bg-background/5 z-10 group-hover:bg-transparent transition-all duration-300 group-hover:backdrop-blur-none"></div>
			<div className="isolate z-50 flex flex-col gap-2 relative grow justify-end">
				<CardHeader>
					<CardTitle>{Placeholder.title}</CardTitle>
				</CardHeader>
				<CardContent>{Placeholder.content}</CardContent>
			</div>
		</Card>
	);
};
