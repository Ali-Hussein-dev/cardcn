import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {cn} from "@/lib/utils";

const Placeholder = {
	title: <div className="bg-secondary h-8 max-w-40 w-full rounded-md" />,
	content: <div className="bg-secondary h-20 w-full rounded-md" />,
};
const Icon = ({ className }: { className: string }) => {
	return (
		<div
			className={cn(
				"absolute rounded-full border bg-card border-dashed",
				className,
			)}
		/>
	);
};

const Icons = () => (
	<>
		<Icon className="-top-1.5 -left-1.5 size-4" />
		<Icon className="-top-2.5 -right-2.5 size-6" />
		<Icon className="-bottom-2.5 -left-2.5 size-6" />
		<Icon className="-bottom-1.5 -right-1.5 size-4" />
	</>
)

export const Card_7 = () => {
	return (
		<Card className="relative rounded-sm shadow-none border-dashed">
            <Icons />
			<CardHeader>
				<CardTitle>{Placeholder.title}</CardTitle>
			</CardHeader>
			<CardContent>{Placeholder.content}</CardContent>
		</Card>
	);
};

