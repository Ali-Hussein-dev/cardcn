import { createFileRoute, Outlet } from "@tanstack/react-router";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/cards")({
	component: RouteComponent,
	head: () => ({
		meta: seo({}),
	}),
});

function RouteComponent() {
  return <Outlet />;
}
