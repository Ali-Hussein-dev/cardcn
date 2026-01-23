import { FaXTwitter } from "react-icons/fa6";
import { PiBarricade, PiBarricadeBold, PiBarricadeFill } from "react-icons/pi";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { urls } from "@/constants/urls";
import { Button } from "./ui/button";
export const WipCard = () => {
	return (
		<Card className="border-dashed border-2 max-w-xl mx-auto py-8 lg:py-20 sequircle rounded-4xl">
			<CardHeader>
				<PiBarricade className="size-16 text-primary mx-auto" />
				<CardTitle className="text-center text-2xl font-bold">
					Work in progress
				</CardTitle>
				<CardDescription className="text-center">
					New cards are on the way! Follow us for updates.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="flex flex-col items-center justify-center gap-6 ">
					<Button variant="outline" asChild>
						<a
							href={urls.twitter}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2"
						>
							Follow on
							<FaXTwitter className="size-4" />
						</a>
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}