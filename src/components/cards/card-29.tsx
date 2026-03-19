"use client";

import { BadgeCheck } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const data = {
	title: "Amazing to work with",
	description:
		"Our product and website redesign went great, and we're thrilled with the end result. But more than that, Brandby was just amazing to work with and made the whole process fun and stress free. They're always super responsive, and have helped us with other design needs. We highly recommend them. We're looking forward to working with them again in the future.",
	author: "Patrick Kelly",
	authorImage:
		"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
	authorVerified: true,
	authorRole: "CEO & Founder @ClickMagick",
};
export function Card_29() {
	return (
		<Card className="border-0 py-0 overflow-visible h-full">
				<CardContent className="flex flex-col gap-0 py-[46px] px-[44px] text-left">
					<CardTitle className="text-xl font-bold text-foreground mb-4">
						{data.title}
					</CardTitle>

					<p className="text-[15px] font-normal text-muted-foreground leading-[1.6] mb-10">
						{data.description}
					</p>

					<div className="flex items-center gap-4">
						<div className="size-[50px] shrink-0 rounded-full overflow-hidden">
							<img
								src={data.authorImage}
								alt={data.author}
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="flex flex-col gap-0.5 min-w-0">
							<div className="flex items-center gap-2 flex-wrap">
								<span className="font-bold text-foreground text-[15px]">
									{data.author}
								</span>
								<span
									role="img"
									aria-label="Verified"
									className="flex items-center justify-center size-5 rounded-full shrink-0"
								>
									<BadgeCheck className="size-4 text-[#1d62ad] stroke-2" />
								</span>
							</div>
							<p className="text-[13px] text-muted-foreground font-normal">
								{data.authorRole}
							</p>
						</div>
					</div>
				</CardContent>
			</Card>

	);
}
