import { Config } from "tailwindcss";

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      borderRadius: {
        1: ".6rem",
        2: ".8rem",
        3: "1rem"
      },
      boxShadow: {
        "green-1": "0 0 0px 1px #065f46, 0 0 1px 3px #065f4681"
      }
    },
  },
  plugins: [],
} as Config

