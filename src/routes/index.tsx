import { createFileRoute } from '@tanstack/react-router'
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
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Layout } from "@/components/layout";

export const Route = createFileRoute("/")({ component: App });

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
];

function App() {

  return (
			<div className="min-h-screen relative">
				<Header />
				<Hero />
				<Layout>
					{cards.map((card) => (
						<CardContainer key={card.id} id={card.id}>
							{card.component}
						</CardContainer>
					))}
				</Layout>
				<Footer />
			</div>
		);
}
