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
				"size-4 absolute border rounded-xs rotate-45 border-dashed bg-card",
				className,
			)}
		/>
	);
};

const Icons = () => (
	<>
		<Icon className="-top-2 -left-2" />
		<Icon className="-top-2 -right-2" />
		<Icon className="-bottom-2 -left-2" />
		<Icon className="-bottom-2 -right-2" />
	</>
)

export const Card_8 = () => {
	return (
		<Card className="relative rounded-none shadow-none border-dashed">
            <Icons />
			<CardHeader>
				<CardTitle>{Placeholder.title}</CardTitle>
			</CardHeader>
			<CardContent>{Placeholder.content}</CardContent>
		</Card>
	);
};

