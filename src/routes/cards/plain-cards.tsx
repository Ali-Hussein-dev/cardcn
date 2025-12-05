import { createFileRoute } from "@tanstack/react-router";
import { CardContainer } from "@/components/card-container";
import { plainCards } from "@/components/cards-map";
import { CategoryHeader, MainLayout } from "@/components/main-layout";
import { cardCategories } from "@/constants/card-categories";

export const Route = createFileRoute("/cards/plain-cards")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<MainLayout>
			<CategoryHeader
				title="Custom shadcn cards"
				description={
					cardCategories.find(
						(category) => category.to === "/cards/plain-cards",
					)?.description as string
				}
			/>
			<div className="grid grid-cols-1 w-full gap-4 max-w-173 mx-auto px-2">
				{plainCards.map((card) => (
					<CardContainer key={card.id} id={card.id}>
						{card.component}
					</CardContainer>
				))}
			</div>
		</MainLayout>
	);
}
