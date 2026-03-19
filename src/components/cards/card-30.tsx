"use client";

import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const data = {
	quote:
		"The community support on Nightingale is phenomenal. I feel more connected and informed about my health all of the time.",
	author: "Mai Sakurajima",
	authorRole: "CEO, healthnext.ai",
	authorImage:
		"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
	rating: 5,
};

export function Card_30() {
	return (
		<Card className="h-full border-0 rounded-3xl bg-muted py-0 shadow-sm overflow-hidden">
			<CardContent className="flex flex-col text-left p-8 gap-6">
				{/* Star rating */}
				<div className="flex gap-0.5" role="img" aria-label={`${data.rating} out of 5 stars`}>
					{Array.from({ length: data.rating }, (_, i) => `star-${i + 1}`).map((id) => (
						<Star
							key={id}
							className="size-5 fill-amber-400 text-amber-400"
							aria-hidden
						/>
					))}
				</div>

				{/* Testimonial quote */}
				<p className="text-lg font-normal text-foreground leading-relaxed">
					{data.quote}
				</p>

				{/* Author */}
				<div className="flex items-center gap-4 mt-auto">
					<div className="size-12 shrink-0 rounded-full overflow-hidden ring-1 ring-border">
						<img
							src={data.authorImage}
							alt={data.author}
							className="w-full h-full object-cover"
						/>
					</div>
					<div className="flex flex-col min-w-0">
						<span className="font-bold text-foreground">
							{data.author}
						</span>
						<span className="text-sm text-muted-foreground">
							{data.authorRole}
						</span>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
