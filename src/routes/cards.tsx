import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { CardContainer } from "@/components/card-container";
import { Card_1 } from "@/components/cards/card-1";
import { Card_2 } from "@/components/cards/card-2";
import { Card_3 } from "@/components/cards/card-3";
import { Card_4 } from "@/components/cards/card-4";
import { Card_5 } from "@/components/cards/card-5";
import { Card_6 } from "@/components/cards/card-6";
import { Card_7 } from "@/components/cards/card-7";
import { Card_8 } from "@/components/cards/card-8";
import { Card_9 } from "@/components/cards/card-9";
import { Card_10 } from "@/components/cards/card-10";
import { Card_11 } from "@/components/cards/card-11";
import { Card_12 } from "@/components/cards/card-12";
import { Card_13 } from "@/components/cards/card-13";
import { Card_14 } from "@/components/cards/card-14";
import { Card_15 } from "@/components/cards/card-15";
import { Card_16 } from "@/components/cards/card-16";
import { Card_17 } from "@/components/cards/card-17";
import { Card_18 } from "@/components/cards/card-18";
import { Card_19 } from "@/components/cards/card-19";
import { Card_20 } from "@/components/cards/card-20";
import { Card_21 } from "@/components/cards/card-21";
import { Card_22 } from "@/components/cards/card-22";
import { Card_23 } from "@/components/cards/card-23";
import { Card_24 } from "@/components/cards/card-24";
import { Card_25 } from "@/components/cards/card-25";
import { Card_26 } from "@/components/cards/card-26";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { urls } from "@/constants/urls";

const cards = [
	{
		id: "1",
		component: <Card_1 />,
	},
	{
		id: "2",
		component: <Card_2 />,
	},
	{
		id: "3",
		component: <Card_3 />,
	},
	{
		id: "4",
		component: <Card_4 />,
	},
	{
		id: "5",
		component: <Card_5 />,
	},
	{
		id: "6",
		component: <Card_6 />,
	},
	{
		id: "7",
		component: <Card_7 />,
	},
	{
		id: "8",
		component: <Card_8 />,
	},
	{
		id: "9",
		component: <Card_9 />,
	},
	{
		id: "10",
		component: <Card_10 />,
	},
	{
		id: "11",
		component: <Card_11 />,
	},
	{
		id: "12",
		component: <Card_12 />,
	},
	{
		id: "13",
		component: <Card_13 />,
	},
	{
		id: "14",
		component: <Card_14 />,
	},
	{
		id: "15",
		component: <Card_15 />,
	},
	{
		id: "16",
		component: <Card_16 />,
	},
	{
		id: "17",
		component: <Card_17 />,
	},
	{
		id: "18",
		component: <Card_18 />,
	},
	{
		id: "24",
		component: <Card_24 />,
	},
	{
		id: "26",
		component: <Card_26 />,
	},
];
const cardsSquare = [
	{
		id: "19",
		component: <Card_19 />,
	},
	{
		id: "20",
		component: <Card_20 />,
	},
	{
		id: "21",
		component: <Card_21 />,
	},
	{
		id: "22",
		component: <Card_22 />,
	},
	{
		id: "23",
		component: <Card_23 />,
	},
	{
		id: "25",
		component: <Card_25 />,
	},
];

export const Route = createFileRoute("/cards")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<Header />
			<div className="px-5 max-w-6xl mx-auto relative border-x border-border/60">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage: `
        linear-gradient(45deg, transparent 49%, var(--border) 49%, var(--border) 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, var(--border) 49%, var(--border) 51%, transparent 51%)`,
						backgroundSize: "10px 10px",
					}}
				/>
				<div className="border-x py-12 lg:py-20 md:py-12 bg-background z-10 isolate">
					<Layout>
						{cards.map((card) => (
							<CardContainer key={card.id} id={card.id}>
								{card.component}
							</CardContainer>
						))}
					</Layout>
					<div className="w-full pt-5 px-1">
						<div className="py-5 relative">
							<div
								className="absolute inset-0 z-0 opacity-75"
								style={{
									backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, var(--border) 2px, var(--border) 4px)`,
								}}
							/>
							<div className="w-fit mx-auto">
								<Button variant="secondary" className="z-10 isolate" size="lg">
									<a
										href={urls.github}
										target="_blank"
										rel="noopener noreferrer"
									>
										<span>Star us on GitHub</span>
									</a>
									<ArrowUpRight className="size-4" />
								</Button>
							</div>
						</div>
					</div>
					<div className="grid lg:grid-cols-3 max-w-6xl mx-auto gap-8 px-2 md:px-5 lg:px-10">
						{cardsSquare.map((card) => (
							<CardContainer key={card.id} id={card.id}>
								{card.component}
							</CardContainer>
						))}
					</div>
					<div className=" w-full pt-5 px-1">
						<div className="relative py-5">
							<div
								className="absolute inset-0 z-0 opacity-75"
								style={{
									backgroundImage:
										"repeating-linear-gradient(135deg, transparent, transparent 2px, var(--border) 2px, var(--border) 4px)",
								}}
							/>
							<div className="w-fit mx-auto z-10 isolate flex gap-3 items-center flex-col">
								<p className="text-lg">More components coming soon...</p>
								<Button variant="default" className="" size="sm">
									<FaXTwitter className="size-4" />
									<a
										href={urls.github}
										target="_blank"
										rel="noopener noreferrer"
									>
										Stay in the loop
									</a>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
