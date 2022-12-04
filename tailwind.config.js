/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		"./app/helpers/**/*.rb",
		"./app/javascript/**/*.js",
		"./app/views/**/*.erb",
		// "./src/**/*.{html,js}"
	],
  theme: {
    extend: {},
  },
  plugins: [
		"@tailwindcss/forms",
    "@tailwindcss/typography",
	],
}
