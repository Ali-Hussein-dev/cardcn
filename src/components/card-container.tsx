
import { PackageManagerSelector } from "./package-manager-selector";
import { Card, CardHeader } from "./ui/card";



export const CardContainer = ({ children, id }: { children: React.ReactNode, id: string }) => {

	return (
		<Card className="border-none group shadow-none bg-transparent">
			<CardHeader className="flex justify-between items-center px-2">
				<span className="text-muted-foreground">#{id}</span>
				<PackageManagerSelector registryUrl={`@cardcn/card-${id}`} />
			</CardHeader>
			{children}
		</Card>
	);
};
