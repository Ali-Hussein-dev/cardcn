/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */
import { urls } from "@/constants/urls";
import { EfferdSquareLogo, ShadcnStudioSquareLogo } from "./logos";

export const ShadcnStudioMini = () => (
	<a
		href={urls.sponsors.shadcnStudio}
		target="_blank"
		className="flex items-center justify-center gap-2"
	>
		<ShadcnStudioSquareLogo />
		<div className="flex flex-col">
			<span className="text-sm leading-tight font-medium">
				shadcnstudio.com
			</span>
			<span className="text-muted-foreground text-xs">
				shadcn blocks &amp; templates
			</span>
		</div>
	</a>
);
export const EfferdMini = () => (
	<a
		href={urls.sponsors.efferd}
		target="_blank"
		className="flex items-center justify-center gap-2"
	>
		<EfferdSquareLogo />
		<div className="flex flex-col">
			<span className="text-sm leading-tight font-medium">efferd.com</span>
			<span className="text-muted-foreground text-xs">
				preimum shadcn blocks
			</span>
		</div>
	</a>
);
const ShadcnStudio = () => (
	<a href={urls.sponsors.shadcnStudio} target="_blank">
		<div className="space-y-4 border-b border-dashed px-4 py-6 transition-colors group-hover:text-current group-active:text-current">
			<header className="flex flex-col gap-2">
				<ShadcnStudioMini />
				<p className="text-muted-foreground text-center">
					Discover more card variants at ShadcnStudio
				</p>
			</header>
		</div>
	</a>
);
const Efferd = () => (
	<a href={urls.sponsors.efferd} target="_blank">
		<div className="border-b border-dashed px-4 py-6 transition-colors group-hover:text-current group-active:text-current">
			<div className="flex flex-col gap-2">
				<EfferdMini />
				<p className="text-muted-foreground text-center">
					Discover modern shadcn blocks at Efferd
				</p>
			</div>
		</div>
	</a>
);
export function SponsorshipSlot() {
	return (
		<div className="flex flex-col">
			<ShadcnStudio />
			<Efferd />
		</div>
	);
}
