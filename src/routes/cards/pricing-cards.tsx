import { createFileRoute } from "@tanstack/react-router"
import { CategoryHeader, MainLayout } from "@/components/main-layout"
import { WipCard } from "@/components/wip-card"
import { cardCategories } from "@/constants/card-categories";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/cards/pricing-cards")({
	component: RouteComponent,
	head: () => ({
		meta: seo({
			title: "Pricing cards | Cardcn",
			description: "Beautifully styled shadcn cards for pricing plans",
		}),
	}),
});

function RouteComponent() {
  return (
			<MainLayout>
				<CategoryHeader
					title="Pricing cards"
					description={
						cardCategories.find(
							(category) => category.to === "/cards/pricing-cards",
						)?.description as string
					}
				/>
				<div className="grid grid-cols-1 w-full gap-4 lg:gap-6 grow">
					<div className="py-10">
						<WipCard />
					</div>
				</div>
			</MainLayout>
		);
}
