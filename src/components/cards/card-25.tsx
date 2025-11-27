import { Image } from "@unpic/react";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Placeholder } from "./placeholder";

export const Card_25 = () => {
	return (
		<Card className="group relative overflow-hidden p-0">
			<div className="relative h-full border bg-muted rounded-lg aspect-square">
				<Image
					layout="fullWidth"
					className="object-fill max-h-full w-full absolute z-0 rounded-lg scale-x-[0.95] scale-y-[0.95] group-hover:scale-100 transition-all duration-200"
					src="https://images.unsplash.com/photo-1572196223922-d8b7e0ab0b4d?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFjY2Vzc29yeXxlbnwwfDF8MHx8fDI%3D"
					alt="..."
				/>
			</div>
			<div className="py-4 opacity-0 translate-y-10 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-200 z-20 isolate bg-card/80 backdrop-blur-sm absolute bottom-0 left-0 right-0 flex flex-col gap-4">
				<CardHeader>
					<CardTitle>{Placeholder.title}</CardTitle>
					<CardDescription>{Placeholder.description}</CardDescription>
				</CardHeader>
				<CardFooter>
					<Button className="w-full">Learn more</Button>
				</CardFooter>
			</div>
		</Card>
	);
};
