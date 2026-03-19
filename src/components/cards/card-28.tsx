/** biome-ignore-all lint/a11y/noSvgWithoutTitle: decorative quotation mark */
"use client"

import { Card, CardContent } from "@/components/ui/card"

const data = {
	author: "Matt Greck",
	authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
	authorRole: "Senior Channel Manager Club Clipsal",
	authorCompany: "Clipsal by Schneider Electric",
	quote: "It helped our customers make strategic and educated decisions about marketing their business.",
};
export function Card_28() {
	return (
		<Card className="max-w-lg w-full border-0 py-10 px-6 h-full">
			<CardContent className="flex flex-col items-center text-center px-4">
				{/* Avatar */}
				<div className="flex items-center gap-6 mb-8">
					<div className="size-22 rounded-full overflow-hidden border-2 border-border">
						<img
							src={data.authorImage}
							alt={data.author}
							className="w-full h-full"
						/>
					</div>
				</div>

				{/* Testimonial quote with decorative quotation mark */}
				<div className="relative mb-8">
					<svg
						stroke="currentColor"
						fill="currentColor"
						strokeWidth="0"
						viewBox="0 0 448 512"
						xmlns="http://www.w3.org/2000/svg"
						className="absolute left-1/2 -translate-x-1/2 top-6 size-24 text-amber-400 dark:text-amber-600 select-none pointer-events-none"
					>
						<path d="M448 296c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72zm-256 0c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 32 0 32 0 72z" />
					</svg>
					<p className="relative z-10 text-2xl text-foreground italic font-serif leading-relaxed pt-2">
						It helped our customers make strategic and educated decisions
						about marketing their business.
					</p>
				</div>

				{/* Author info */}
				<div className="space-y-1">
					<h3 className="text-sm font-bold tracking-wider text-foreground uppercase">
						{data.author}
					</h3>
					<p className="text-xs tracking-wider text-muted-foreground uppercase">
						{data.authorRole}
					</p>
					<p className="text-xs tracking-wider text-muted-foreground uppercase">
						{data.authorCompany}
					</p>
				</div>
			</CardContent>
		</Card>
	)
}
