import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				back1: "#f5f5f5",
				back2: "#fff",
				primary: "#0056e0",
				secondary: "#3e79d6",
				success1: "#e7fff4",
				success2: "#0c7544",
			},
			fontFamily: {
				main: ["PeydaWeb", "sans-serif"],
			},
		},
	},
	plugins: [],
};
export default config;
