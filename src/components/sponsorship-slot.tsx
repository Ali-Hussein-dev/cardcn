import { urls } from "@/constants/urls";


const ShadcnStudio = () => (
	<a
		href={urls.sponsors.shadcnStudio}
		target="_blank"
		rel="noopener noreferrer"
	>
		<section className="text-muted-foreground space-y-4 border-b border-dashed px-4 py-6 transition-colors group-hover:text-current group-active:text-current">
			<header className="mx-auto flex items-center justify-center gap-2">
				<svg
					viewBox="0 0 328 329"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="size-8"
					aria-hidden="true"
				>
					<rect
						y="0.5"
						width="328"
						height="328"
						rx="164"
						fill="currentColor"
					></rect>
					<path
						d="M165.018 72.3008V132.771C165.018 152.653 148.9 168.771 129.018 168.771H70.2288"
						stroke-width="20"
						className="stroke-background"
					></path>
					<path
						d="M166.627 265.241L166.627 204.771C166.627 184.889 182.744 168.771 202.627 168.771L261.416 168.771"
						stroke-width="20"
						className="stroke-background"
					></path>
					<line
						x1="238.136"
						y1="98.8184"
						x2="196.76"
						y2="139.707"
						stroke-width="20"
						className="stroke-background"
					></line>
					<line
						x1="135.688"
						y1="200.957"
						x2="94.3128"
						y2="241.845"
						stroke-width="20"
						className="stroke-background"
					></line>
					<line
						x1="133.689"
						y1="137.524"
						x2="92.5566"
						y2="96.3914"
						stroke-width="20"
						className="stroke-background"
					></line>
					<line
						x1="237.679"
						y1="241.803"
						x2="196.547"
						y2="200.671"
						stroke-width="20"
						className="stroke-background"
					></line>
				</svg>
				<div className="flex flex-col">
					<span className="text-sm leading-tight font-medium">
						shadcnstudio.com
					</span>
					<span className="text-muted-foreground text-xs">
						shadcn blocks &amp; templates
					</span>
				</div>
			</header>
			<p className="text-muted-foreground text-center text-xs">
				Accelerate your project development with ready-to-use, and fully
				customizable shadcn ui Components, Blocks, UI Kits, Boilerplates,
				Templates and Themes with AI Tools 🪄.
			</p>
		</section>
	</a>
)
export function SponsorshipSlot() {
  return <ShadcnStudio />
}
