import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Placeholder = {
	title: <div className="bg-secondary h-8 max-w-40 w-full rounded-md" />,
	content: <div className="bg-secondary h-20 w-full rounded-md" />,
};

const Ellipses = () => {
	const sharedClasses =
		"rounded-full outline outline-8 sm:my-6 md:my-8 size-1 my-4 outline-background bg-foreground";
	return (
		<div className="absolute z-0 grid h-full w-full items-center gap-8 lg:grid-cols-2">
			<div className="absolute z-0 grid h-full w-full grid-cols-2 place-content-between">
				<div className={`${sharedClasses} -mx-[2.5px]`}></div>
				<div className={`${sharedClasses} -mx-[2px] place-self-end`}></div>
				<div className={`${sharedClasses} -mx-[2.5px]`}></div>
				<div className={`${sharedClasses} -mx-[2px] place-self-end`}></div>
			</div>
		</div>
	);
};

const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="relative w-full rounded-lg border px-4 sm:px-6 md:px-8">
        <div className="absolute left-0 top-4 z-0 h-px w-full bg-border sm:top-6 md:top-8"></div>
        <div className="absolute bottom-4 left-0 z-0 h-px w-full bg-border sm:bottom-6 md:bottom-8"></div>
        <div className="relative w-full border-x">
            <Ellipses />
            <div className="relative z-20 mx-auto py-8">{children}</div>
        </div>
    </div>
);
//======================================
export const Card_9 = () => {
	return (
		<Container>
			<div className="w-full p-2">
                <Card className="border-none shadow-none">
				<CardHeader>
					<CardTitle>{Placeholder.title}</CardTitle>
				</CardHeader>
				<CardContent>{Placeholder.content}</CardContent>
                </Card>
			</div>
		</Container>
	);
};