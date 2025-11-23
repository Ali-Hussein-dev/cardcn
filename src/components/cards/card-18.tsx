import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Placeholder = {
	title: <div className="bg-secondary h-8 max-w-40 w-full rounded-md" />,
	content: <div className="bg-secondary h-20 w-full rounded-md" />,
};

export const Card_18 = () => {
	return (
		<div className="relative h-full">
			<div
				className="absolute size-full rounded-xl border bg-card  dark:border-zinc-800 scale-[0.95] -top-6"
				/* style={{
					transformOrigin: "top center",
				}} */
			></div>
			<div
				className="absolute size-full rounded-xl border bg-card  dark:border-zinc-800 scale-[0.97] -top-3 shadow-[0_-2px_6px_-2px_var(--border)]"
				/* style={{
					transformOrigin: "top center",
				}} */
			></div>
			<Card className="z-10 isolate shadow-[0_-3px_6px_-2px_var(--border)]">
				<CardHeader>
					<CardTitle>{Placeholder.title}</CardTitle>
				</CardHeader>
				<CardContent>{Placeholder.content}</CardContent>
			</Card>
		</div>
	);
};
