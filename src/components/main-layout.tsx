import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { cardCategories } from "@/constants/card-categories";
import { urls } from "@/constants/urls";
import { cn } from "@/lib/utils";
import { Footer } from "./footer";
import { Header } from "./header";
import { SponsorshipSlot } from "./sponsorship-slot";

const SidebarNav = ({ onLinkClick }: { onLinkClick?: () => void }) => {
	const router = useRouterState();
	const currentPath = router.location.pathname;

	const handleLinkClick = () => {
		// Scroll immediately and again after navigation (resetScroll timing can miss layout shifts)
		window.scrollTo(0, 0);
		onLinkClick?.();
	};

	return (
		<nav className="flex flex-col gap-4 lg:gap-6">
			{cardCategories.map((category) => {
				const isActive = currentPath === category.to;
				return (
					<Link
						key={category.to}
						to={category.to}
						onClick={handleLinkClick}
						className={cn(
							"transition-colors flex gap-2 items-center justify-between",
							isActive
								? "font-semibold text-foreground"
								: "text-muted-foreground hover:text-foreground",
						)}
					>
						{category.name}
						{/* {getCardsCount(category.to) && (
              <Badge
                className="text-xs text-muted-foreground size-6.5"
                variant="outline"
              >
                {getCardsCount(category.to)}
              </Badge>
            )} */}
					</Link>
				);
			})}
		</nav>
	);
};

const MobileSidebarDrawer = () => {
	const [open, setOpen] = useState(false);

	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<div className="w-full p-4 border-b">
				<DrawerTrigger asChild>
					<Button
						variant="default"
						className="lg:hidden sm:w-fit rounded-sm w-full"
					>
						<HiBars3 className="size-4" />
						<span>Cards Categories</span>
					</Button>
				</DrawerTrigger>
			</div>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Cards Categories</DrawerTitle>
				</DrawerHeader>
				<div className="px-4 pb-4">
					<SidebarNav onLinkClick={() => setOpen(false)} />
				</div>
			</DrawerContent>
		</Drawer>
	);
};
const Sidebar = () => {
	return (
		<>
			<aside className="hidden lg:block w-full lg:col-span-2 py-8 px-4 sm:px-6 sticky top-13 self-start max-h-screen overflow-y-auto">
				<SidebarNav />
			</aside>
			<div className="lg:hidden">
				<MobileSidebarDrawer />
			</div>
		</>
	);
};

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="bg-secondary/20">
			<Header />
			<div className="grid lg:grid-cols-12 max-w-[89rem] bg-background border-x mx-auto">
				<Sidebar />
				<div className="h-full lg:col-span-8 px-2 md:px-3 lg:px-5 relative border-x border-border/60 w-full max-w-5xl">
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
						{children}
					</div>
				</div>
				<div className="lg:col-span-2 relative justify-self-start">
					<div className="sticky top-14 w-full">
						<div className="w-full px-5 py-2 border-b border-dashed ">
							<h2 className="text-left text-xs font-bold uppercase text-amber-500">
								Gold Sponsors
							</h2>
						</div>
						<SponsorshipSlot />
						<div className="border-b border-dashed">
							<Button
								variant="ghost"
								className="w-full rounded-none py-6"
								asChild
							>
								<a
									href={urls.becomeSponsor}
									target="_blank"
									rel="noopener noreferrer"
								>
									Become a sponsor
								</a>
							</Button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};
export const CategoryHeader = ({
	title,
	description,
}: {
	title: string;
	description: string;
}) => {
	return (
		<div className="relative flex flex-col gap-2 py-6 border-b w-full px-4 md:px-6 mb-5 bg-accent/10">
			<h1 className="text-2xl font-black">{title}</h1>
			<p className="text-sm text-muted-foreground">{description}</p>
		</div>
	);
};
