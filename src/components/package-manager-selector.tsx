import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { Check, ChevronDown } from "lucide-react";
import * as React from "react";
import { SiBun, SiNpm, SiPnpm, SiYarn } from "react-icons/si";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
	{ value: "yarn", Icon: SiYarn, label: "yarn" },
	{ value: "bun", Icon: SiBun, label: "bun" },
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
				<DropdownMenuContent align="end" className="min-w-64">
					<DropdownMenuLabel className="px-3 py-2">
						<div className="flex flex-col gap-1">
							<span className="text-xs text-muted-foreground">Selected:</span>
							<code className="text-xs font-mono bg-muted px-2 py-1.5 rounded border text-foreground break-all">
								{command}
							</code>
						</div>
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					{packageManagers.map((pm) => (
						<DropdownMenuItem
							key={pm.value}
							onClick={() => setSelectedManager(pm.value)}
							className="flex items-center gap-2 cursor-pointer"
						>
							<pm.Icon className="size-4" />
							<span>{pm.label}</span>
							{selectedManager === pm.value && (
								<span className="ml-auto text-xs">✓</span>
							)}
						</DropdownMenuItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

