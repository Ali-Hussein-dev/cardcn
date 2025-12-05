import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { urls } from "@/constants/urls";

export const Hero = () => {
	return (
		<div className="h-[85vh] flex flex-col items-center justify-center">
			<div className="p-3">
				<div className="border p-3 border-dashed rounded-lg">
					<div className="border p-3 border-dashed bg-background rounded-lg">
						<div className="max-w-4xl border p-4 lg:p-10 bg-muted/20 rounded-lg xl:p-14">
							<h1 className="text-4xl font-bold mb-6 lg:mb-10 lg:text-5xl text-center text-pretty md:font-black">
								Free Collection of Beautifully Designed Shadcn Cards
							</h1>
							<div className="flex gap-4 justify-center">
								<Button variant="outline">
									<a
										href={urls.github}
										target="_blank"
										rel="noopener noreferrer"
									>
										GitHub
									</a>
								</Button>
								<Button>
									<Link to="/cards">Explore cards</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
