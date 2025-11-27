import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export const Route = createFileRoute("/")({ component: App });

function App() {

  return (
			<div className="min-h-screen relative">
				<Header />
				<Hero />
				<Footer />
			</div>
		);
}
