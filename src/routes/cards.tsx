import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/cards")({
	component: RouteComponent,
});

function RouteComponent() {
  return <Outlet />;
}
