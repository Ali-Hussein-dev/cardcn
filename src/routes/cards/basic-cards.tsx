import { createFileRoute } from "@tanstack/react-router";
import { CardContainer } from "@/components/card-container";
import { basicCards } from "@/components/cards-map";
import { CategoryHeader, MainLayout } from "@/components/main-layout";
import { cardCategories } from "@/constants/card-categories";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/cards/basic-cards")({
	component: RouteComponent,
	head: () => ({
		meta: seo({
			title: "Basic shadcn cards | Cardcn",
			description:
				"Free collection of styledshadcn cards for general use cases",
		}),
	}),
});

function RouteComponent() {
	return (
		<MainLayout>
			<CategoryHeader
				title="Shadcn Cards Collection"
				description={
					cardCategories.find(
						(category) => category.to === "/cards/basic-cards",
					)?.description as string
				}
			/>
			<div className="grid grid-cols-1 w-full gap-4 max-w-173 mx-auto px-2">
				{basicCards.map((card) => (
					<CardContainer key={card.id} id={card.id}>
						{card.component}
					</CardContainer>
				))}
			</div>
		</MainLayout>
	);
}
