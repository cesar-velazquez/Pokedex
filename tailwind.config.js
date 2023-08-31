/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ground: '#ac8800',
        groundBottom: '#e4ebe4',

        grass: "#01781e",
        grassBottom: "#e4ebe4",

        normal: "#4c0519",
        normalBottom: "#e4ebe4",

        fighting: "#96402A",
        fightingBottom: "#e4ebe4",

        flying: "#2794a6",
        flyingBottom: "#e4ebe4",

        poison: "#6f27a6",
        poisonBottom: "#e4ebe4",

        rock: "#604505",
        rockBottom: "#e4ebe4",

        bug: "#063b08",
        bugBottom: "#e4ebe4",

        ghost: "#320153",
        ghostBottom: "#e4ebe4",

        steel: "#4a675e",
        steelBottom: "#e4ebe4",

        fire: "#e97100",
        fireBottom: "#e4ebe4",

        water: "#1483ff",
        waterBottom: "#e4ebe4",

        electric: "#e6f211",
        electricBottom: "#e4ebe4",

        psychic: "#f21196",
        psychicBottom: "#e4ebe4",

        ice: "#11e2f2",
        iceBottom: "#e4ebe4",

        dragon: "#f21111",
        dragonBottom: "#e4ebe4",

        dark: "#000",
        darkBottom: "#e4ebe4",

        fairy: "#e9a4e1",
        fairyBottom: "#e4ebe4",

        unknown: "",
        unknownBottom: "#e4ebe4",

        shadow: "",
        shadowBottom: "#e4ebe4",
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

