import { createFileRoute } from "@tanstack/react-router"
import { CategoryHeader, MainLayout } from "@/components/main-layout"
import { WipCard } from "@/components/wip-card"

export const Route = createFileRoute("/cards/feature-cards")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
			<MainLayout>
				<CategoryHeader
					title="Feature cards"
					description="Beautifully styled shadcn cards for highlighting product features"
				/>
				<div className="grid grid-cols-1 w-full gap-4 lg:gap-6 grow">
					<div className="py-10">
						<WipCard />
					</div>
				</div>
			</MainLayout>
		);
}
