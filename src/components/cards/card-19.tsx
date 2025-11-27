import { Image } from "@unpic/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Placeholder = {
	title: <div className="bg-secondary h-5 max-w-20 w-full rounded-md" />,
	content: <div className="bg-secondary h-8 w-full rounded-md" />,
};

export const Card_19 = () => {
	return (
		<Card className="group relative overflow-hidden aspect-square">
			{/* Background image */}
			<Image
				layout="fullWidth"
				className="size-full object-bottom absolute inset-0 z-0"
				src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHByb2R1Y3RzfGVufDB8fDB8fHwy"
				alt="..."
			/>
			{/* Overlay gradient */}
			<div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-background/5 z-10 group-hover:from-transparent group-hover:via-transparent group-hover:to-transparent transition-all duration-500"></div>
			<div className="isolate z-50 flex flex-col gap-2 relative grow justify-end">
				<CardHeader>
					<CardTitle>{Placeholder.title}</CardTitle>
				</CardHeader>
				<CardContent>{Placeholder.content}</CardContent>
			</div>
		</Card>
	);
};
