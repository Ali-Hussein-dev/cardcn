import { createFileRoute } from "@tanstack/react-router"
import { CardContainer } from "@/components/card-container";
import { productCards } from "@/components/cards-map";
import { CategoryHeader, MainLayout } from "@/components/main-layout";
import { cardCategories } from "@/constants/card-categories";

export const Route = createFileRoute("/cards/product-cards")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
			<div>
				<MainLayout>
					<CategoryHeader
						title="Product cards"
						description={
							cardCategories.find(
								(category) => category.to === "/cards/product-cards",
							)?.description as string
						}
					/>
					<div className="grid grid-cols-1 sm:grid-cols-2 max-w-198 mx-auto w-full gap-4 lg:gap-6 px-3 lg:px-0">
						{productCards.map((card) => (
							<CardContainer key={card.id} id={card.id}>
								{card.component}
							</CardContainer>
						))}
					</div>
				</MainLayout>
			</div>
		);
}
