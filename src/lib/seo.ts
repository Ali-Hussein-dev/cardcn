

const defaultParams = {
	title: "shadcn cards | Cardcn",
	description: "Free collection of shadcn cards",
	siteName: "cardcn",
	url: "https://cardcn.dev/",
	image: "https://cardcn.dev/opengraph-image.jpg",
	twitterSite: "@alibey_10",
	twitterCreator: "@alibey_10",
	keywords: "shadcn, cards, react, tailwind, tailwindcss",
};
export const seo = (
	params: {
		title?: string;
		description?: string;
		image?: string;
		keywords?: string;
		url?: string;
		siteName?: string;
		twitterSite?: string;
		twitterCreator?: string;
	} = defaultParams,
) => {
	const {
		title,
		description,
		keywords,
		image,
		url,
		siteName,
		twitterSite,
		twitterCreator,
	} = { ...defaultParams, ...params };
	const tags = [
		{ title },
		{ property: "og:type", content: "website" },
		{ property: "og:title", content: title },
		{ property: "og:description", content: description },
		{ property: "og:url", content: url },
		{ property: "og:site_name", content: siteName },
		{ name: "description", content: description },
		{ name: "keywords", content: keywords },
		{ name: "twitter:title", content: title },
		{ name: "twitter:description", content: description },
		{ name: "twitter:creator", content: twitterCreator },
		{ name: "twitter:site", content: twitterSite },
		{ name: "twitter:url", content: url },
		...(image
			? [
					{ name: "twitter:image", content: image },
					{ name: "twitter:card", content: "summary_large_image" },
					{ property: "og:image", content: image },
					{ property: "og:image:width", content: "1200" },
					{ property: "og:image:height", content: "630" },
					{ property: "og:image:type", content: "image/jpeg" },
				]
			: []),
	];

	return tags;
};