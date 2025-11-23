import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Placeholder = {
	title: <div className="bg-secondary h-8 max-w-40 w-full rounded-md" />,
	content: <div className="bg-secondary h-20 w-full rounded-md" />,
};

const Line = ({ className = "" }) => (
	<div
		className={cn(
			"h-px w-full via-zinc-400 from-1% from-zinc-200 to-zinc-600 absolute z-0 dark:via-zinc-700 dark:from-zinc-900 dark:to-zinc-500",
			className,
		)}
	/>
);
const Lines = () => (
	<>
		<Line className="bg-linear-to-l left-0 top-2 sm:top-4 md:top-6" />
		<Line className="bg-linear-to-r bottom-2 sm:bottom-4 md:bottom-6 left-0" />

		<Line className="w-px bg-linear-to-t right-2 sm:right-4 md:right-6 h-full inset-y-0" />
		<Line className="w-px bg-linear-to-t left-2 sm:left-4 md:left-6 h-full inset-y-0" />
	</>
);

export const Card_2 = () => {
	return (
		<div className="relative">
			<Lines />
			<Card className="w-full border-none p-10 shadow-none">
				<CardHeader>
					<CardTitle>{Placeholder.title}</CardTitle>
				</CardHeader>
				<CardContent>{Placeholder.content}</CardContent>
			</Card>
		</div>
	);
};
