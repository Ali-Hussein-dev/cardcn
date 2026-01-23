import { createFileRoute, Link } from '@tanstack/react-router'
import { HiArrowRight } from "react-icons/hi2";
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { cardCategories } from '@/constants/card-categories'
import { cn } from "@/lib/utils";

export const Route = createFileRoute('/cards/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
			<div>
				<Header />
				<div className="h-full lg:col-span-8 px-2 md:px-3 lg:px-5 relative border-x border-border/60 w-full max-w-6xl mx-auto">
					<div
						className="absolute inset-0"
						style={{
							backgroundImage: `
        linear-gradient(45deg, transparent 49%, var(--border) 49%, var(--border) 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, var(--border) 49%, var(--border) 51%, transparent 51%)`,
							backgroundSize: "10px 10px",
						}}
					/>
					<div className="border-x bg-background z-10 isolate w-full h-full">
						<div className="px-4 max-w-5xl mx-auto py-8 md:py-12 min-h-[calc(100vh-4rem)]">
							<h1 className="text-2xl font-bold mb-6">Card Categories</h1>
							<div className="grid md:grid-cols-2 gap-8">
								{cardCategories.map((category) => (
									<Link key={category.to} to={category.to}>
										<Card className="group hover:shadow-md transition-shadow sequircle rounded-3xl">
											<CardHeader>
												<CardTitle>{category.name}</CardTitle>
												<CardDescription>
													{category.description}
												</CardDescription>
											</CardHeader>
											<CardFooter className="justify-between">
												<div className="flex items-center gap-3">
													Status:
													<Badge
														variant="outline"
														className={cn(
															"uppercase",
															category.status === "wip" &&
																"border-amber-500 text-amber-700 dark:text-amber-400",
															category.status === "planned" &&
																"border-blue-500 text-blue-700 dark:text-blue-400",
															category.status === "completed" &&
																"border-green-500 text-green-700 dark:text-green-400",
														)}
													>
														{category.status}
													</Badge>
												</div>
												<HiArrowRight className="size-6 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all shrink-0" />
											</CardFooter>
										</Card>
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
}
