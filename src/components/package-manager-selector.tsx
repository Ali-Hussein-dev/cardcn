import { TabsContent } from "@radix-ui/react-tabs";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { Check, ChevronDown } from "lucide-react";
import * as React from "react";
import { SiBun, SiNpm, SiPnpm, SiYarn } from "react-icons/si";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export type PackageManager = "pnpm" | "npm" | "yarn" | "bun";

// Package manager preference atom with localStorage persistence
export const packageManagerAtom = atomWithStorage<PackageManager>(
	"package-manager-preference",
	"pnpm",
);

const prefixes = {
	pnpm: "pnpx shadcn@latest add",
	npm: "npx shadcn@latest add",
	bun: "bun x shadcn@latest add",
	yarn: "yarn shadcn@latest add",
};

const packageManagers = [
	{ value: "pnpm", Icon: SiPnpm, label: "pnpm" },
	{ value: "npm", Icon: SiNpm, label: "npm" },
	{ value: "bun", Icon: SiBun, label: "bun" },
	{ value: "yarn", Icon: SiYarn, label: "yarn" },
] as const;

export const PackageManagerSelector = ({
	registryUrl,
}: {
	registryUrl: string;
}) => {
	const [selectedManager, setSelectedManager] = useAtom(packageManagerAtom);
	const [copied, setCopied] = React.useState(false);

	const command = `${prefixes[selectedManager]} ${registryUrl}`;

	const handleCopy = () => {
		navigator.clipboard.writeText(command);
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 2000);
	};

	const selectedPackageManager = packageManagers.find(
		(pm) => pm.value === selectedManager,
	);

	return (
		<div className="inline-flex items-center gap-0.5">
			<Button
				variant="outline"
				size="sm"
				className={cn(
					"rounded-md gap-2 border rounded-r-none shadow-sm transition-all",
				)}
				onClick={handleCopy}
			>
				{copied ? (
					<Check className="size-4" />
				) : (
					selectedPackageManager && (
						<selectedPackageManager.Icon className="size-4" />
					)
				)}
				<span className="text-sm font-medium">
					{copied ? "Copied!" : selectedPackageManager?.label}
				</span>
			</Button>
			<DropdownMenu modal={false}>
				<DropdownMenuTrigger asChild>
					<Button
						variant="outline"
						size="icon"
						className="rounded-md border shadow-sm rounded-l-none h-8"
					>
						<ChevronDown className="size-4" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end" className="w-full max-w-lg p-4">
					<Tabs
						value={selectedManager}
						onValueChange={(value) =>
							setSelectedManager(value as PackageManager)
						}
						className="bg-secondary rounded-lg pb-4 overflow-hidden"
					>
						<TabsList className="w-full border-b rounded-none">
							{packageManagers.map((pm) => (
								<TabsTrigger
									key={pm.value}
									value={pm.value}
									className="flex items-center gap-1.5"
								>
									<pm.Icon className="size-4" />
									<span className="hidden sm:inline">{pm.label}</span>
								</TabsTrigger>
							))}
						</TabsList>
						<TabsContent value={selectedManager}>
							<code className="text-xs font-mono px-2 py-1.5 rounded break-all">
								{command}
							</code>
						</TabsContent>
					</Tabs>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

