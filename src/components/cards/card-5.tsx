import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {cn} from "@/lib/utils";

const Placeholder = {
	title: <div className="bg-secondary h-8 max-w-40 w-full rounded-md" />,
	content: <div className="bg-secondary h-20 w-full rounded-md" />,
};
const Icon = ({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<div
			{...rest}
			className={cn(
				"dark:border-zinc-200 border-zinc-700 size-6 absolute",
				className,
			)}
		/>
	);
};

const Icons = () => (
	<>
		<Icon className="-top-0.5 -left-0.5 border-l-2 border-t-2 rounded-tl-lg " />
		<Icon className="-top-0.5 -right-0.5 border-r-2 border-t-2 rounded-tr-lg" />
		<Icon className="-bottom-0.5 -left-0.5 border-l-2 border-b-2 rounded-bl-lg" />
		<Icon className="-bottom-0.5 -right-0.5 border-r-2 border-b-2 rounded-br-lg" />
	</>
)

export const Card_5 = () => {
	return (
		<Card className="relative rounded-md bg-muted/20">
            <Icons />
			<CardHeader>
				<CardTitle>{Placeholder.title}</CardTitle>
			</CardHeader>
			<CardContent>{Placeholder.content}</CardContent>
		</Card>
	);
};

