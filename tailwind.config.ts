import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm: "481px",
			md: "768px",
			lg: "1025px",
			xl: "1281px",
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			aquamarine: "#64ffda",
			"hawkes-blue": "#ccd6f6",
			manatee: "#8892b0",
			"echo-blue": "#a8b2d1",
			midnight: "#172a45",
			"black-pearl": "#0a192f",
		},
		extend: {},
	},
	plugins: [],
};
export default config;
