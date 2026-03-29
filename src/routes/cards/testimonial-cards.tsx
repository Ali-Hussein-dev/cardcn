import { createFileRoute } from "@tanstack/react-router"
import { CardContainer } from "@/components/card-container";
import { testimonialCards } from "@/components/cards-map";
import { CategoryHeader, MainLayout } from "@/components/main-layout";
import { cardCategories } from "@/constants/card-categories";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/cards/testimonial-cards")({
	component: RouteComponent,
	head: () => ({
		meta: seo({
			title: "Shadcn Testimonial Card Components | Cardcn",
			description:
				"Explore a collection of awesome Shadcn Testimonial Card components built with React and Tailwind CSS.",
		}),
	}),
});

function RouteComponent() {
  return (
			<div>
				<MainLayout>
					<CategoryHeader
						title="Testimonial cards"
						description={
							cardCategories.find(
								(category) => category.to === "/cards/testimonial-cards",
							)?.description as string
						}
					/>
					<div className="grid grid-cols-1 sm:grid-cols-2 max-w-198 mx-auto w-full gap-4 lg:gap-6 px-3">
						{testimonialCards.map((card) => (
							<CardContainer key={card.id} id={card.id}>
								{card.component}
							</CardContainer>
						))}
					</div>
				</MainLayout>
			</div>
		);
}
