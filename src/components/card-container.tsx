
import { PackageManagerSelector } from "./package-manager-selector";
import { Card, CardHeader } from "./ui/card";



export const CardContainer = ({ children, id }: { children: React.ReactNode, id: string }) => {

	return (
		<Card className="border-none group shadow-none bg-transparent">
			<CardHeader className="flex justify-between items-center px-2">
				<span className="text-muted-foreground">#{id}</span>
				<div className="opacity-0 group-hover:opacity-100 transition-opacity">
					<PackageManagerSelector registryUrl={`@cardcn/card-${id}`} />
				</div>
			</CardHeader>
			{children}
		</Card>
	);
};
