/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind/native")
// const nativewind = require("nativewind/tailwind/css")

module.exports = {
    //   content: ["./app/**/*.{js}", "./index.js"],
    content: [
        './App.{js,ts,jsx,tsx}',
        "./screens/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ], theme: {
        extend: {},
    },
    plugins: [nativewind()],
}