import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Placeholder } from "./placeholder";

export const Card_11 = () => {
	return (
		<div className="relative overflow-hidden rounded-xl">
			<div
				className="absolute inset-2 z-0 rounded-lg opacity-75"
				style={{
					backgroundImage:
						"radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)",
					backgroundSize: "10px 10px",
				}}
			/>
			<Card className="z-10 isolate bg-transparent border-border border-dotted border-[3px]">
				<CardHeader>
					<CardTitle>{Placeholder.title}</CardTitle>
				</CardHeader>
				<CardContent>{Placeholder.content}</CardContent>
			</Card>
		</div>
	);
};
