import { createFileRoute } from "@tanstack/react-router"
import { CategoryHeader, MainLayout } from "@/components/main-layout"
import { WipCard } from "@/components/wip-card"
import { cardCategories } from "@/constants/card-categories";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/cards/profile-cards")({
	component: RouteComponent,
	head: () => ({
		meta: seo({
			title: "Profile cards | Cardcn",
			description:
				"Beautifully styled shadcn cards for user profiles and team members",
		}),
	}),
});

function RouteComponent() {
  return (
			<MainLayout>
				<CategoryHeader
					title="Profile cards"
					description={
						cardCategories.find(
							(category) => category.to === "/cards/profile-cards",
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
