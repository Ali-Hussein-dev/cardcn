import { Link } from "@tanstack/react-router";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { Logo } from "@/components/logo";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { urls } from "@/constants/urls";

const links = [
	{
		label: "Shoogle",
		href: urls.shoogle,
		target: "_blank",
	},
	{
		label: "Hire me",
		href: "https://ali-hussein.com",
		target: "_blank",
		rel: "noopener noreferrer",
	},
];

const socialLinks = [
	{ href: urls.github, Icon: FaGithub },
	{ href: urls.twitter, Icon: FaXTwitter },
];

export function Header() {
	return (
		<header className="flex flex-row items-center justify-between px-2 md:px-4 h-14 border-b sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
			<div className="flex gap-1 items-center">
				<Link to="/" className="cursor-pointer w-fit h-fit">
					<Logo />
				</Link>
				<span className="text-xs mt-2 text-muted-foreground">ALPHA</span>
			</div>

			{/* Desktop Navigation */}
			<div className="hidden md:flex items-center grow sm:gap-4 gap-2">
				<nav className="flex items-center grow pl-4">
					{links.map(({ href, label, target, rel }) => {
						return (
							<a key={href} href={href} target={target} rel={rel}>
								<Button
									key={href}
									variant="ghost"
									size="sm"
									className="text-sm"
								>
									{label}
								</Button>
							</a>
						);
					})}
					{/* {links.map(({ href, label, target, rel }) => {
              return (
                <Button key={href} variant="ghost" size="sm">
                  <a href={href} target={target} rel={rel}>
                    {label}
                  </a>
                </Button>
              );
            })} */}
				</nav>
				<div className="flex gap-4">
					{socialLinks.map(({ href, Icon }) => {
						return (
							<a
								key={href}
								href={href}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Icon />
							</a>
						);
					})}
				</div>
				<ModeToggle />
			</div>
		</header>
	);
}
