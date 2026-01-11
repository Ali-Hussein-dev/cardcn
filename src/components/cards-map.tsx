import { Card_1 } from "./cards/card-1";
import { Card_2 } from "./cards/card-2";
import { Card_3 } from "./cards/card-3";
import { Card_4 } from "./cards/card-4";
import { Card_5 } from "./cards/card-5";
import { Card_6 } from "./cards/card-6";
import { Card_7 } from "./cards/card-7";
import { Card_8 } from "./cards/card-8";
import { Card_9 } from "./cards/card-9";
import { Card_10 } from "./cards/card-10";
import { Card_11 } from "./cards/card-11";
import { Card_12 } from "./cards/card-12";
import { Card_13 } from "./cards/card-13";
import { Card_14 } from "./cards/card-14";
import { Card_15 } from "./cards/card-15";
import { Card_16 } from "./cards/card-16";
import { Card_17 } from "./cards/card-17";
import { Card_18 } from "./cards/card-18";
import { Card_19 } from "./cards/card-19";
import { Card_20 } from "./cards/card-20";
import { Card_21 } from "./cards/card-21";
import { Card_22 } from "./cards/card-22";
import { Card_23 } from "./cards/card-23";
import { Card_24 } from "./cards/card-24";
import { Card_25 } from "./cards/card-25";
import { Card_26 } from "./cards/card-26";
import { Card_27 } from "./cards/card-27";

export const basicCards = [
	{
		id: "1",
		component: <Card_1 />,
	},
	{
		id: "2",
		component: <Card_2 />,
	},
	{
		id: "3",
		component: <Card_3 />,
	},
	{
		id: "4",
		component: <Card_4 />,
	},
	{
		id: "5",
		component: <Card_5 />,
	},
	{
		id: "6",
		component: <Card_6 />,
	},
	{
		id: "7",
		component: <Card_7 />,
	},
	{
		id: "8",
		component: <Card_8 />,
	},
	{
		id: "9",
		component: <Card_9 />,
	},
	{
		id: "10",
		component: <Card_10 />,
	},
	{
		id: "11",
		component: <Card_11 />,
	},
	{
		id: "12",
		component: <Card_12 />,
	},
	{
		id: "13",
		component: <Card_13 />,
	},
	{
		id: "14",
		component: <Card_14 />,
	},
	{
		id: "15",
		component: <Card_15 />,
	},
	{
		id: "16",
		component: <Card_16 />,
	},
	{
		id: "17",
		component: <Card_17 />,
	},
	{
		id: "18",
		component: <Card_18 />,
	},
	{
		id: "24",
		component: <Card_24 />,
	},
	{
		id: "26",
		component: <Card_26 />,
	},
	{
		id: "27",
		component: <Card_27 />,
	},
];

export const productCards = [
	{
		id: "19",
		component: <Card_19 />,
	},
	{
		id: "20",
		component: <Card_20 />,
	},
	{
		id: "21",
		component: <Card_21 />,
	},
	{
		id: "22",
		component: <Card_22 />,
	},
	{
		id: "23",
		component: <Card_23 />,
	},
	{
		id: "25",
		component: <Card_25 />,
	},
];
const categories = {
	"/cards/basic-cards": basicCards,
};
export const getCardsCount = (str: string) => {
	const category = Object.keys(categories).find((key) => key === str);
	if (!category) return;
	return categories[category as keyof typeof categories].length;
};
