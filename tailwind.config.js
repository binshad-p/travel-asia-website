/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./containers/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		colors: {
		  primary: "var(--primary-color)",
		  secondary: "var(--secondary-color)",
		  light: "var(--light)",
		},
		backgroundImage: {
		  service_bg: "url('/service_bg.jpg')", // Corrected path
		},
		fontFamily: {
		  Inter: ["var(--font-inter)", "sans-serif"],
		},
		animation: {
		  marquee: "marquee var(--duration) linear infinite",
		  "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
		},
		keyframes: {
		  marquee: {
			from: { transform: "translateX(0)" },
			to: { transform: "translateX(calc(-100% - var(--gap)))" },
		  },
		  "marquee-vertical": {
			from: { transform: "translateY(0)" },
			to: { transform: "translateY(calc(-100% - var(--gap)))" },
		  },
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  