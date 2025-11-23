import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Placeholder = {
	title: <div className="bg-secondary h-8 max-w-40 w-full rounded-md" />,
	content: <div className="bg-secondary h-20 w-full rounded-md" />,
};

export const Card_3 = () => {
	return (
		<div className="p-2 border-[0.5px] rounded-xs">
			<Card
				className={cn(
					"border-[1.5px] bg-linear-to-br rounded-xs shadow-none",
					// light mode
					"from-background to-muted/60 shadow-[2px_0_8px_rgba(0,0,0,0.15)]",
					// dark mode
					"dark:from-background dark:via-foreground/5 dark:to-background dark:shadow-inner",
				)}
			>
				<CardHeader>
					<CardTitle>{Placeholder.title}</CardTitle>
				</CardHeader>
				<CardContent>{Placeholder.content}</CardContent>
			</Card>
		</div>
	);
};
